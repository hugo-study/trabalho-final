import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`http://localhost:3000/itens/${id}`);
  }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/itens');
  }

  save(livro: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:3000/itens', livro);
  }

  
  update(livro: Item): Observable<Item> {
    return this.http.put<Item>(`http://localhost:3000/itens/${livro.id}`, livro);
  }

  remove({ id }: Item): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/itens/${id}`);
  }
}
