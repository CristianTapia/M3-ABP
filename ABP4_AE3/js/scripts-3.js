// Crear arreglo aleatorio

function createArray() {
    var array = [];
    var arraySize = document.getElementById("num").value;
    if (arraySize <= 100 && arraySize >=0 ) {
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random()*100));
        }
        document.getElementById("show").innerHTML = `Arreglo generado: <br><br>[${array}]`;
        arraySorted = array.sort(function(a, b){return b - a});
        document.getElementById("show2").innerHTML = `Números ordenados: <br><br>${arraySorted}`;    
    }
}

