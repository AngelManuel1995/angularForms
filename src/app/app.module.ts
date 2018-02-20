import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { MyTemplateComponent } from './components/my-template/my-template.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TemplateComponent,
    MyTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
