window.addEventListener("load", function() 
{
    var loading = document.getElementById("loading");
    var content = document.getElementById("content");
  
    setTimeout(function() 
    {
        loading.style.display = "none";
        content.style.display = "block";
    }, 1500);
  
    document.addEventListener("readystatechange", function() 
    {
        if (document.readyState === "complete") 
        {
            loading.style.display = "none";
            content.style.display = "block";
        }
    });
});