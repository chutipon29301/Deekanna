var toggle_nav = 0;

$(document).ready(function() {
	$(window).resize(function(){
    	document.getElementById("main").style.marginLeft = "0%";
		document.getElementById("mySidenav").style.display = "none";
		document.getElementById("openNav").style.display = "block";
		document.getElementById("sideHead").style.display = "none";
		toggle_nav = 0;
		$('.panel').slideUp('slow')
	    });

    $('.toggle-nav').click(function() {
	    $('.panel').slideToggle('fast')
    });
});

function nav_toggle() {
	$('#mySidenav').animate({
		width: 'toggle'
	},"fast");
	if(toggle_nav == 0){
		$('#main').css('margin-left','200px');
		toggle_nav = 1;
	}
	else{
		$('#main').css('margin-left','0px');
		toggle_nav = 0;
	}
}

function w3_open() {
	document.getElementById("main").style.marginLeft = "25%";
	document.getElementById("mySidenav").style.width = "25%";
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("openNav").style.display = 'none';
	document.getElementById("sideHead").style.display = "block";
	}

function w3_close() {
	document.getElementById("main").style.marginLeft = "0%";
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("openNav").style.display = "block";
	document.getElementById("sideHead").style.display = "none";
}
