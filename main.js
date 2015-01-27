$(document).on('ready', function() {
  			
	$('.button').on('click', function(){
		$('.hidden-form').css({"display"  : "block"});
	});

	$('.enter').on('click', function(e){
		e.preventDefault();
		var updateName = $('.update-name');
		var nameChange = $('.name').val();
		updateName.text(nameChange);
	});

	$('.enter').on('click', function(e){
		e.preventDefault();
		var updateBook = $('.update-book');
		var bookChange = $('.book').val();
		updateBook.text(bookChange);
	});

	$('.enter').on('click', function(e){
		e.preventDefault();
		var updateBio = $('.update-bio');
		var bioChange = $('.bio').val();
		updateBio.text(bioChange);
	});

	$('.enter').on('click', function(e){
		e.preventDefault();
		var updateJs = $('.update-js');
		var jsChange = $('.js').val();
		updateJs.text(jsChange);
	});

	$('.close').on('click', function(e){

		e.preventDefault();
		$('.hidden-form').css({"display" : "none"});
	});

});