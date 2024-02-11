const Output = document.getElementById("content");
let Input = "";
let Calc = "";

document.getElementById("plus").addEventListener("click", () =>
{
    Output.innerHTML += "+";
    Input += "+";
});

document.getElementById("minus").addEventListener("click", () =>
{
    Output.innerHTML += "-";
    Input += "-";
});

document.getElementById("multiply").addEventListener("click", () =>
{
    Output.innerHTML += "x";
    Input += "*";
});

document.getElementById("divine").addEventListener("click", () =>
{
    Output.innerHTML += "/";
    Input += "/";
});

document.getElementById("equal").addEventListener("click", () =>
{
    Output.innerHTML = eval(Input);
});

document.getElementById("clear").addEventListener("click", () =>
{
    Output.innerHTML = "";
    Input = "";
});

document.getElementById("backspace").addEventListener("click", () =>
{
    Input = Input.slice(0, -1);
    Output.innerHTML = Input;
});

document.getElementById("one").addEventListener("click", () =>
{
    Output.innerHTML += "1";
    Input += "1";
});

document.getElementById("two").addEventListener("click", () =>
{
    Output.innerHTML += "2";
    Input += "2";
});

document.getElementById("three").addEventListener("click", () =>
{
    Output.innerHTML += "3";
    Input += "3";
});

document.getElementById("four").addEventListener("click", () =>
{
    Output.innerHTML += "4";
    Input += "4";
});

document.getElementById("five").addEventListener("click", () =>
{
    Output.innerHTML += "5";
    Input += "5";
});

document.getElementById("six").addEventListener("click", () =>
{
    Output.innerHTML += "6";
    Input += "6";
});

document.getElementById("seven").addEventListener("click", () =>
{
    Output.innerHTML += "7";
    Input += "7";
});

document.getElementById("eight").addEventListener("click", () =>
{
    Output.innerHTML += "8";
    Input += "8";
});

document.getElementById("nine").addEventListener("click", () =>
{
    Output.innerHTML += "9";
    Input += "9";
});

document.getElementById("zero").addEventListener("click", () =>
{
    Output.innerHTML += "0";
    Input += "0";
});

document.getElementById("dot").addEventListener("click", () =>
{
    Output.innerHTML += ".";
    Input += ".";
});