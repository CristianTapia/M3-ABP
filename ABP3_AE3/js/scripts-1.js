function showDiv() {
    let valueLength = document.getElementById("num").value;
    let array = [];
    for (let i = 0; i < valueLength; i++) {
        array.push(i + 1);
        array[i + 1] = array[i] * 2;
    }
    document.getElementById("show").innerHTML = `<div>El arreglo generado: <br>[${array}]</div>`;
}