function pairSum() {
    var array = [];
    let sum = 0;
    var arraySize = document.getElementById("num").value;
    if (arraySize < 1000 && arraySize > 10) {
        for (let i = 0; i < arraySize; i++) {
            array.push(i + 1);
        }
        for (j = 0; j < arraySize; j++) {
            if (j % 2 != 0) {
                sum += array[j];
            }
        }
        document.getElementById("show").innerHTML = `Arreglo de números desde 1 hasta ${arraySize}: <br><br>[${array}]
                                                    <br><br>Suma de todos los números pares: <br><br>${sum}`;
    } else {
        document.getElementById("show").innerHTML = `El número está fuera de rango`;
    }
}