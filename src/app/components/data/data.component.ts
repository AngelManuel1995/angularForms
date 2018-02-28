import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Rx";
@Component({
		selector:'app-data',
		templateUrl:'./data.component.html'
})

export class DataComponent{

		usuario: Object = {
			 
				nombrecompleto:{
						nombre:'Angel Manuel',
						apellido:'Góez Giraldo'
				},

				correo:'angelmanuel.goez@gmail.com',
				// pasatiempos:['Correr', 'Programar', 'Cine']
		}
		
		forma:FormGroup;
		constructor(){

				this.forma = new FormGroup({
						'nombrecompleto':new FormGroup({
								'nombre': new FormControl('', [
																								Validators.required,
																								Validators.minLength(5)
																						]),
								'apellido': new FormControl('', [
																										Validators.required,
																										Validators.minLength(5)
																								])
						}),
						'correo': new FormControl('', [ 
																						Validators.required, 
																						Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') 
																				]),
						'pasatiempos':new FormArray([
								new FormControl('', [Validators.required, Validators.minLength(5), this.noPaja])
						]),
						'username': new FormControl('', Validators.required, this.existeUsuario),
						'password': new FormControl('', [Validators.required]),
						'confirmPassword': new FormControl('')
				});
		
				//this.forma.setValue(this.usuario);
				this.forma.controls['confirmPassword'].setValidators([Validators.required, this.noIguales.bind(this.forma)]);

				this.forma.controls['username'].valueChanges
						.subscribe(data => {
							console.log(data)
						})
				
				this.forma.controls['username'].statusChanges
						.subscribe( data => {
							console.log(data);
						})
		}

		agregarPasatiempo(){
				
				(<FormArray>this.forma.controls['pasatiempos']).push(
						new FormControl('', [Validators.required, Validators.minLength(5), this.noPaja] )
				)
		}

		//Validaciones
		//Las validaciones se encuentran en un contexto diferente por lo que debemos usar la función bind(), 
		//para definirle el alcance de la forma
		noPaja( control:FormControl):{ [s:string]:boolean }{
				if( control.value === "pajaso" ){
						return {
								nopaja:true
						}
				}
				return null;
		}

		noIguales( control:FormControl ):{[s:string]:boolean}{
				let forma:any = this;
				if( control.value !== forma.controls['password'].value ){
						return {
								noiguales:true
						}
				}	
				return null;		
		}

		noIguales1( control:FormControl ):{[s:string]:boolean}{
				let forma:any = this;
				if( control.value !== forma.controls['confirmPassword'].value ){
						return {
								noiguales:true
						}
				}	
				return null;		
		}

		existeUsuario( control:FormControl ):Promise<any> | Observable<any>{
				let promesa = new Promise ( ( resolve, reject ) =>{
					setTimeout( () => {
						if( control.value === "pache"){
							resolve({existeusuaio: true});
						}else{
							resolve(null);
						}
					},3000)
				});
				return promesa;
		}

		guardarCambios(){
				console.log(this.forma);
				console.log(this.forma.value);
		//     this.forma.reset({
		//         nombrecompleto:{
		//             nombre:'',
		//             apellido:''
		//         },
		//         correo:''
		//     });
		// }

		}
}

/**
 * forma:FormGroup: es que el encarado de todos los elemento que vamos a utlilizar y recibe como parametros
 * los elementos del furmulario.
 * 
 * new FormControl: es la clase mediante la cual instanciamos los elementos de los formularios.
 * y resive como parámetro: 1- Valor por defecto, 2- Reglas de validación, y 3- reglas de validacion asincronicas
 * 
 * Para setteat valores por defecto lo que podemos hacer es lo siguiente:
 *      Podemos settearlos en en primer parámetro que resive la función para crear control FromContro
 *      Ejemplo: nombre:FormCotrol = new FormControl(usuario.nombrecompleto.nombre,validaciones,validacionesAsincrónicas);
 *      También podemos hacer haciendo uso del método setValue the objeto FormGroup; pero tenemos que tener en cuenta que la 
 *      estructura del objeto debe ser igual a la estructua que hicimos en el formulario.
 * 
 * Ahora si queremos es reseteat la información que tiene cargada en formulario, lo podemos hacer con la método de la clase
 * FormGroup reset(), que le enviaremos en objeto de la misma forma, del objeto original pero esta vez se lo enviaremos con 
 * los valores de string vacios para que sea esto lo que pase al formulario que quedará con los valores por defecto.
 */

 /**
	* Validaciones personalizadas
	* Las validaciones peronalizadas con validacione que haremos como una función que será llamada como sugundo parámetro 
	* cuando instanciemos un objeto de la clase FormControl (si tenemos más de una validación debemos pasar un arreglo )
	* 'nombre': new FormControl('Valor por defecto', [Validators.required, this.miValidacionPersonalizada], 'Validaciones asíncronas')
	*
	*/