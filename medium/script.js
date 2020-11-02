
var userInput = prompt("Enter What you Want");
if(userInput == userInput.toUpperCase()){
    console.log("YOU ARE SHOUTING!")
}else if(userInput == userInput.toLowerCase()){
        console.log("You are whispering");
}else{
        console.log('You are talking normally');
}
// var userInput = prompt('Enter shouting, whispering or normally');
// var y = isUpperCase(userInput);
// function isUpperCase(userInput) {
//     var x = userInput === userInput.toUpperCase();
//     if(x === true){
//       console.log("YOU ARE SHOUTING!");
//     }else{
//       var z = isLowerCase(userInput);
//       if(z === true){ 
//         console.log("You are whispering");
//       }else{
//         console.log("You are speaking normally");
//       }
//     }
// }
// function isLowerCase(str){
//     return str === str.toLowerCase();
// }