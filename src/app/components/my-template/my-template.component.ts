import { Component } from '@angular/core';

@Component({
    selector:'app-mytemplate',
    templateUrl:'./my-template.component.html'
})

export class MyTemplateComponent{

    person:Object = {

    }

    constructor(){

    }

    send(forma:any){
        console.log(forma);
    }

}