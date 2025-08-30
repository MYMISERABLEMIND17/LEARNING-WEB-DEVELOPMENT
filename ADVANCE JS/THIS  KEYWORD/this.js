//this key word isa a special type of keyword bcoz , iska nature depend karta hai aap kidhar use kar rahe ho 

// this value in globle scope 
// console.log(this); // => window object
// bas  itna samjho ki window supreme hai 

// lets check the value of this inside the function 
// function one(){
//     console.log(this); // => again window object 
// }
// one()

// lets check the value in method 
// method is a function inside the object
// let obj1 = {
//     age: 34 , 
//     getAge : function(){// do not use arrow function
//         console.log(this.age); // => obj1
//     },
// }
// now this getage becomes the method of obj1
// obj1.getAge()
// now this contai the full object jisme wo method hai
// toh this ki value inside method  ho gyi object 

// event listener mai check kar lete hain
// let h1 = document.querySelector("h1")
// h1.addEventListener("click", function(){
//     alert()
//     console.log(this)
//     h1.style.color = "red"
//     // isko hum normally access kar sakte hain this se
//     this .style.color = "blue" // dono same kaam karte hain
// })
// this wahi ho jata hai jispe humne add event listner kara tha


// abhi classses nhi kari hain oops kmai karunga 
//bas itna samajh lo ki classes mai this keyword  = > blank object 

// this ki value
// ----------------
// globa => window
// function => window
// method with es5 function => object
// method with arrow function => window
// es5 functon inside the es5 method => object
// event handler => element jispe event listener lga hai(element)
// class = blank object 



// manual binding , bind , call and apply 
// function ko call karte waqt aap decide kar sakte ho ki uski value kya hogi

// let obj ={
//     name : "tom",

// }
// function abcd(){
//     console.log(this.name);

// }
// abcd.call(obj) ; 
// // now this becomes obj 

// apply 
let obj = {
    name : "tom" ,
    age :  25, 
}
function callme (a , b , c){
    console.log(this, a, b , c );
    
}
callme.apply(obj , [1, 2 , 4])
// bas apply 2 values ko pass hone deta hai, one is this itself and other is array jisme different type of value hongi 
// kam use hota  hai 

// bind 
let fnc = callme.bind(obj , 1 ,3, 4)
// basically call jaisa he hai bas ek copy create karta hai , direct function ko call nhi karta '

