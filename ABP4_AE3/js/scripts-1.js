// Crear arreglo aleatorio

function createArray() {
    var array = [];
    let sum = 0;
    var arraySize = document.getElementById("num").value;
    if (arraySize >= 0 && arraySize <= 100) {
        for (let i = 0; i < arraySize; i++) {
            array.push(i + 1);
        }
        for (j = 0; j < arraySize; j++) {
            sum += array[j];
        }
    }
    document.getElementById("show").innerHTML = `Arreglo de números desde 1 hasta ${arraySize}: <br><br>[${array}]
                                                <br><br>Suma de todos los números: <br><br>${sum}`;
}

