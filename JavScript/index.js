
// 1. Even or Odd Checker


function checkEvenOdd(){

    let number = document.getElementById("numberInput").value;


    if(number % 2 == 0){

        document.getElementById("evenOddResult").innerHTML =
        number + " is an even number.";

    }

    else{

        document.getElementById("evenOddResult").innerHTML =
        number + " is an odd number.";

    }

}


// 2. Multiplication Table


function generateTable(){

    let number = document.getElementById("tableInput").value;


    let output = "";


    for(let i = 1; i <= 10; i++){


        output += number + " x " + i + " = " 
        + (number*i) + "\n";

    }


    document.getElementById("tableResult").innerHTML = output;


}

// 3. FizzBuzz


function fizzBuzz(){


    let output = "";


    for(let i = 1; i <= 20; i++){


        if(i % 3 == 0 && i % 5 == 0){

            output += "FizzBuzz\n";

        }


        else if(i % 3 == 0){

            output += "Fizz\n";

        }


        else if(i % 5 == 0){

            output += "Buzz\n";

        }


        else{

            output += i + "\n";

        }

    }


    document.getElementById("fizzResult").innerHTML = output;


}


// 4. Square Pattern


function squarePattern(){


    let n = document.getElementById("squareInput").value;


    let output = "";


    for(let i = 0; i < n; i++){


        let row = "";


        for(let j = 0; j < n; j++){


            row += "*";

        }


        output += row + "\n";

    }


    document.getElementById("squareResult").innerHTML = output;


}


// 5. Right Triangle


function trianglePattern(){


    let n = document.getElementById("triangleInput").value;


    let output = "";


    for(let i = 1; i <= n; i++){


        let row = "";


        for(let j = 1; j <= i; j++){


            row += "*";

        }


        output += row + "\n";


    }


    document.getElementById("triangleResult").innerHTML = output;


}

// Dynamic Color Changer


let colorPicker = document.getElementById("colorPicker");


let colorBox = document.getElementById("colorBox");


let resetButton = document.getElementById("resetBtn");


colorPicker.addEventListener("input", function(){


    colorBox.style.backgroundColor = colorPicker.value;


});

resetButton.addEventListener("click", function(){


    colorBox.style.backgroundColor = "lightblue";


});
