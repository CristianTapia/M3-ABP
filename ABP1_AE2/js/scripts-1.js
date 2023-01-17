function showDiv() {
    document.getElementById("show").style.display = "block";
    let valorUSD = document.getElementById("USD").value;
    let currency = valorUSD * 745;
    // tofixed() agregar
    document.getElementById("show").innerHTML = `<div>El valor equivale a: $${currency}</div>`;
}