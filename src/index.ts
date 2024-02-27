export {};

// Object literal may only specify known properties in TS

// EXAMPLE 1 - Type all of the object's properties

type Employee = {
  id: number;
  name: string;
};

const emp: Employee = { id: 1, name: 'Bobby Hadz' };

console.log(emp);

// ---------------------------------------------------

// // EXAMPLE 2 - When you don't know the names of all properties ahead of time

// type Employee = {
//   id: number;
//   [key: string]: any;
// };

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   department: 'accounting',
// };

// console.log(emp);

// ---------------------------------------------------

// // EXAMPLE 3 - Being more specific with the type of the values

// type Employee = {
//   id: number;
//   [key: string]: string | number;
// };

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   department: 'accounting',
//   salary: 100,
// };

// console.log(emp);
