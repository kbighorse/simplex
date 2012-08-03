$('#main-menu').load('main-menu.html', function(){
	if($('body').hasClass('preview')){
		$('#main-menu-left').append('<li class="dropdown" id="preview-menu"></li>');
		$('#preview-menu').load('preview-menu.html');
	}

	$('a[rel=tooltip]').tooltip({
		'placement': 'bottom'
	});
});