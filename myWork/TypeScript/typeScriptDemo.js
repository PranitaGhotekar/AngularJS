//  Below example for tuple
var myVar;
myVar = ["panu", 200, true];
console.log(myVar);
function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        console.log(b);
    }
    // Error: 'b' doesn't exist here
    // console.log('out' + b);
}
f(true);
//---------------
var userData = { 'fName': 'Pranita', 'age': 28, 'cond': true };
;
getUserProfile(userData);
function getUserProfile(userData) {
    console.log("User " + userData.fName + " Age is " +
        userData.age + "th, Her Info is " + userData.cond);
}
//---------------
var person = { 'fName': 'Kavya', 'lName': 'Ghotekar', 'age': 4, 'cond': true };
;
function getInfoPerson(person) {
    console.log("User is " + person.fName);
    console.log(person.fName + " " + person.lName + " " + person.age + " " + person.cond);
}
getInfoPerson(person);
