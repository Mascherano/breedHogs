$(document).foundation()

$('[data-toggle-sandwich]').click(function(){
	const panel = $(this).data('toggleSandwich');
	$('#sandwich-tabs').foundation('selectTab', panel);
})

const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function(ev){
	$offCanvas.foundation('close')
	setTimeout(function(){
		$sticky.css('left', '0px')
	}, 100)
	
})

$('#multiple').blur(function(){
	var list = Array();
    $.each($('#multiple :selected'), function() {
    	var msg = $(this).val() +' ';
        list.push(msg);
    });

    var count = 0;
    $.each(list, function(){
   		$('#seleccionados').append('<span class="input-group-label hide-for-small-only">'+ list[count] +'</span><input class="input-group-field" style="margin-right:3px;"type="number" name="'+ list[count] +'" value="1">');
   		count++;
	})
    //$('#seleccionados').html(list.join('') + '<input class="input-group-field" type="number" name="quantity" value="0">');
})

$('#multiple').focus(function(){
	$('#seleccionados').empty();
})
