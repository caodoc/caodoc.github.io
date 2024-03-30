function backgroundImageLoad()
{
    if (localStorage.getItem("isBackgroundImage") === "Yes")
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/media/index-background-image.gif')`;
    }
    else
    {
        document.body.style.backgroundImage = "none";
    }
}

if (!localStorage.getItem("isBackgroundImage"))
{
    localStorage.setItem("isBackgroundImage", "No");
}

backgroundImageLoad();