import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from './categoria.interface';

@Component({
  selector: 'items-cadastro',
  templateUrl: './items-cadastro.component.html',
  styleUrls: ['./items-cadastro.component.css']
})
export class ItemsCadastroComponent implements OnInit {
  categories: Categoria[];

  produtoForm: FormGroup = this.formBuilder.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    descricao: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    selectedCategoria: [
      '',
      []
    ],
    ativo: [
      '',
      []
    ],
    preco: [
      '',
      []
    ],
  });

  constructor(private formBuilder: FormBuilder) {
    this.categories = [
      {id: 1, nome:"Lanches"},
      {id: 1, nome:"Acompanhamentos"},
      {id: 1, nome:"Bebidas"}
    ]
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
