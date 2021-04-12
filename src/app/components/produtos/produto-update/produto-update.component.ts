import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';
import { IProduto } from './../../../models/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css'],
})
export class ProdutoUpdateComponent implements OnInit {
  public produto: IProduto = {
    nome: '',
    vencimento: null,
    preco: null,
  };

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.produtoService.buscarPorId(id).subscribe((resposta) => {
      this.produto = resposta;
    });
  }

  public atualizar(): void {
    this.produtoService.atualizar(this.produto).subscribe((resposta) => {
      this.produto = resposta;
      this.produtoService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} atualizado com sucesso!`,
        'toast-success'
      );
      console.log(this.produto);
      this.router.navigate(['/produtos']);
    });
  }
}
