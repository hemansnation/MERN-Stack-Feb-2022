// function statements
// function bravo(){
//     let y = 30;
//     console.log(y);
//     return y + 5;
// }

// let x = bravo();
// alert(x);

// function expressions
// let beta = function(){
//     let y = 10;
//     console.log(y);
//     return y + 5;
// }

// console.log(beta);

// console.log(beta());

// let a = beta();
// console.log(a);

// console.log(typeof beta);

// console.log(typeof 10);
// console.log(typeof 10.5);

// console.log(typeof "hello");

// console.log(typeof true);
// console.log(typeof -1);
// console.log(typeof [1,2,3]);


// function expressions with arguments
// let r = beta1(10,20);
// console.log(r);

// let beta1 = function(a,b){
//     let t = a + b;
//     console.log(t);
//     return t + 10;
// }




// arrow functions
// let dog = () => console.log("arrow");

// dog();

// without arguments

// let dogo = () => "arrow 2";

// console.log(dogo());


// let cat = (x , y) => x + y;

// let v = cat(10,50);
// alert(v);


// single line arrow function

// let square = n => n*n;

// console.log(square(7));


// let age = prompt("Enter your age");

// let welcome = (age > 18)? () => alert("Hello") : () => alert("Bye");

// welcome();

// console.log(typeof welcome);

// console.log(welcome());
// // multi line arrow functions

let yellow = () => {
    let r = 10;
    console.log(r);
    return r * 2
}

console.log(yellow());