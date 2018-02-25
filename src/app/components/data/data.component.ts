import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector:'app-data',
    templateUrl:'./data.component.html'
})

export class DataComponent{


    usuario: Object = {
        nombrecompleto:{
            nombre:'',
            apellido:''
        },
        correo:''
    }
    
    forma:FormGroup;
    constructor(){

        this.forma = new FormGroup({
            nombrecompleto:new FormGroup({
                                            nombre: new FormControl('', [
                                                                            Validators.required,
                                                                            Validators.minLength(5)
                                                                        ]),
                                            apellido: new FormControl('', [
                                                                             Validators.required,
                                                                             Validators.minLength(5)
                                                                          ])
            }),
            correo: new FormControl('', [ 
                                            Validators.required, 
                                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') 
                                        ])
        });
    }

    guardarCambios(){
        console.log(this.forma);
    }

}

/**
 * forma:FormGroup: es que el encarado de todos los elemento que vamos a utlilizar y recibe como parametros
 * los elementos del furmulario.
 * 
 * new FormControl: es la clase mediante la cual instanciamos los elementos de los formularios.
 * y resive como parámetro: 1- Valor por defecto, 2- Reglas de validación, y 3- reglas de validacion asincronicas
 */