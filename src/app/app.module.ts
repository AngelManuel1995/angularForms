import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
