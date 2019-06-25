function slide_function()
{
    if(navigator.onLine)
    {
        $(document).ready(function()
        {
            $(".nav_grid").slideToggle("slow");
			$(".container").toggleClass("change");
        });
    } 
    else 
    {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}
if(navigator.onLine !=1 )
{
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

window.addEventListener("resize", 
function()
{
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