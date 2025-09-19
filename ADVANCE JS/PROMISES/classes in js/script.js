// console.log("hello world");

// class => basically  create the blueprint for the objects 
// then take the input of the object , for that we will create a constructor 
class rectangle{
    constructor(height , width , color ){
        this.height = height ; 
        this.color = color ; 
        this.width = width ; 
    }
    area(){
        let area = this.height * this.width ; 
        console.log(area);
    }
    parameter(){
        let peri = this.height + this.width ; 
        console.log( peri );
        
    }


}
const x = new rectangle(10, 30 , "blue") // creating the object of that above class 
x.area()
console.log(x.color);
x.parameter()

const sec  = new rectangle(  20 , 30 , " yellow ")// second objecct of the above class 
console.log(sec.color) ;  




