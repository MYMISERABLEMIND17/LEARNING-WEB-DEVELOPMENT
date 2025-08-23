// dom manipulation 
// html se element selecr karna
// text se element select karna 
// text badalna 
// html badalna 
// css badalna
// attributes 
// event listeners

// let pst = document.getElementById("welcome") // the method to select the element by the id 
// if you want to select it with the class you can use 
// let ps = document.getElementsByClassName("first") ;// we can select multiple items by this method 
// we can select multiple items by this method 
// console.log(pst);
// console.dir(ps);

// basically element de do ==
// 
// let abcd ==> document.querySelectorAll("element ke naam ")
// let abcd = document.querySelector("h1") // select all element with h1 tag 
// console.dir(abcd);

// first manipulation (text and content access )

//let f  = document.querySelector("h1") ;// now go to deop down and see where you have to cahnge html or text 
// console.dir(f);
// f.innerText = ("aacha hun") ; 

// dekho ==> innerText , innerContent, innerHTML, ye sab alag alag cheezin hain 
// innerHTML (change the )main html)
// let f  = document.querySelector("h1") ;
// f.innerHTML = "<i>mujhe badal do </i>";
// console.dir(f);


// attribute manipulation
// ==> except tag baaki jo bhi cheez tag ke andar hoti hai like href , name , charset 
// let atag = document.querySelector("a")
// console.dir(atag);
// so if hum kisi tag ko href na dein toh by default uska href hota hai jo humare page ka url hai 
// atag.href = "https://www.youtube.com/"
// now the value of href of atag changes

// setattribute 
// ==> element.setAttribute(name, value);
// let image = document.querySelector("img")
// console.log(image);
// image.setAttribute("image" ,"https://unsplash.com/photos/a-person-poses-on-a-black-motorcycle-DMxHZhWw-nM")

// // get attribute 
// let arr = document.querySelector("h1")
// let x = arr.getAttribute("href")
// console.log(x);

// remove attribute 
// let arr = document.querySelector("h1")
// let x =  arr.removeAttribute("href")
// console.log(x);
// this basically remove the href proprerty of the html tag



// dynamic dom selection
// you can create html  tags from the js 
// let h1 =  document.createElement("h1")
// h1.textContent = "hello world " ; 
// console.log(h1);
// document.body.appendChild(h1)
// thats how you can create html tags 



// style updates 
let h1 = document.querySelector("h1") 
// console.dir(h1);
// h1.style.color = "yellow";
// h1.style.backgroundColor = "red";

// class laga sakte ho 
// toggle 
