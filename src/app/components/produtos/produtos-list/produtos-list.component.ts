import { Produto } from './../../../models/Produto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  public buscarProdutos(): void {
    this.produtos = [];
    this.produtosService.buscarTodos().subscribe(resultado => {
      this.produtos = resultado;
    });
  }

  public deletar(produto: Produto): void {
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem('SISTEMA', `${produto.nome} excluido com sucesso!`, 'toast-warning');
      this.buscarProdutos();
    });
  }

}
