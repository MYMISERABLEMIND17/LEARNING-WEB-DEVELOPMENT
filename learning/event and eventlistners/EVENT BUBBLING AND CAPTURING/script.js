// mjispe event aaiyga agar uss par listner nhui hua toh , humara event uske parent pe listner dhundega
// or aaisa karte karte uparmove karega 


// ab hum 5 alag event nhi karinge hum direct parent ke event ko use karenge


let container  = document.querySelector("#cointainer")
container.addEventListener("click", function(dets) {
    dets.target.style.textDecoration = "line-through";
})



// event captiuring

// jab bhi aap click karte ho ya koi bhi event raise karte ho to woh cheez 2 phases mai hoti hai 
// phase 1: event top level element se neeche ki taraf aayega 
// phase 2: event raised element  level se top level element ki taraf jayega

// or pahale phase 2 hota hai 
// aaise samajh aaye na aaye , video he dekh lena better hoga , basically elements mai agar lasrt mai true kar dete ahin toh capture phase onn ho jata hai fir woh wala event pahale chalta hai 
