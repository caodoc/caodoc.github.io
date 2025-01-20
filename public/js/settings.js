const themeChanger = document.getElementById("theme-changer");
const backgroundImageText = document.getElementById("background-image-text");
const lofiMode = document.getElementById("lofi-mode");
const darkThemeList  = ["mocha", "base16-dark", "gruvbox-dark", "windows-95", "tokyo-night-dark"];
const lightThemeList = ["base16-light", "gruvbox-light", "windows-95-light", "tokyo-night-light"];

function createThemeList(themeList, containerId)
{
    const container = document.getElementById(containerId);
    themeList.forEach((theme, themeCount) => {
        const link = document.createElement("a");
        link.href = "";
        link.textContent = theme;

        link.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("isTheme", theme);
            window.location.href = link.href;
        });

        const listItem = document.createElement("li");
        listItem.style.display = "inline";
        listItem.appendChild(link);
        container.appendChild(listItem);

        if (themeCount < themeList.length - 1)
        {
            const comma = document.createTextNode(', ');
            container.appendChild(comma);
        }
    });
}

backgroundImageText.textContent = localStorage.getItem("isBackgroundImage");
backgroundImageText.addEventListener("click", () => {
    const oldSettings = localStorage.getItem("isBackgroundImage");
    if (oldSettings === "No") localStorage.setItem("isBackgroundImage", "Yes");
    else localStorage.setItem("isBackgroundImage", "No");
    backgroundImageText.textContent = localStorage.getItem("isBackgroundImage");
});

createThemeList(darkThemeList, 'dark-theme-list');
createThemeList(lightThemeList, 'light-theme-list');

themeChanger.textContent = localStorage.getItem("isTheme");

lofiMode.addEventListener("click", () => {
    var element = document.getElementsByClassName("page");
    for (var i = 0;i < element.length;++i) element[i].style.display = "none";
    document.body.style.overflow = "hidden";
    const music = new Audio("/assets/i-need-a-girl-by-lee.mp3").play();
    music.loop = true;
});