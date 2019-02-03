// Declare your function first
function getAgeInDays(age){
    return age * 365
}

function createCreeting(name,age) {
    var AgeInDays =getAgeInDays(age);
    var message = "My name is "+name+" and I was born over " + AgeInDays + " days ago!";
    return message;
}
 var result  = createCreeting("ahmet",32 )
console.log (result)