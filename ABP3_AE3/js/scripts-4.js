// Crear arreglo aleatorio

function createArray() {
    var arraySize = document.getElementById("num").value;
    let array = [];
    if (arraySize > 0 && arraySize <= 100) {
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random()*100));
        }
        let maxNumber = Math.max(...array);
        document.getElementById("show").innerHTML = `Arreglo generado: <br><br>[${array}]`;
        document.getElementById("search-box").style.display = "block";
    } else {
        document.getElementById("show").innerHTML = `El número no es aceptable`;
    }
    
}

function searchNumber() {
    let searchNum = document.getElementById("search").value;
    if (searchNum > 0 && searchNum <= 100) {
        for (let i = 0; i < arraySize; i++) {
            if (i == searchNum) {
                document.getElementById("show-element").innerHTML = `El número ${searchNum} está en la posición`;
            }
        }
    } else {
        document.getElementById("show-element").innerHTML = `El número ${searchNum} no está en el arreglo`;
    }
}