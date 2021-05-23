class View {
    constructor(seletor) {
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
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    getMonth() {
        return this._meses;
    }
}
