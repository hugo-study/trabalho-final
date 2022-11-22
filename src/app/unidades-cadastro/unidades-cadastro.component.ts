import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unidade } from '../unidade/unidade.interface';
import { UnidadeService } from '../unidade/unidade.service';

@Component({
  selector: 'unidades-cadastro',
  templateUrl: './unidades-cadastro.component.html',
  styleUrls: ['./unidades-cadastro.component.css']
})
export class UnidadesCadastroComponent implements OnInit {
  @Output() newUnidadeEvent = new EventEmitter<Unidade>();
  @Input() unidade?: Unidade = undefined;

  unidadeForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    rua: [
      null,
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    bairro: [
      null,
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    cidade: [
      null,
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    estado: [
      null,
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private unidadeService: UnidadeService
    ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    const unidade: Unidade = this.unidadeForm.value;

    if(unidade.id)
      this.unidadeService.update(unidade).subscribe(() => this.exitForms(unidade));
    else
      this.unidadeService.save(unidade).subscribe(() => this.exitForms(unidade));
  }

  ngOnChanges(): void {
    if(this.unidade){
      this.unidadeForm.patchValue(this.unidade);
    } else {
      this.unidadeForm.reset()
    }
  }

  exitForms(unidade: Unidade) {
    this.unidade = undefined
    this.unidadeForm.reset()
    this.newUnidadeEvent.emit(unidade);
  }

}
