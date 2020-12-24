const { personInformation } = require('./persons');
const persons = {
   firstName: "John",
   lastName : "Smith",
   age: 22,
   gender: "male",
   ssn: 123456789,
}
const location = {
   country: "California",
   city: "San Francisco"
}


const information = personInformation(persons);
console.log(information);
persons.getLocation();

//Calc
// const { calc } = require('./calc');

// const res = calc(10, 6, '+');
// console.log('Res is', res); 
// const res1 = calc(10, 6, '-');
// console.log('Res is', res1); 
// const res2 = calc(10, 6, '*');
// console.log('Res is', res2); 
// const res3 = calc(10, 6, '/');
// console.log('Res is', res3);
// const res4 = calc(10, 6, 'sqrt'); 
// console.log('Res is', res4); 
