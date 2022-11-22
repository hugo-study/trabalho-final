import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../funcionario/funcionario.interface';
import { FuncionarioService } from '../funcionario/funcionario.service';

@Component({
  selector: 'funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.component.html',
  styleUrls: ['./funcionarios-cadastro.component.css']
})
export class FuncionariosCadastroComponent implements OnInit {
  @Output() newFuncionarioEvent = new EventEmitter<Funcionario>();
  @Input() funcionario?: Funcionario = undefined;

  funcionarioForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    cpf: [
      null,
      [Validators.required, Validators.minLength(14), Validators.maxLength(14), Validators.required],
    ],
    admissao: [
      new Date(),
      [Validators.required]
    ],
    login: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)]
    ],
    senha: [
      null,
      [Validators.required, Validators.minLength(8), Validators.maxLength(200)]
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    const funcionario: Funcionario = this.funcionarioForm.value;

    if(funcionario.id)
      this.funcionarioService.update(funcionario).subscribe(() => this.exitForms(funcionario));
    else
      this.funcionarioService.save(funcionario).subscribe(() => this.exitForms(funcionario));
  }

  ngOnChanges(): void {
    if(this.funcionario){
      this.funcionarioForm.patchValue(this.funcionario);
    } else {
      this.funcionarioForm.reset()
    }
  }

  exitForms(funcionario: Funcionario) {
    this.funcionario = undefined
    this.funcionarioForm.reset()
    this.newFuncionarioEvent.emit(funcionario);
  }
}
