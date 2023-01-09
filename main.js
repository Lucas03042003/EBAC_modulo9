$(document).ready(function(){
    //document.querySelector('header button');
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btnCancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereImg = $('#urlImg').val();
        const novoItem = $('<li style="display: none"></li>');
        $('<img src="' + endereImg + '" />').appendTo(novoItem);
        $('<div class="overlayImgLink"><a href=' + endereImg + 'tittle="Ver a imagem em tamanho real" target="blank">Ver imagem em tamanho real</a></div>').appendTo(novoItem);
        $(novoItem).appendTo('ul');    
        $(novoItem).fadeIn(1000);    
        $('#urlImg').val('');
    })
})