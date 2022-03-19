
// const age = 24;

// const person = {
//   name: "Sam",
//   sleep: () => {
//     console.log("Sleeping");
//     return "Slept"
//   },
//   run() {
//     console.log("Running");
//   },
//   age, // ---> age: age
// }



// console.log(person.sleep());
// console.log(person.run);
// console.log(person.old);


// const name="Sanjay", age=24;
// console.log(`${name} is ${age} Years Old`);


// const arrKeys = ["name", "age", "role", "stack"];
// const arrVals = ["Sanjay", 24, "developer", "python"];

// const key = "name";
// const val = "Sanjay";


// Dynamic Key in Object
// const obj = {
//   [key]: val,
// };  
// console.log(obj);

// const obj = {
//   name: "Sanjay",
//   id: 21,
//   skills: [
//     "JAVA",
//     "PYTHON",
//   ],
//   hobbies: [
//     {
//       name: "Listent to Music",
//     },
//     {
//       name: "Play Games",
//     }
//   ]
// };

// console.log(obj["id"], obj["name"]);
// console.log(obj["skills"][0])
// console.log(obj["hobbies"][0]["name"]);


const obj = {
  name: "Sanjay",
  age: 24,
  printObj: function() { 
    console.log(this);
  }
};


obj.printObj();

const sampleFunc = obj.printObj.bind(obj); // Default will take the Window this reference

// const sampleFunc = function() {
//   console.log(this);
// }

sampleFunc();


// const arr = [1,2,3];

// const newArr = arr.map((ele) => ele = 2);

// console.log(newArr); // -> [2,2,2]
// console.log(arr); // -> [1,2,3]


const arrObj = [
  {role: "developer", isPresent: true},
  {role: "It Staff", isPresent: true},
  {role: "Manager", isPresent: false}
];

// const newArr = arrObj.map((ele) => ele.role = "developer");

// console.log(newArr); // -> ["developer", "developer", "developer"];
// console.log(arrObj); // -> []


// Filter all the roles which is present

// const presetArr = arrObj.filter((ele, index, arr) => {
//   console.log("Index", index);
//   console.log("Old Array", arr);
//   return ele.role === "developer";
// });
// console.log(presetArr);


// Map & filter Both returns a New Array based on the Callback return Statements ( Map ) / Conditon ( filter )




// ForEach does not return anything
// const newArr = arrObj.forEach((element, index, oldArray) => {
//   console.log(element);
//   console.log(index);
//   console.log(oldArray);
//   return element;
// });

// console.log(newArr);



// Object Destructuring

// const person = {
//   identity: "Sanjay",
//   age: 24,
// };


// const { age: personAge, identity: personName } = person;

// console.log(personName, personAge);


// // Array Destructuring
// const arr = [1,2,3];

// const [a,,c] = arr;
// console.log(a,c);


// Spread, Rest, operator 

// Spread Operator
// const newObj = {...person, ...oneMoreObj};

// console.log(newObj);

// newObj.age = 55;

// console.log(newObj);
// console.log(person);


// Rest Operator

// const arr = [1,2,3,4,5];


// const [a, b, ...restElements] = arr;

// console.log(a, b); // ---> 1, 2

// console.log(restElements);


// const obj = {
//   ...person,
//   role: "developer",
//   isPresent: true,
// }

// const { identity, role, ...restProps } = obj;

// console.log(identity, role);
// console.log(restProps);


