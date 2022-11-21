import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Categoria } from '../item/categoria.interface';
import { Item } from '../item/item.interface';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'itens-cadastro',
  templateUrl: './itens-cadastro.component.html',
  styleUrls: ['./itens-cadastro.component.css']
})
export class ItensCadastroComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Item>();
  categories: Categoria[];

  produtoForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    descricao: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    selectedCategoria: [
      null,
      [Validators.required]
    ],
    status: [
      true,
      [Validators.required]
    ],
    preco: [
      null,
      [Validators.required]
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
    ) {
    this.categories = [
      {id: 1, nome:"Lanches"},
      {id: 1, nome:"Acompanhamentos"},
      {id: 1, nome:"Bebidas"}
    ]
  }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    const item: Item = this.produtoForm.value;
    
    this.itemService.save(item).subscribe(() => this.newItemEvent.emit(item));
    
  }

}
