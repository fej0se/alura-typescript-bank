import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class NegociacaoController {
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
@logarTempoDeExecucao(true)
  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(`${this._inputData.val()}T00:00`);

    if (!this._ehDiaUtil(data)) {

      this._mensagemView.update('Negociações aos sábados e domingos não são aceitas');
      return
    }

    const negociacao = new Negociacao(
      data, //ou new Date(this._inputData.value.replace(/-/g, '/'))
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );
    this._negociacoes.adiciona(negociacao)
    //update view
    this._negociacoesView.update(this._negociacoes);
    //mensagem view
    this._mensagemView.update('Negociação adicionada com sucesso');
  }

  private _ehDiaUtil(data: Date) {

    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}