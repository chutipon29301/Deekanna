var toggle_nav = 0;

$(document).ready(function() {
	$(window).resize(function(){
		$('#main').css('margin-left','0px');
    	$('#mySidenav').animate({
			width: 'hide'
		},200);
		toggle_nav = 0;
		$('.panel').slideUp('fast')
	    });

    $('.toggle-nav').click(function() {
	    $('.panel').slideToggle('fast')
    });
});

function nav_toggle() {
	if(toggle_nav == 0){
		$('#main').css('margin-left','200px');
		$('#mySidenav').show();
		toggle_nav = 1;
	}
	else{
		$('#main').css('margin-left','0px');
		$('#mySidenav').animate({
			width: 'toggle'
		},200);
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

$(document).keyup(function(e) {     
    if(e.keyCode== 27) {
        $(".w3-modal").css("display","none");
    } 
});

if(document.getElementById("id01").style.display!=="none"){
	$(window).click(function() {
		$(".w3-modal").css("display","none");
	});

	$("iframe").click(function(event){
	    event.stopPropagation();
	});
}