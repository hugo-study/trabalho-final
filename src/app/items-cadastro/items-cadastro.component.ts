import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'items-cadastro',
  templateUrl: './items-cadastro.component.html',
  styleUrls: ['./items-cadastro.component.css']
})
export class ItemsCadastroComponent implements OnInit {
  produtoForm: FormGroup = this.formBuilder.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    descricao: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    ativo: [
      '',
      []
    ],
    quantidade: [
      '',
      []
    ],
    preco: [
      '',
      []
    ],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
