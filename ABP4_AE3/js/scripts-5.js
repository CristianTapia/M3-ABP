function getTable() {
    var multipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var numbers = [];
    var checkNum = document.getElementById("num").value;
    if (checkNum <= 12 && checkNum > 0) {
        for (let i = 0; i < multipliers.length; i++) {
            numbers.push(multipliers[i] * checkNum);
        }
        document.getElementById("show").innerHTML = `Tabla de multiplicar del número: ${checkNum}: <br><br>[${numbers}]`;
    } else {
        document.getElementById("show").innerHTML = `El número está fuera de rango`;
    }
}
