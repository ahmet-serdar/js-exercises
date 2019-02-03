var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

function percentage(a,b) {
    var calculatePercentage = a*100/b;
    var result = Math.round(calculatePercentage);
    return result;
}
 let percentegeOfStudents = percentage(numberOfStudents,total);
let percentageOfMentors = percentage(numberOfMentors, total);
console.log(percentegeOfStudents);
console.log(percentageOfMentors);
