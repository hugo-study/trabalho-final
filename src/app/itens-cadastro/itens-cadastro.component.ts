import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input() item?: Item = undefined;
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
      {id: 2, nome:"Acompanhamentos"},
      {id: 3, nome:"Bebidas"}
    ]
  }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    const item: Item = this.produtoForm.value;

    if(item.id)
      this.itemService.update(item).subscribe(() => this.exitForms(item));
    else
      this.itemService.save(item).subscribe(() => this.exitForms(item));
  }

  ngOnChanges(): void {
    if(this.item){
      this.produtoForm.patchValue(this.item);
    } else {
      this.produtoForm.reset()
    }
  }

  exitForms(item: Item) {
    this.item = undefined
    this.produtoForm.reset()
    this.newItemEvent.emit(item);
  }
}
