//reassign 
var a = 10; // var and let can be reassigned
 a= 20;
 console.log(a);

 const a = 10
 a=20;   //const cant reassign
 console.log(a);


 //redeclare
 var a=90;
 var a=89;   //var can be reclared

 let s= 90 ;    //let and const cant be redeclared  
 let s = 9;


 //hoisting
//it is default behavior of JS variable and function that can be used even before it is declared
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// In colloquial terms, any of the following behaviors may be regarded as hoisting:

// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
// The side effects of a declaration are produced before evaluating the rest of the code that contains it.

//var ,let and const are hoisted but let and const are hoisted in diff zone called temporal dead zone(temporarily dead)
//cant access variable in temporal dead zone

//let and const is not hoisted

console.log(a)  //o/p: a is undefined
var a =90
console.log(a)  //10


//for function hoisting
console.log(a);
var a = 10;
abc();    //can access function asit is already in memory
function abc(){
    console.log("abc is called");
}
abc();

let a;      //a is undefined ...still a is in temporal dead zone pointing to undefined
console.log(a);
abc();      //abc is called
function abc(){
    console.log("abc is called");
}
abc();  //abc is called


//var,let and const are function scoped cz function is also block of code
//let and const are  block scoped
// Block Scope: Unlike var, which is function-scoped, variables declared with let are block-scoped.
//  This means they only exist within the nearest set of curly braces ({}) 
//  such as those used in loops, if-statements, or other blocks. 


//global scope (anything which is not in function)

//lexical scope(outer scope of function..outer environment of function...var is accessing its value from parent function)
//a from function abc is taking value from parernt as 10
var a = 10;
function abc(){
    var b = 90;
    console.log(a);
    console.log(b);
}
abc();
console.log(a);





//block scope

var a = 10;
let b = 10;
{
    var a = 100;   //a is not block scope..declared in global scope
    let b =100; 
    console.log(a);//100
    console.log(b);//100...taken from global scope
}
console.log(a);//10
console.log(b);//100


let b = 10;
console.log(b); //10
console.log(a);  //undefined
{
    var a = 100;   //declared globally outside of temporal dead zone
    let b = 100;  //declared in temporal dead zone
    console.log(b); //100
    console.log(a);  //100
}
console.log(b);   //10
console.log(a);   //100



//closure --function will always carry its lexical scope
//it works as data hiding
function counter(){
    let count=0;
    function inc(){
        count++;
        console.log(count);
    }
    function dec(){
        count--;
        console.log(count);
    }
    return {inc, dec};

}
let {inc,dec} = counter(); //closure is making combination of functions so thats why we can access function ins,dec outside of lexical scope too
inc();//1
inc();//2
inc();//3
dec();//3
