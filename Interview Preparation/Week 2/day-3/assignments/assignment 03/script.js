$('#textbox').keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in textbox');	
	}
	event.stopPropagation();
});

$(document).keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in somewhere');	
	}
	
});

