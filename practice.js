//object creation
//using object literal
const object ={
   name : 'Prachi',
   id : 1,
   salary : 1200000,
   skills : ['Java', 'MERN' , 'SQL' , 'C' ]
};

//  for(i in object){
//     console.log(`${object[i]}`);
// }
// for(i in object){
//     console.log(`${i}: ${object[i]}`);
// }


//using constructor function
function Object2(name,age,id,salary){
    this.name = name,    //this refers to current object
    this.age = age,
    this.id = id,
    this.salary = salary
}
const employee1 = new Object2('prachi','20','2','200000'); //created one object
const employee2 = new Object2('pradnya','19','1','100000'); //created 2nd object

for(i in employee1){
    console.log(`${employee1[i]}`);
}
for(i in employee2){
    console.log(`${i}: ${employee2[i]}`);
}

//using object.create() method
const newObject ={
   name : 'Prachi',
   id : 1,
   salary : 1200000,
   skills : ['Java', 'MERN' , 'SQL' , 'C' ]
};

const newEmployee = Object.create(newObject); //created new object ..
newEmployee.name = 'kiya';
newEmployee.id = 2;
newEmployee.salary = 150000;
newEmployee.skills = ['Java' , 'MERN'];
//if we haven't defined some properties of new object then it will take properties from object(newObject) from which we have created our new object (newEmployee)
for(let j in newEmployee){
    console.log(`${j} : ${newEmployee[j]}`);
}


//map is similar to object
//A Map's keys can be any
// value (including functions, objects, or any primitive).
//but in object key can be only string or symbol

const map1 = new Map();
map1.set('a',1);
map1.set('b',2);

console.log(map1.get('a',1));   //1
console.log(map1.has("a")); //checks whether a is in map obejct  or not
map1.delete("b");  //deletes key b
console.log(map1);
console.log(map1.size);

//shallow copy
//using spread operator
const obj1 = {
    name : 1,
    id : 101,
    skills : ['MERN','Java']
};
const obj2 = {...obj1};
console.log("obj2",obj2);
obj2.skills[0] = 'Python'; //this will reflect i  original object too
console.log("obj1", obj1);
console.log("obj2",obj2);


//using object.assign()
const o1 = {
    name : 'ojal',
    id : 101,
    skills : ['MERN','Java']
};

const o2 = Object.assign({},o1);
console.log("o1 : ",o1);
console.log("o2 : ",o2);

o2.skills[0] = 'Python';  //this will reflect in o1 too
console.log("o1 : ",o1);
console.log("o2 : ",o2);
//In the case of a shallow copy:

// Top-level properties are independent between the original and the copy.
// Nested objects are shared between the original and the copy.
o1.name = 'piya'; //this wont affect copied object
console.log("o2 : ",o2);

//why Changes to the Original Object's Top-Level Properties Do Not Reflect in the Shallow Copy
// When you perform a shallow copy,
// the primitive values at the top level are copied by value not by refernce
//For nested objects, the references are copied. 



//for array use slice method to copy whole array
//const copy  = orgArray.slice()



//deep copy
const original = {
    a : 1,
    b : {c : 2}
};
const copy = JSON.parse(JSON.stringify(original));
//JSON.stringify : converts JS object to string
//JSON.parse : converts converted string into new JS object again

//This process ensures that the new object is a completely separate entity
// from the original object, with no shared references.
// Changes to the original object after the copy has been made
//will not affect the copied object, and vice versa.

//Why Changes in original object Do Not Reflect in Deep Copy
//Separate Instances: Each nested object in the deep copy is a new instance.
// This is achieved by recursively copying each object, rather than copying references.
//Independence: Since the deep copy creates completely independent objects, 
//any changes made to the original object or its nested objects do not affect the deep copy, and vice versa.



copy.a = 1;
copy.b.c = 67; //this will make make changes into copied object only not in original object
console.log("original object : ",original);
console.log("copy object : ",copy);
original.a = 89; //this will change original object property only not copied object
console.log("copy object : ",copy);
console.log("Original object : ",original);




