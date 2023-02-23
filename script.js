document.addEventListener("DOMContentLoaded", function(event) 
{
    document.getElementById("loading").style.display = "flex";
});

setTimeout(function() 
{
    document.getElementById("loading").style.display = "none";
}, 3000);