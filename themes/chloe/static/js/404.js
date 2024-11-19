function themeLoad()
{
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if (localStorage.getItem("isTheme") === "Dark") link.href = `${window.location.origin}/css/palettes/mocha.css`;
    else link.href = `${window.location.origin}/css/palettes/base16-light.css`;
    document.head.appendChild(link);
}

themeLoad();