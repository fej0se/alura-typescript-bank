class NegociacoesView extends View<Negociacoes>{

  template(negociacoes: Negociacoes): string {
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

          ${negociacoes.toArray().map(negociacao =>
            (`<tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                        <td>${negociacao.volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>                        
                `)
            ).join('')}

          </tbody>

          <tfoot>
          </tfoot>
      </table>               
      `
  }
  
}