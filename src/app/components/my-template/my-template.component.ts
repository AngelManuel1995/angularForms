import { Component } from '@angular/core';
import { Form }      from '@angular/forms';   
@Component({
    selector:'app-mytemplate',
    templateUrl:'./my-template.component.html',
    styles:[`
        .ng-invalid.ng-touched:not(form){
            border: 1px solid red;
        }
    `]
})

export class MyTemplateComponent{

    person:Object = {
        name:null,
        lastName:null,
        email:null,
        country:"Seleccione un pais",
        gender:"M"
    }

    contries:Object[] = [
        {
            name:"Colombia",
            code:"COL"
        },
        {
            name:"Chile",
            code:"CHI"
        },
        {
            name:"Argentina",
            code:"ARG"
        }
    ]

    /*
        Podemos hacer esto para mantener un copia de un objeto original,
        pero debemos hacerlo con el ngModel solo usando los parentesis.
        person:Object = {
            name:"Angel Manuel",
            lastName:"Góez Giraldo",
            email:"an@gmail.com"
        }
    */ 

    constructor(){

    }

    send(forma:Form){
        console.log(forma);
    }

    show(personEmail:any){
        console.log(personEmail);
        console.log(personEmail.errors);
    }

}