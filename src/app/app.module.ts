import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsCadastroComponent } from './items-cadastro/items-cadastro.component';
import { ItemComponent } from './item/item.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'cadastro',
    component: ItemsCadastroComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ItemsCadastroComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
    DropdownModule,
    InputNumberModule,
    DialogModule,
    InputTextareaModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
