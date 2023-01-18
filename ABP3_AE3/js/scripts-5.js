// Crear arreglo aleatorio

function createArray() {
    var array = [];
    var arraySize = document.getElementById("num").value;
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    document.getElementById("show").innerHTML = `Arreglo generado: <br><br>[${array}]`;
    arraySorted = array.sort(function(a, b){return a - b});
    document.getElementById("show2").innerHTML = `Arreglo ordenado: <br><br>[${arraySorted}]`;      
}

