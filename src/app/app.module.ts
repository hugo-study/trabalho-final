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
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ItemComponent } from './item/item.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'cadastro',
    component: ItensCadastroComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ItensCadastroComponent,
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
    TableModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
