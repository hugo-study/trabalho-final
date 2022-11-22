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
import {SpeedDialModule} from 'primeng/speeddial';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ItemComponent } from './item/item.component';
import { Route, RouterModule } from '@angular/router';
import { UnidadeComponent } from './unidade/unidade.component';
import { UnidadesCadastroComponent } from './unidades-cadastro/unidades-cadastro.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const routes: Route[] = [
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'unidade',
    component: UnidadeComponent
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ItensCadastroComponent,
    ItemComponent,
    UnidadeComponent,
    UnidadesCadastroComponent,
    FuncionarioComponent
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
    SpeedDialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
