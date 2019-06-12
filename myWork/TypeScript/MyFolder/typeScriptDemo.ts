//  Below example for tuple
let myVar : [string,number,boolean];
myVar =["panu",200,true];
console.log(myVar);

function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        console.log(b);
    
    }
 
    // Error: 'b' doesn't exist here
    // console.log('out' + b);

}
f(true);
//---------------


let userData: any = { 'fName': 'Pranita', 'age': 28,'cond':true };
interface uData { 'fName': string, 'age': number,'cond':boolean };

getUserProfile(userData);

function  getUserProfile(userData:  { 'fName': string, 'age': number,'cond':boolean }) {
      console.log("User "+userData.fName+" Age is "+
      userData.age+"th, Her Info is "+userData.cond);
  }

  

 //---------------
let person = {'fName':'Kavya','lName':'Ghotekar','age':4,'cond':true};
interface p {'fName':string,'lName':string,'age':number,'cond':boolean};


function getInfoPerson(person:p){
console.log("User is "+person.fName);
console.log(`${person.fName} ${person.lName} ${person.age} ${person.cond}`);
}
getInfoPerson(person);
 
            


