function showDiv() {
    let div = document.getElementById("show").style.display;
    let gamesA = document.getElementById("numA").value;
    let gamesB = document.getElementById("numB").value;
    let diff = Math.abs(gamesA - gamesB);
    console.log("Diferencia", diff)
    console.log("Player A", gamesA)
    console.log("Player B", gamesB)
    if (gamesA > gamesB) {
        if ((gamesA == 6 || gamesA == 7) && diff >= 2) {
            document.getElementById("show").innerHTML = `<p>El jugador A ganó por una diferencia de ${diff} juegos`;
        } if (gamesA <= 6 && diff == 1) {
            document.getElementById("show").innerHTML = `<p>El jugador A va ganando por una diferencia de ${diff} juego`; 
        } if (gamesA >= 7 && diff > 2) {
            document.getElementById("show").innerHTML = `<p>No existe una diferencia de ${diff} juegos para esta instancia`;
        }
    }
    if (gamesB > gamesA) {
        if ((gamesB == 6 || gamesB == 7) && diff >= 2) {
            document.getElementById("show").innerHTML = `<p>El jugador B ganó por una diferencia de ${diff} juegos`;
        } if (gamesB <= 6 && diff == 1) {
            document.getElementById("show").innerHTML = `<p>El jugador B va ganando por una diferencia de ${diff} juego`; 
        } if (gamesB >= 7 && diff > 2) {
            document.getElementById("show").innerHTML = `<p>No existe una diferencia de ${diff} juegos para esta instancia`;
        }
    }
    if (gamesA == gamesB) {
        document.getElementById("show").innerHTML = `El juego está empatado`;
    }
}