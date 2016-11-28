/*
    My Custom CSS
    =============
    Author:  Oleksandr Grynivskyi
    Updated: November 2016
    Notes:	 For my Education JQuery
*/

//resize img
$(document).ready(function() {
    $('#conCenter img').each(function() {
        var maxWidth = 400; // Max width for the image
        var maxHeight = 200;    // Max height for the image
        var ratio = 0;  // Used for aspect ratio
        var width = $(this).width();    // Current image width
        var height = $(this).height();  // Current image height

        // Check if the current width is larger than the max
        if(width > maxWidth){
            ratio = maxWidth / width;   // get ratio for scaling image
            $(this).css("width", maxWidth); // Set new width
            $(this).css("height", height * ratio);  // Scale height based on ratio
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if(height > maxHeight){
            ratio = maxHeight / height; // get ratio for scaling image
            $(this).css("height", maxHeight);   // Set new height
            $(this).css("width", width * ratio);    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
        }
    });
});


$(document).ready(function() {
    
    var start_pos=$('#stick_menu').offset().top;
    
    $(window).scroll(function(){
        if ($(window).scrollTop()>=start_pos) {
          if ($('#stick_menu').hasClass()==false) $('#stick_menu').addClass('to_top_menu');
        }
        else $('#stick_menu').removeClass('to_top_menu');
    });
    
    
    
    $(".test2 img").dblclick(function(){
        $(this).hide();
    });
    
//    $(".test2 img").mouseenter(function(){
//       alert("Hello");
//    });
//    
//    $(".test2 img").mouseleave(function(){
//        alert("Bye!");
//    });
    
//    $(".test2 img").hover(function(){
//        alert("Hello!");
//    },
//    function(){
//        alert("Bye!");
//    });
    
    $(".header h1").on({
        mouseenter: function(){
            $(this).css("color","lightblue");
        },
        
        mouseleave: function(){
            $(this).css("color","aliceblue");
        },
        
        click: function(){
            $(this).css("color","white");
        }
    });
    
    
    $("p,h1, h2, h3").click(function() {
        $(this).hide(1000);
    });
    
    $(".menu li").click(function(){
        $(".test1").toggle(1000);
    });
    
    
    $(".test1").fadeOut();
    $(".test1").fadeIn(2000);
    
    $(".test2").fadeOut();
    $(".test2").fadeIn(3000);
    
    $(".test3").fadeOut();
    $(".test3").fadeIn(4000);
    
    $(".future").fadeTo("slow", 0.7);
    
    //Slide
    $(".copyright").click(function(){
        $(".future").slideToggle("slow");
    });
    
    
    //Animate
    $(".active").click(function(){
        $(".test2").animate({
             height: 'toggle';  
        }); 
        $(".menu").css("color", "red").slideUp(1000).slideDown(1000);
    });
    
});


