abstract class View<T> {

  private _element: Element;
  private _meses: Array<string>;

  constructor(seletor: string) {
    this._meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    this._element = document.querySelector(seletor);
  }

  update(model: T) {

    this._element.innerHTML = this.template(model);
  }

  getMonth() {
    return this._meses;
  }

  abstract template(model: T): string;

}