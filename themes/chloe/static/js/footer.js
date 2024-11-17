document.getElementById("page-footer-content-secret").addEventListener("click", () => {
    window.open("/assets/secret.webp", '_blank').focus();
});

/* Old Page Footer with theme button */
/*
const currentTheme = document.getElementById("current-theme");

function themeLoad()
{
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if (localStorage.getItem("isTheme") === "Dark") link.href = `${window.location.origin}/css/palettes/mocha.css`;
    else link.href = `${window.location.origin}/css/palettes/base16-light.css`;
    document.head.appendChild(link);
}

if (!localStorage.getItem("isTheme"))
{
    localStorage.setItem("isTheme", "Dark");
}

themeLoad();

currentTheme.textContent = localStorage.getItem("isTheme");

currentTheme.addEventListener("click", () => {
    const oldTheme = localStorage.getItem("isTheme");
    if (oldTheme === "Dark") localStorage.setItem("isTheme", "Light");
    else localStorage.setItem("isTheme", "Dark");
    currentTheme.textContent = localStorage.getItem("isTheme");
});
*/