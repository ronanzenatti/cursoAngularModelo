import { environment } from './../../environments/environment';
import { IProduto } from './../models/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

 // private url = environment.URL;
  private url = 'https://my-json-server.typicode.com/ronanzenatti/testeServerJSON/produtos/';

  constructor(private http: HttpClient, private toast: ToastrService) {}

  public buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.url).pipe(
      map((retorno) => retorno),
      catchError((e) => this.exibeErros(e))
    );
  }

  public exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toast.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  exibeErros(e: any): Observable<any> {
    this.exibirMensagem(
      'ERRO!!!',
      'Não foi possivel realizar a operação!',
      'toast-error'
    );
    return EMPTY;
  }

  public cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.url, produto).pipe(
      map((retorno) => retorno),
      catchError((e) => this.exibeErros(e))
    );
  }

  public buscarPorId(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((e) => this.exibeErros(e))
    );
  }

  public atualizar(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.url}/${produto.id}`, produto).pipe(
      map((retorno) => retorno),
      catchError((e) => this.exibeErros(e))
    );
  }

  public excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((e) => this.exibeErros(e))
    );
  }
}
