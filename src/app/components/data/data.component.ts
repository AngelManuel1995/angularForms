import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
    selector:'app-data',
    templateUrl:'./data.component.html'
})

export class DataComponent{
    
    forma:FormGroup;

    constructor(){
        this.forma = new FormGroup({
            nombre: new FormControl('Angel'),
            apellido: new FormControl(),
            correo: new FormControl()
        });
    }

    guardarCambios(){
        console.log(this.forma.value);
    }

}

/**
 * forma:FormGroup: es que el encarado de todos los elemento que vamos a utlilizar y recibe como parametros
 * los elementos del furmulario.
 * 
 * new FormControl: es la clase mediante la cual instanciamos los elementos de los formularios.
 * y resive como parámetro: 1- Valor por defecto, 2- Reglas de validación, y 3- reglas de validacion asincronicas
 */