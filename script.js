function gerarTabuada() {
    // Iniciando variáveis
    var num = document.querySelector('#iNum').value
    var tabu = document.querySelector('#iTabu')

    // Condiçao pra que o usuário não deixe o input vazio
    if (num.length > 0) {
        
        // Converter pra Number caso a condição for verdadeira
        num = Number(num)

        // Configurar o select
        tabu.innerText = ''
        tabu.size = '10'
        tabu.style.padding = '5px'

        // Estrutura for pra gerar a tabuada
        for (i = 1; i <= 10; i++) {
            var opt = document.createElement('option')
            opt.text = `${num} X ${i} = ${num*i}`
            tabu.appendChild(opt)
        }

    } else {
        alert('[ERRO]: Insira um número.')
    }
}