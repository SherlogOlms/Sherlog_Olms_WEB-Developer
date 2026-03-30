document.addEventListener("DOMContentLoaded", 
    function()
    {
        window.scrollTo(0,0);
    })

document.getElementsByClassName("btn-hero").addEventListener("click", 
    function()
    {
        this.classList.add("animation-active");
    })
