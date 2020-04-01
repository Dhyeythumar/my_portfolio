let currentTheme = "dark";
let blocked_storage = 0;
const theme_status = document.getElementsByClassName("theme_status")[0];

const show_storage_error = () => {

    const snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = 'localStorage is disabled.\
    <a href="https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document">\
    To enable see !!</a>';
    snackbar.className = "show";
    setTimeout(() => { 
        snackbar.className = snackbar.className.replace("show", ""); 
        snackbar.innerHTML = "You don't have an active internet connection..";
    }, 5000);
    blocked_storage = 1;
} 

try{
    currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : "dark";
}
catch(err)
{
    show_storage_error();
    // console.log(err.message);
}

const setMeta = (metaName, metaValue) => {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            metas[i].setAttribute('content', metaValue);
        }
    }
}

const checkTheme = () => {
    if (currentTheme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(window.location.href === "https://dhyeythumar.github.io/my_portfolio/index.html" || window.location.href === "https://dhyeythumar.github.io/my_portfolio/")
        {
            theme_status.innerHTML = "ON";
            setMeta('theme-color', "#222629");
        }
        else{
            setMeta('theme-color', "#333333");
        }
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        setMeta('theme-color', "#FFFEFD");
        if(window.location.href === "https://dhyeythumar.github.io/my_portfolio/index.html")
        {
            theme_status.innerHTML = "OFF";
        }
    }
}

const switchTheme = () => {

    if (currentTheme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        setMeta('theme-color', "#FFFEFD");
        currentTheme = "light";
        localStorage.setItem('theme', 'light'); //add this

        theme_status.innerHTML = "OFF";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        setMeta('theme-color', "#222629");
        currentTheme = "dark";
        localStorage.setItem('theme', 'dark'); //add this

        theme_status.innerHTML = "ON";
    }    
}

const drop_up = () => {

    const element = document.getElementsByClassName("bob")[0];
    element.style.transition = "transform 1s";
    element.style.transform = "translate(-284px, -2605px)";
}

const drop_down = () => {

    if(blocked_storage === 1)
    {
        show_storage_error();
    }
    else{
        const info_circle = document.getElementsByClassName("info_circle")[0];
        info_circle.style.animation = "expand_circle 2s ease-in-out";

        const element = document.getElementsByClassName("bob")[0];
        element.style.transition = "transform 2s";
        element.style.transform = "translate(-284px, -2400px)";
        setTimeout(() => {
            drop_up();
        }, 1000);
        setTimeout(() => {
            switchTheme();
            info_circle.style.animation = "none";
        }, 1400);
    }
}

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
// }
