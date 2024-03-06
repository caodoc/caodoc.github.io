const currentTheme = document.getElementById("currentTheme");

function newVisitor()
{
    fetch("https://caodoc-api.exozy.me/new_visitor/github")
        .then(reponse => reponse.json())
        .then(data => {
            localStorage.setItem("count", data.count);
            visitorCount.textContent = data.count;
        });
}

function themeLoad()
{
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if (localStorage.getItem("isTheme") === "Dark") link.href = "/css/palettes/mocha.css";
    else link.href = "/css/palettes/base16-light.css";
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