var firstName = 'ELizabeth';
var secondName = 'Lamine';
var diffChar = firstName.length - secondName.length;
if(firstName.length > secondName.length){
console.log(`The name ${firstName} is longer than ${secondName} by ${Math.abs(diffChar)} characters `);
 }else if(firstName.length < secondName.length){ 
    console.log(`The name ${firstName} is longer than ${secondName} by ${Math.abs(diffChar)} characters `);
 }