const themeChanger = document.getElementById("theme-changer");
const backgroundImageText = document.getElementById("background-image-text");

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