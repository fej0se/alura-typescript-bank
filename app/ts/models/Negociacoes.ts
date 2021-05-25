import { Imprimivel } from './Imprimivel';
import { Negociacao } from './Negociacao'

export class Negociacoes implements Imprimivel{
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

}