class NegociacaoController {
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    //render view
    this._negociacoesView.update(this._negociacoes);

  }

  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(`${this._inputData.value}T00:00`), //ou new Date(this._inputData.value.replace(/-/g, '/'))
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
      );
      this._negociacoes.adiciona(negociacao)

      //update view
      this._negociacoesView.update(this._negociacoes);
      //mensagem view
      this._mensagemView.update('Negociação adicionada com sucesso');
  }
}