import { IProduto } from './../../../models/IProduto.model';
import { ProdutosService } from '../../../services/produtos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css'],
})
export class ProdutosListComponent implements OnInit, OnDestroy {
  public produtos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(): void {
    this.produtos = [];
    this.produtosService
      .buscarTodos()
      .subscribe((resultado) => {
        this.produtos = resultado;
      })
      .unsubscribe();
  }

  public deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} excluido com sucesso!`,
        'toast-error'
      );
      this.buscarProdutos();
    });
  }
}
