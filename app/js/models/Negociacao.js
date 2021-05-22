class Negociacao {
    constructor(_data, _quant, _valor) {
        this._data = _data;
        this._quant = _quant;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quant;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quant * this._valor;
    }
}
