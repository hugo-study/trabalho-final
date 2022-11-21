import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Categoria } from './categoria.interface';
import { Item } from './item.interface';
import { ItemsService } from './items.service';

@Component({
  selector: 'items-cadastro',
  templateUrl: './items-cadastro.component.html',
  styleUrls: ['./items-cadastro.component.css']
})
export class ItemsCadastroComponent implements OnInit {
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
    ativo: [
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
    private itemService: ItemsService
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
