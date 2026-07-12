function printPattern(rows){

    let output = "";

    for(let i=1; i<=rows; i++){

        for(let j=1; j<=i; j++){

            output += j;

        }

        output += "\n";
    }

    return output;
}

document.getElementById("result").textContent = printPattern(5);