class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  toArray(): Negociacao[] {
    return [].concat(this._negociacoes); //encapsulando o array
  }

}