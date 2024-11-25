function themeLoad()
{
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if (localStorage.getItem("isTheme") === "Dark") link.href = `${window.location.origin}/css/palettes/mocha.css`;
    else link.href = `${window.location.origin}/css/palettes/base16-light.css`;
    document.head.appendChild(link);
}

function backgroundImageLoad()
{
    if (localStorage.getItem("isBackgroundImage") === "Yes")
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/assets/animated-background.webp')`;
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

if (!localStorage.getItem("isTheme"))
{
    localStorage.setItem("isTheme", "Dark");
}

backgroundImageLoad();
themeLoad();

const welcomeText = [
    "Xin chào",
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Привет",
    "こんにちは",
    "안녕하세요",
    "你好",
    "مرحبا",
    "नमस्ते",
    "สวัสดี",
    "Salam",
    "Merhaba",
    "Sawubona",
    "Habari",
    "Shalom",
    "Hej"
];

console.log(window.location.href);

if (window.location.href === "https://caodoc.is-a.dev/" || window.location.href === "http://localhost:1313/")
{
    document.getElementById("welcomeTextBody").innerText = welcomeText[0] + "! ";

    var pos = 0, i = 1;

    function welcomeTextAnimation()
    {
        setInterval(function() {
            pos = i % 20;
            console.log(pos, welcomeText[pos]);
            document.getElementById("welcomeTextBody").innerText = `${welcomeText[pos]}\! `;
            i++;
        }, 1500)
    }

    welcomeTextAnimation();
}