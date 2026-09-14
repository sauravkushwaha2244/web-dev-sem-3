    let a = Number(prompt("Enter First Number"));
    let b = Number(prompt("Enter Second Number"));

    let sum = a + b;
    let Difference = abs(a - b);
    let Multiplication = a * b;
    let Division = a / b;

    let Option = Number(prompt(
        "Enter:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide"
    ));

    if (Option == 1) {
        document.write(sum);
    }
    else if (Option == 2) {
         document.write(Difference);
    }
    else if (Option == 3) {
         document.write(Multiplication);
    }
    else if (Option == 4) {
         document.write(Division);
    }
    else {
        console.log("Invalid Option");
    }
