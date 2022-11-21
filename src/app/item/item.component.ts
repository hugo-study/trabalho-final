import { Component, OnInit } from '@angular/core';
import { Item } from '../items-cadastro/item.interface';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

  itemSaved(item: Item) {
    this.display = false;
  }

}
