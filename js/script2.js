$(document).ready(function() {

    // hide 
    $('p').hide()
        // Monitorar o click no botão "read"
    $("#read").click(function(e) {
        e.preventDefault()
            // toggle Velociade
        $("p").toggle(1500, function() {
            // Criar uma váriavel para receber o status
            let status = $('#read').attr("data-status")
                // Limpando labem do btn
            $('#read').empty()
                // Testando o status
            if (status == 1) {
                $('#read').append('Esconder resumo')
                $('#read').attr('data-status', '2')
            } else {
                $('#read').append('Ver resumo')
                $('#read').attr('data-status', '1')
            }
        })
    })
})