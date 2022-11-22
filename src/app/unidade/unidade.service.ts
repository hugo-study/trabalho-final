import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unidade } from './unidade.interface';

@Injectable({
  providedIn: 'root',
})
export class UnidadeService {
  constructor(private http: HttpClient) { }

  getUnidade(id: number): Observable<Unidade> {
    return this.http.get<Unidade>(`http://localhost:3000/unidades/${id}`);
  }

  getUnidades(): Observable<Unidade[]> {
    return this.http.get<Unidade[]>('http://localhost:3000/unidades');
  }

  save(unidade: Unidade): Observable<Unidade> {
    return this.http.post<Unidade>('http://localhost:3000/unidades', unidade);
  }

  
  update(unidade: Unidade): Observable<Unidade> {
    return this.http.put<Unidade>(`http://localhost:3000/unidades/${unidade.id}`, unidade);
  }

  remove({ id }: Unidade): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/unidades/${id}`);
  }
}
