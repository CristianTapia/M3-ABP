function showDiv() {
    daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let weekDay = document.getElementById("num").value;
    if (weekDay >= 1 && weekDay <= 7) {
        for (let i = 0; i < daysOfWeek.length; i++) {
            if (weekDay == i + 1) {
                let element = daysOfWeek[i];
                document.getElementById("show").innerHTML = `Has escogido el día <b>${element}</b>`;
            }
        }
    } else {
        document.getElementById("show").innerHTML = `No es un número válido`;
    }
}
