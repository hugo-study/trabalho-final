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
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar'


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ItemComponent } from './item/item.component';
import { Route, RouterModule } from '@angular/router';
import { UnidadeComponent } from './unidade/unidade.component';
import { UnidadesCadastroComponent } from './unidades-cadastro/unidades-cadastro.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionariosCadastroComponent } from './funcionarios-cadastro/funcionarios-cadastro.component';

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
  },
  { 
    path: '',   
    redirectTo: '/item', 
    pathMatch: 'full' 
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ItensCadastroComponent,
    ItemComponent,
    UnidadeComponent,
    UnidadesCadastroComponent,
    FuncionarioComponent,
    FuncionariosCadastroComponent
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
    InputMaskModule,
    PasswordModule,
    CalendarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
