
$(function() {
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if(results) {
			return results[1] || 0;
		}
		return '';
	};

	$('#api-public-ticket form input').each(function(){
		var v = $.urlParam($(this).attr('name'));
		if(v) {
			$(this).val(decodeURIComponent(v.replace(/\+/g, ' ')));
		}
	});

	var err = $.urlParam('error_msg');
	if(err) {
		$('<div class="error uk-alert uk-alert-warning">').html(decodeURIComponent(err.replace(/\+/g, ' ')))
			.prependTo('#messages');
	}
});


function urldecode(url) {
	return decodeURIComponent(url.replace(/\+/g, ' '));
}


$.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results) {
		return results[1] || 0;
	}
	return '';
};


$(function() {
	$('#reg input').each(function(){
		var v = $.urlParam($(this).attr('name'));
		if(v) {
			$(this).val(urldecode(v));
		}
	});
});



