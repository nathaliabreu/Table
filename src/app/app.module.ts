import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AppComponentTableComponent } from './app-component-table/app-component-table.component';
import { AppComponenttableComponent } from './app-componenttable/app-componenttable.component';
import { ComponentComponent } from './component/component.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AppComponentTableComponent,
    AppComponenttableComponent,
    ComponentComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
