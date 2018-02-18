import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

@Component({
    selector:'app-template',
    templateUrl:'./template.component.html',
    styles:[`
        .ng-invalid.ng-touched:not(form){
            border: 1px solid red;
        }
    `]
})

export class TemplateComponent{
    
    usuario:Object = {
        nombre:null,
        apellido:null,
        correo:null,
        pais:"Seleccione un pais",
        genero:'Masculino',
        acepta:false
    }

    paises:Object[] = [
        {
            nombre:"Colombia",
            codigo:"COL"
        },
        {
            nombre:"Argentina",
            codigo:"ARG"
        },
        {
            nombre:"Chile",
            codigo:"CHL"
        }
    ]

    generos:Object[] = ['Masculino', 'Femenino', 'Sin definir'];
     

    constructor(){

    }

    save(forma:NgForm){
        console.log("Formulario posteado");
        console.log(forma);
    }

}