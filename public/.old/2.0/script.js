document.getElementById("github").addEventListener("click", () =>
{
    window.open("https://github.com/caodoc", "_blank");
});

document.getElementById("discord").addEventListener("click", () =>
{
    window.open("https://discord.com/users/800173074166710282", "_blank");
});

document.getElementById("codeforces").addEventListener("click", () =>
{
    window.open("https://codeforces.com/profile/caodoc", "_blank");
});

document.getElementById("chess").addEventListener("click", () =>
{
    window.open("https://www.chess.com/member/caodoc", "_blank");
});

document.getElementById("projects").addEventListener("click", () =>
{
    window.open("https://caodoc.github.io/projects", "_blank");
});

const welcome = document.getElementById("box-welcome");
const avatar = document.getElementById("box-avatar");
const contact = document.getElementById("box-contact");
const nothing = document.getElementById("nothing");

function ShowNothing()
{
    if (avatar.style.display === "none" && contact.style.display === "none" && welcome.style.display === "none")
    {
        nothing.style.display = "block";
    }
};

document.getElementById("close-welcome").addEventListener("click", () =>
{
    welcome.style.display = "none";
    ShowNothing();
});

document.getElementById("close-avatar").addEventListener("click", () =>
{
    avatar.style.display = "none";
    ShowNothing();
});

document.getElementById("close-contact").addEventListener("click", () =>
{
    contact.style.display = "none";
    ShowNothing();
});