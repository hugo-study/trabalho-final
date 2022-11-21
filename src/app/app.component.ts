import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trabalho-final';
  items: MenuItem[] = [];

  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-align-justify',
        routerLink: ['/item']
      },
      {
        icon: 'pi pi-book',
        routerLink: ['/unidade']
      },
      {
        icon: 'pi pi-user',
        routerLink: ['/funcionario']
      }
    ]
  }
}
