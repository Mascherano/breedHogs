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

$('#metodopago').click(function(){
	var metodo = $(this).val();
	if(metodo == $.trim("deposito")){
		$('#InfoDeposito').show();
	}else{
		$('#InfoDeposito').hide();
	}
})

var cant = 0;
$('[data-toggle-promo]').click(function(){
	cant = $(this).data('togglePromo');
	var nombre = $(this).data('toggleNombre');
	$("#multiple").on('change', function(e) {
    	if (Object.keys($(this).val()).length > cant) {
    		$('option[value="' + $(this).val().toString().split(',')[cant] + '"]').prop('selected', false);
    		$('#messageError').show();
    		$('#cantError').html('<i class="fi-alert"></i>Elegiste la promoción ' + nombre + ' por lo tanto puedes escoger ' + cant + ' sandwichs Hogs');
    	}
	});
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
    
})

$('#multiple').focus(function(){
	$('#seleccionados').empty();
	$('#messageError').hide();
	$('#cantError').empty();
})



