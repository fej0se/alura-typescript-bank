class NegociacoesView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>

          ${model.toArray().map(negociacao => (`<tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                        <td>${negociacao.volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>                        
                `)).join('')}

          </tbody>

          <tfoot>
          </tfoot>
      </table>               
      `;
    }
}
