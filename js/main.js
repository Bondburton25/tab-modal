 /*
 *	Main JS Functions by Bond@Alphaweb
 */
  

$(window).load(function(){
	// Tab
	 console.log('ready');
	$('.custom-tab-container ul.nav a').click(function(e){
		e.preventDefault();
	  	if($(this).parent('li').hasClass('active')) return;

		var _index = $(this).parent('li').index() + 1;

		// Menu item
		$(this).parent('li').siblings('li.active').removeClass('active');
		$(this).parent('li').addClass('active');

		// Tabs
		$(this).closest('.custom-tab-container').children('.tab-content').children('.tab-pane.active').removeClass('active');
		$(this).closest('.custom-tab-container').children('.tab-content').children('.tab-pane:nth-child('+_index+')').addClass('active');

	});

	modalInit();

});

function modalInit(){
	$('.modal-container .modal-block a.modal-close').click(function(e){
		e.preventDefault();
		$('.modal-container').fadeOut('fast',function(){ $('.modal-container').removeClass('open'); });
	});

	$('.modal-container').click(function(){
		$('.modal-container').fadeOut('fast',function(){ $('.modal-container').removeClass('open'); });
	});

	$('.modal-container .modal-block').click(function(e){ e.stopPropagation(); });

	$(document).keyup(function(e) {
	    if(e.keyCode == 27 && $('.modal-container').hasClass('open')) $('.modal-container').fadeOut('fast',function(){ $('.modal-container').removeClass('open'); });
	});
}

function doModal(data){
	$('.modal-container').attr('data-size',data.size);
	$('.modal-container .modal-block h2.modal-title').html(data.title);
	$('.modal-container .modal-block div.modal-content').html(data.content); 
	$('.modal-container').fadeIn('fast',function(){ $('.modal-container').addClass('open'); });
}

function modalfirst(){
	data = {
		'title': 'My modal',
		'size': 'S',
		'content': '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>'
	};
	doModal(data);
}

function modalsecond(){
	data = {
		'title': 'My First modal',
		'size': 'M',
		'content': '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>'
	};
	doModal(data);
}

function modalthrid(){
	data = {
		'title': 'My Second modal',
		'size': 'L',
		'content': '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>'
	};
	doModal(data);
}