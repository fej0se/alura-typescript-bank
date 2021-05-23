export abstract class View<T> {

  private _element: JQuery;
  private _escapar: boolean;
  private _meses: Array<string>;

  constructor(seletor: string, escapar: boolean = false) {
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
    this._escapar = escapar;
    this._element = $(seletor);
  }

  update(model: T) {

    let template = this.template(model);
    if (this._escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');

    this._element.html(template);
  }

  getMonth() {
    return this._meses;
  }

  abstract template(model: T): string;

}