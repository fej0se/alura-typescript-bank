import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';
import { DiaDaSemana } from '../helpers/enums/index'

export class NegociacaoController {
  @domInject('#data')
  private _inputData: JQuery;

  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  @domInject('#valor')
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  private _service = new NegociacaoService();

  constructor() {
    //render view
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoDeExecucao(true)
  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(`${this._inputData.val()}T00:00`);

    if (!this._ehDiaUtil(data)) {

      this._mensagemView.update('Negociações aos sábados e domingos não são aceitas.');
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
    this._mensagemView.update('Negociação adicionada com sucesso.');

    //imprime no console
    imprime(negociacao, this._negociacoes, { paraTexto: () => console.log('oi') });
  }

  private _ehDiaUtil(data: Date) {

    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }


  @throttle()
  async importaDados() {
    try {
      function checkRes(res: Response) {
        if (res.ok) {
          return res
        } else {
          throw new Error(res.statusText);
        }
      }

      const negociacoesParaImportar = await this._service
        .obterNegociacoes(checkRes)

      const negociacoesJaImportadas = this._negociacoes.toArray();

      negociacoesParaImportar
        .filter((negociacao: Negociacao) =>
          !negociacoesJaImportadas.some(jaImportada =>
            negociacao.ehIgual(jaImportada)))
        .forEach((negociacao: Negociacao) =>
          this._negociacoes.adiciona(negociacao));
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update('Negociações importadas com sucesso.');
    } catch (e) {
      this._mensagemView.update(e.message);
    }
  }
}