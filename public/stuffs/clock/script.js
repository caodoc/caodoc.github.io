function TurnOnClock()
{
    const NewDate = new Date();
    
    const Hour = document.getElementById("hr");
    const Min = document.getElementById("mn");
    const Sec = document.getElementById("sc");
    
    Hour.style.transform = `rotateZ(${NewDate.getHours() * 30 + NewDate.getMinutes() / 2}deg)`;
    Min.style.transform = `rotateZ(${NewDate.getMinutes() * 6}deg)`;
    Sec.style.transform = `rotateZ(${NewDate.getSeconds() * 6}deg)`;
}

TurnOnClock();
setInterval(TurnOnClock,1000);