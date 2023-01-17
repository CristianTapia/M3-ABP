/* -------------------------------
-            PROBLEMA 1          -
--------------------------------*/

function showDiv() {
    document.getElementById("show").style.display = "block";
    let valorUSD = document.getElementById("USD").value;
    let currency = valorUSD * 745;
    // tofixed() agregar
    document.getElementById("show").innerHTML = "<p>El valor equivale a: $" + currency;
}

/* -------------------------------
-            PROBLEMA 2          -
--------------------------------*/

var selectionMade;
var percentage;
var earnings;

function checkBox() {
    let select = document.getElementsByClassName("selection");
    if ((select[0].checked && select[1].checked && select[2].checked && select[3].checked && 
        (select[4].checked || select[5].checked ||select[6].checked) && select[7].checked) == true) {
        selectionMade = true;
    } else {
        selectionMade = false;
    }
    if (select[2].checked == true) {
        document.getElementById("extra").style.display = "block";
    } else {
        document.getElementById("extra").style.display = "none";
    }
    return selectionMade;
}

function qualifyField() {
    var valueBoxPer = document.getElementById("percentage").value;
    if (valueBoxPer <= 70) {
        percentage = true;
    } else {
        percentage = false;
    }
    return percentage;
}

function earningsField() {
    var valueBoxEar = document.getElementById("earnings").value;
    valueBoxFinal = valueBoxEar / 35299;
        if ((valueBoxFinal >= 7) && (valueBoxFinal <= 25)) {
            earnings = true;
        } else {
            earnings = false;
        }
        console.log(valueBoxFinal)
        console.log(earnings)
    return earnings;
}

function buttonPressed() {
    let button = document.getElementById("send-info");
    if ((selectionMade && percentage && earnings) == true) {
        alert("Eres elegible para el subsidio");
    } else {
        alert("No eres elegible para el subsidio");
    }
}

// function buttonPressed() {
//     let button = document.getElementById("send-info");
//     if ((selectionMade && percentage && earnings) == true) {
//         alert("Eres elegible para el subsidio");
//     } if ((selectionMade || percentage || earnings) == null) {
    
//     } else {
//         alert("No eres elegible para el subsidio");
//     }
// }

// checkBox();
// field();

// var x = checkBox();
// console.log(x);
