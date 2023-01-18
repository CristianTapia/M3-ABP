function checkNumber() {
    let number = document.getElementById("num").value;
    let isPrime = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime == true) {
            document.getElementById("show").innerHTML = `El número ${number} es primo`;
        } else {
            document.getElementById("show").innerHTML = `El número ${number} no es primo`;
        }   
    } if (number == 0) {
        document.getElementById("show").innerHTML = `El número ${number} no se puede determinar`;
    } if (number == 1) {
        document.getElementById("show").innerHTML = `El número ${number} no se considera primo`;
    }  
}

