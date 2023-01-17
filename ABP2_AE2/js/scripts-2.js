function showDiv() {
    let div = document.getElementById("show").style.display;
    let value = document.getElementById("num").value;
    if ((value % 4 == 0 && value % 100 != 0) || value % 400 == 0) {
        document.getElementById("show").innerHTML = "<p>El año " + value + " es bisiesto";
    }
    else {
        document.getElementById("show").innerHTML = "<p>El año " + value + " no es bisiesto";
    }
}