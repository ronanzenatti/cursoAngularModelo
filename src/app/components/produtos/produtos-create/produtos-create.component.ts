import { IProduto } from './../../../models/IProduto.model';
import { ProdutosService } from '../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css'],
})
export class ProdutosCreateComponent implements OnInit {
  public produto: IProduto = {
    nome: '',
    vencimento: null,
    preco: null,
  };

  constructor(
    private produtoService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public salvar(): void {
    this.produtoService.cadastrar(this.produto).subscribe((resposta) => {
      this.produto = resposta;
      this.produtoService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} cadastrado com sucesso!`,
        'toast-success'
      );
      console.log(this.produto);
      this.router.navigate(['/produtos']);
    });
  }
}
