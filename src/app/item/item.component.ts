import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { ItemService } from './item.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  display: boolean = false;
  itens: Item[] = [];
  item?: Item = undefined;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItens()
  }

  showDialog() {
    this.display = true;
  }

  itemSaved(item: Item) {
    this.getItens()
    this.display = false;
  }

  getItens() {
    this.itemService.getItens().subscribe(
      (itens) => {this.itens = itens;},
      (error) => {console.error(error)},
      () => {console.log('Itens carregado.')}
    )
  }

  removeItem(item: Item) {
    this.itemService.remove(item).subscribe(
      () => {this.getItens()},
      (error) => {console.error(error)},
      () => {console.log('Item removido.')}
    )
  }

  editItem(item: Item) {
    this.item = item
    this.display = true;
  }
}
