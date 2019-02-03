

var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percentageOfStudents = 100 * numberOfStudents / total;
var percentageOfMentors = 100 * numberOfMentors / total;

var percent1 = Math.round(percentageOfStudents);
var percent2 = Math.round(percentageOfMentors);

var resultStudents = "Percentage students: " + percent1+"%";
var resultMentors = "Percentage mentors: " + percent2+"%";

console.log(resultStudents);

console.log(resultMentors);

