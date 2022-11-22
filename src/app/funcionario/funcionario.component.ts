import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario.interface';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  display: boolean = false;
  funcionarios: Funcionario[] = [];
  funcionario?: Funcionario = undefined;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getFuncionarios()
  }

  showDialog() {
    this.display = true;
  }

  funcionarioSaved(item: Funcionario) {
    this.getFuncionarios()
    this.display = false;
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(
      (funcionarios) => {this.funcionarios = funcionarios;},
      (error) => {console.error(error)},
      () => {console.log('funcionarios carregado.')}
    )
  }

  removeFuncionario(funcionario: Funcionario) {
    this.funcionarioService.remove(funcionario).subscribe(
      () => {this.getFuncionarios()},
      (error) => {console.error(error)},
      () => {console.log('Funcionario removido.')}
    )
  }

  editFuncionario(funcionario: Funcionario) {
    this.funcionario = funcionario
    this.display = true;
  }

}
