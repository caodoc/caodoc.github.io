const timeStat = document.getElementById("currentYear");
timeStat.textContent = (new Date()).getFullYear();

const visitorCount = document.getElementById("visitor-count");

const milisecondADay = 86400000;

function newVisitor()
{
    fetch("https://caodoc-api.exozy.me/new_visitor/github")
        .then(reponse => reponse.json())
        .then(data => {
            localStorage.setItem("count", data.count);
            visitorCount.textContent = data.count;
        });
}

// Create Last Date Visited
if (!localStorage.getItem("lastVisited"))
{
    const date = new Date().getTime();
    console.log(date);
    localStorage.setItem("lastVisited", date);
}

// Create Count on LocalStorage
if (!localStorage.getItem("count"))
{
    newVisitor();
}

visitorCount.textContent = localStorage.getItem("count");

const date = new Date().getTime();

if (date - localStorage.getItem("lastVisited") >= milisecondADay)
{
    newVisitor();
    localStorage.setItem("lastVisited", date);
}