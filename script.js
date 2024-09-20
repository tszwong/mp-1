function addition() {
    let num_1 = document.getElementById("first_number").value;
    let num_2 = document.getElementById("second_number").value;
    let result = Number(num_1) + Number(num_2);
    displayResult(result);
}

function subtraction() {
    let num_1 = document.getElementById("first_number").value;
    let num_2 = document.getElementById("second_number").value;
    let result = Number(num_1) - Number(num_2);
    displayResult(result);
}

function multiplication() {
    let num_1 = document.getElementById("first_number").value;
    let num_2 = document.getElementById("second_number").value;
    let result = Number(num_1) * Number(num_2);
    displayResult(result);
}

function division() {
    let num_1 = document.getElementById("first_number").value;
    let num_2 = document.getElementById("second_number").value;
    if(Number(num_2) === 0){
        document.getElementById("output").innerHTML = "Cannot divide by zero";
    } else {
        let result = Number(num_1) / Number(num_2);
        displayResult(result)
    }
}

function power() {
    let num_1 = document.getElementById("first_number").value;
    let num_2 = document.getElementById("second_number").value;
    num_1 = Number(num_1);
    num_2 = Number(num_2);
    let result = num_1;

    // start the loop counter at 1 since we stored the first iteration in res already
    for (let i = 1; i < num_2; i++) {
        result *= num_1;
    }

    displayResult(result);
}

function clear_nums() {
    // clear the inputs and outputs
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "#f1f1f1";  // reset after negative number
}

// helper function to display results and adjust color if negative
function displayResult(result) {
    var outputElement = document.getElementById("output");
    outputElement.textContent = result;

    if (result < 0) {
        outputElement.style.color = "red";  // negative output in red
    } else {
        outputElement.style.color = "#f1f1f1";  // valid output
    }
}