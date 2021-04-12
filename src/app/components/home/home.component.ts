import { Component, OnInit } from '@angular/core';

export class ProdutoModel {
  id: number;
  nome: string;
  descricao: string;
  dataValidade: Date;
  valor: number;
  perecivel: boolean;

  public exibeProduto(): void {
    console.log(this);
  }
}

export interface IProduto {
  id?: number;
  nome: string;
  descricao?: string;
  anuncio?: string;
  dataValidade: Date;
  valor: number;
}

let google = 'www.google.com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Aqui declaramos as variaveis globais
  public nomeProduto: string = 'Teste';
  public descricaoProduto: string = 'Descrição completa de um produto';
  public anuncio: string = `O ${this.nomeProduto} está em promoção hoje!`;
  public idProduto: number = 1;
  public valorProduto: number = 2.55;
  public produtoPerecivel: boolean = false;
  public validade: Date = new Date();
  public fotoProduto: string =
    'https://www.tondoembalagens.com.br/userfiles/produtos/papelao_ondulado/caixa.jpg';

  public visivel: boolean = true;

  public testeAny: any = 'teste';

  constructor() {
    console.log(google);
    const produto = new ProdutoModel();

    produto.nome = 'Teste';
    produto.exibeProduto();

    this.testeAny = 10;
  }

  ngOnInit(): void {}
}
