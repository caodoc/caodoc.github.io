const backgroundImageText = document.getElementById("background-image-text");
const themeChanger = document.getElementById("theme-changer");

function backgroundImageLoad()
{
    if (localStorage.getItem("isBackgroundImage") === "Yes")
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/media/animated-background.gif')`;
    }
    else
    {
        document.body.style.backgroundImage = `none`;
        document.body.style.filter = "blur(20px);";
    }
}

if (!localStorage.getItem("isBackgroundImage"))
{
    localStorage.setItem("isBackgroundImage", "No");
}

backgroundImageLoad();

backgroundImageText.textContent = localStorage.getItem("isBackgroundImage");

backgroundImageText.addEventListener("click", () => {
    const oldSettings = localStorage.getItem("isBackgroundImage");
    if (oldSettings === "No") localStorage.setItem("isBackgroundImage", "Yes");
    else localStorage.setItem("isBackgroundImage", "No");
    backgroundImageText.textContent = localStorage.getItem("isBackgroundImage");
});

themeChanger.textContent = localStorage.getItem("isTheme");

themeChanger.addEventListener("click", () => {
    const oldTheme = localStorage.getItem("isTheme");
    if (oldTheme === "Dark") localStorage.setItem("isTheme", "Light");
    else localStorage.setItem("isTheme", "Dark");
    themeChanger.textContent = localStorage.getItem("isTheme");
});