import { ToastrService } from 'ngx-toastr';
import { Produto } from './../models/Produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = 'http://localhost:3001/produtos/';

  constructor(private http: HttpClient, private toast: ToastrService) { }

  public buscarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(e => this.exibeErros(e))
    );
  }

  exibeErros(e: any): Observable<any> {
    this.exibirMensagem('ERRO!!!', 'Não foi possivel realizar a operação!', 'toast-error');
    return EMPTY;
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto).pipe(
      map(retorno => retorno),
      catchError(e => this.exibeErros(e))
    );
  }

  public exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toast.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }

  public buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(e => this.exibeErros(e))
    );
  }

  public atualizar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(e => this.exibeErros(e))
    );
  }

  public excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(e => this.exibeErros(e))
    );
  }
}
