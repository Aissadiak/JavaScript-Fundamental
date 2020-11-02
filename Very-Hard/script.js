var addit , sub, mult, divd;
var firstNum = parseInt(prompt('Enter a Number'));
var m = prompt('choose an Operator between +, -, * or /');
var thirdNum = parseInt(prompt('Enter a other Number'));
switch(m){
    case '+':  addit = add(firstNum, thirdNum);
    console.log(`${firstNum} + ${thirdNum} = ${addit}`);
    break;
            case '-':  sub = subtract(firstNum, thirdNum);
                console.log(`${firstNum} - ${thirdNum} = ${sub}`);
                break;
                case '*':  mult = multiply(firstNum, thirdNum);
                console.log(`${firstNum} * ${thirdNum} = ${mult}`);
                break;
                case '/':  divd = divide(firstNum, thirdNum);
                    console.log(`${firstNum} / ${thirdNum} = ${divd}`);
                    break;
                    default:
                        console.log('the result is invalid');
}
    
// adding 2 numbers

 function add(num1, num2){
    return num1 + num2;
}


 // subtracting 2 numbers
 function subtract(num1, num2){
    return num1 - num2;
}


 // multiply 2 numbers
 function multiply(num1, num2){
    return num1 * num2;
}


 // dividing 2 numbers
 function divide(num1, num2){
    return num1 / num2;
}



//  switch(m){
//     case '+':
//         console.log(`${firstNum} + ${thirdNum} = ${sum}`);
//         break;
//         case '-':
//             console.log(`${firstNum} - ${thirdNum} = ${sub}`);
//             break;
//             case '*':
//             console.log(`${firstNum} * ${thirdNum} = ${mult}`);
//             break;
//             case '/':
//                 console.log(`${firstNum} / ${thirdNum} = ${divd}`);
//                 break;
//                 default:
//                     console.log('the result is invalid');

// }