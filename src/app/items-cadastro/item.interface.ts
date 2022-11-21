import { Categoria } from "./categoria.interface";

export interface Item {
  id?: number,
  nome: string,
  descricacao: string,
  preco: number,
  categoria: Categoria,
  status: boolean
}
