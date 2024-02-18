const timeStat = document.getElementById("currentYear");
timeStat.textContent = (new Date()).getFullYear();

const visitorCount = document.getElementById("visitor-count");

if (!localStorage.getItem("lastVisited"))
{
    const date = new Date();
    console.log(date);
    localStorage.setItem("lastVisited", date.getDate());
}

if (!localStorage.getItem("count"))
{
    fetch("https://caodoc-api.exozy.me/new_visitor/github")
        .then(reponse => reponse.json())
        .then(data => {
            localStorage.setItem("count", data.count);
            visitorCount.textContent = data.count;
        });
}

visitorCount.textContent = localStorage.getItem("count");

const date = new Date();
if (date.getDate() != localStorage.getItem("lastVisited"))
{
    fetch("https://caodoc-api.exozy.me/new_visitor/github")
        .then(reponse => reponse.json())
        .then(data => {
            visitorCount.textContent = data.count;
        });

    const date = new Date();
    console.log(date);
    localStorage.setItem("lastVisited", date.getDate());
}