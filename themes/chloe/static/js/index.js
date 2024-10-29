function backgroundImageLoad()
{
    if (localStorage.getItem("isBackgroundImage") === "Yes")
    {
        document.body.style.backgroundImage = `url('${window.location.origin}/media/animated-background.webp')`;
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