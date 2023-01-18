// Crear arreglo aleatorio
var array = [];

function createArray() {
    // var array = [];
    var arraySize = document.getElementById("num").value;
    if (arraySize > 0 && arraySize <= 100) {
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random()*100));
        }
        document.getElementById("show").innerHTML = `Arreglo generado: <br><br>[${array}]`;
        document.getElementById("search-box").style.display = "block";
    } else {
        document.getElementById("show").innerHTML = `El número no es aceptable`;
    }
}

function searchNumber() {
    console.log(array)
    var arraySize = document.getElementById("num").value;
    let searchNum = document.getElementById("search").value;
    if (searchNum >= 0 && searchNum <= 100) {
        for (let i = 0; i < arraySize; i++) {
            if (searchNum == array[i]) {
                document.getElementById("show-element").innerHTML = `El número ${searchNum} está en la posición ${i}`;
            }
        }
    } else {
        document.getElementById("show-element").innerHTML = `El número ${searchNum} no es válido`;
    }
}