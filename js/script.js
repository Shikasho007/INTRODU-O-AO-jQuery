$(document).ready(function() {
    // Selecionando o elemento que iremos monitorar o click
    $('.btn').click(function(event) {
        event.preventDefault()

        // Armazenando os dados digitados em variáveis
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var mensagem = 'Seja bem vindo, ' + nome + ', sua idade é ' + idade

        $('#mensagem').append(mensagem)

        // Limpar os campos do formulário
        $('#NOME').val('')
        $('#IDADE').val('')

        $('#NOME').focusin(function() {
            $('#mensagem').empty()
        })
    })
})