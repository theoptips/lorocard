$(document).ready(function(){
	//http://culture.herokuapp.com/answers.json

	var request=	$.ajax({
		  url: "http://culture.herokuapp.com/answers.json",
		  type: 'GET',
		  dataType: 'JSONP',
		  success: function(data){
		  	alert('success!');
			$('body').append( '<code>'+ data + '</code>');
		  }
		});

	// request.fail(function(e) { console.log(e); });
});