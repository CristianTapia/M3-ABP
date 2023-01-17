function showDiv() {
    let div = document.getElementById("show").style.display;
    let value = document.getElementById("num").value;
    if (value <= 100 && value > 1) {
        document.getElementById("show").innerHTML = "<p>El número " + value + " tiene opciones de ganar";
        if ((value > 5 && value < 15) || value == 70 || value == 55) {
            document.getElementById("show").innerHTML = "<p>El número " + value + " tiene más opciones de ganar";
        } 
    }
    else {
        document.getElementById("show").innerHTML = "<p>El número " + value  + " no tiene opciones de ganar";
    }
}


