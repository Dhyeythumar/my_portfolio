function slide_function()
{
	$(document).ready(function()
	{
	    $(".nav_grid").slideToggle("slow");
	    $(".container").toggleClass("change");
	});
//     if(navigator.onLine)
//     {

//     } 
//     else 
//     {
// 	var x = document.getElementById("snackbar");
// 	x.className = "show";
// 	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
//     }
}
// if(navigator.onLine !=1 )
// {
//     var x = document.getElementById("snackbar");
//     x.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
// }

window.addEventListener("resize", function() {
    w = window.innerWidth;
    // h = window.innerHeight;

    let classes = document.getElementById("test_slide").className;
    let class_list = classes.split(" ");

    if(class_list[1] === "change" && w > 768)
    {

        document.getElementsByClassName("nav_grid")[0].style.display = "grid";
        $(".container").toggleClass("change");
    }
    if(class_list[1] !== "change" && w > 768)
    {

        document.getElementsByClassName("nav_grid")[0].style.display = "grid";
    }

    if(class_list[1] === "change" && w < 768)
    {

        document.getElementsByClassName("nav_grid")[0].style.display = "block";
    }
    if(class_list[1] !== "change" && w < 770)
    {

        document.getElementsByClassName("nav_grid")[0].style.display = "none";
    }
});


jQuery(document).ready(function($) 
{
// Header fixed and Back to top button
$(window).scroll(function() 
{
    if ($(this).scrollTop() > 100) 
    {
	$('.back-to-top').fadeIn('slow');
    } 
    else
    {
	$('.back-to-top').fadeOut('slow');
    }
});

if ($(this).scrollTop() > 100) 
{
    $('.back-to-top').fadeIn('slow');
}

$('.back-to-top').click(function() 
{
    $('html, body').animate({scrollTop: 0}, 2000);
    return false;
});
});


// Lazy Load for my image.
window.addEventListener('load', function() {
    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 1000);
});

function lazyLoad() {
    var card_image = document.getElementsByClassName('card-image')[0];

    var content_image = card_image.querySelector('img');
    var image_url = content_image.getAttribute('data-image');

    // change the src of the content image to load the new high res photo
    content_image.src = image_url;
    
    // listen for load event when the new photo is finished loading
    content_image.addEventListener('load', function() {
        // add a class to remove the blur filter to smoothly transition the image change
        card_image.className = card_image.className + ' is-loaded';
    });
}
