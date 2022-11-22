import { Component, OnInit } from '@angular/core';
import { Unidade } from './unidade.interface';
import { UnidadeService } from './unidade.service';

@Component({
  selector: 'unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {
  display: boolean = false;
  unidades: Unidade[] = [];
  unidade?: Unidade = undefined;

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.getUnidades()
  }

  showDialog() {
    this.display = true;
  }

  unidadeSaved(item: Unidade) {
    this.getUnidades()
    this.display = false;
  }

  getUnidades() {
    this.unidadeService.getUnidades().subscribe(
      (unidades) => {this.unidades = unidades;},
      (error) => {console.error(error)},
      () => {console.log('unidades carregado.')}
    )
  }

  removeUnidade(unidade: Unidade) {
    this.unidadeService.remove(unidade).subscribe(
      () => {this.getUnidades()},
      (error) => {console.error(error)},
      () => {console.log('Unidade removido.')}
    )
  }

  editUnidade(unidade: Unidade) {
    this.unidade = unidade
    this.display = true;
  }

}
