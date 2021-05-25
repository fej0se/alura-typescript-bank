import { Negociacao, MeuObjeto } from './index';


export class Negociacoes implements MeuObjeto<Negociacoes>{
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  toArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this._negociacoes); //encapsulando o array
  }

  paraTexto(): void {
    console.log('-- paraTexto --');
    console.log(JSON.stringify(this._negociacoes));
}

ehIgual(negociacoes: Negociacoes): boolean {
  return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.toArray())
}

}