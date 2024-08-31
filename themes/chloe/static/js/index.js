function backgroundImageLoad()
{
    if (localStorage.getItem("isBackgroundImage") === "Yes")
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/media/animated-background.gif')`;
    }
    else
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/media/background.jpg')`;
        document.body.style.filter = "blur(20px);";
    }
}

if (!localStorage.getItem("isBackgroundImage"))
{
    localStorage.setItem("isBackgroundImage", "No");
}

backgroundImageLoad();