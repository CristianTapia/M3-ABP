function createArray() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    let maxNumber = Math.max(...array);
    document.getElementById("show").innerHTML = `<div>Valores obtenidos: <br><br>[${array}]</div>
                                                <div>El número mayor: <br><br>${maxNumber}</div>`;
}