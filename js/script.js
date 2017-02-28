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
    
    $(".test4").fadeOut();
    $(".test4").fadeIn(5000);
    
    $(".future").fadeTo("slow", 0.7);
    
    //Slide
    $(".copyright").click(function(){
        $(".future").slideToggle("slow");
    });
    
    
    //Animate
    $(".active").click(function(){
        $(".test2").animate({
             height: 'toggle'  
        }); 
        $(".menu").css("color", "red").slideUp(1000).slideDown(1000);
    });
    
});



//DOM
$(document).ready(function(){
    $(".fa-vk").click(function(){
        alert("Value: " + $("#test").val());
    });
    
    $(".fa-odnoklassniki-square").click(function(){
        alert($("#w3s").attr("href"));
    });
    
    $(".fa-linkedin").click(function(){
        $("#w3s").attr({
            "href" : "http://www.w3schools.com/jquery",
            "title" : "W3Schools jQuery Tutorial after click to in icon"
        });
        $("#w3s").text("W3Schools jQuery Tutorial after click to in icon");
    });
//    
//     $(".fa-linkedin").click(function(){
//        $("#w3s").attr("href", function(i, origText){
//            return origText + "/jquery"; 
//        });
//    }); 
    
    //add elements
    $("#btn1").click(function(){
        $("#p-append").append(" <i>Appended text</i>.");
    });

    $("#btn2").click(function(){
        $("#list-item").prepend("<li>Prepended item</li>");
    });
    
    $("#btn3").click(function(){
        $("#btn3").remove();
    });
    
    $("#btn4").click(function(){
        $("#btn4").toggleClass("foot");
        $("#btn3").css({"height":"100px", "width":"200px"});
    });
    
    $(".test3").css("padding", "130px");
});



//jQuery Traversing
$(document).ready(function(){
    $("span").parents("p").css({"color": "blue", "border": "2px solid blue", "padding": "10px", "border-radius": "5px"});
    
    //$("span").parentsUntil("div").css("color", "yellow");
    
    $(".test2").children("p").css("color", "blue");
    
    $(".future").find("p").css("color", "blue");
    
    $("div").siblings("p").css("color", "red");
    
    $("div p").first("p").css("color", "red");
    $("div p").last("p").css("color", "red");
    $("div p").eq(3).css("color", "blue");
    //$("p").filter(".intro");
    //$("p").not(".intro");
});


//AJAX - JQuery
$(document).ready(function(){
//    $(".btn-ajax").click(function(){
//        $("#div1").load("js/demo_text.txt");
//    });
    
    
    $(".btn-ajax").click(function(){
//        $("#div1").load("js/demo_text.txt", function(responseTxt, statusTxt, xhr){
//            if(statusTxt == "success")
//                alert("External content loaded successfully!");
//            if(statusTxt == "error")
//                alert("Error: " + xhr.status + ": " + xhr.statusText);
//        });
        
        
//        $.get("js/demo_test.asp", function(data, status){
//            alert("Data: " + data + "\nStatus: " + status);
//        });
        
        
        $.post("js/demo_test_post.asp",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });    
        
    });
    
});


//AJAX 
function loadDoc() {
    
    var xhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo-ajax").innerHTML = this.responseText;
        }
    };
    
    xhttp.open("GET", "js/ajax_info.txt", true);
    xhttp.send();

    //xhttp.open("POST", "js/ajax_demo.asp", true);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.send("fname=Henry&lname=Ford");    
};


//Ajax 2
function ajaxTest() {
    
    var xhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
              document.getElementById("demo-ajax2").innerHTML = this.responseText;
        }
    };
    
    xhttp.open("GET", 'js/ajax_info.txt', true);
    xhttp.send();
    
};


//Ajax 3
function ajaxTestXml() {
    
    var xhttp;
    
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            myXMLfunction(this);
        }
    }
    
    xhttp.open("GET", 'js/cd_catalog.xml', true);
    xhttp.send();
    
};

//AjaxXML
function myXMLfunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th><th>Country</th><th>Company</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +   
    "</td><td>" +
    x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +   
    "</td></tr>";
  }
  document.getElementById("demoXML").innerHTML = table;
}


// ajax exemple - https://www.w3schools.com/xml/ajax_examples.asp



    



