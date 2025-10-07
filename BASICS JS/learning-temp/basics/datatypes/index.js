// clear
//  data types

// PRIMITIVE  ===>  aisi saari values jinko copy karne par tumhe real copy mil jaye usee primitive data type kehte hain
// REFERENCE ===> inko copy karne par real copy nhi milegi but aapko reference milega parent ka 




// primitives
// let a = 12 ; 
// let b = a ;  



// PRIMITIVE TYPES
// 1. Number =>integer, float, double, etc.
// 2. String => wrapped data inside the "" , '' , ``
// 3. Boolean
// 4. Undefined  => KOI VALUE HE NHI DI TOHY SYSTEM NE APNE AAP SE EK VALUE ASSIGN KAR DI 
// 5. Null  => VALUE AA JYIGI BUT BAAD MAI ABHI KE LIYE VALUE NHI PATA
// 6. Symbol =>  UNIQUE IMMUTABLE VALUE CREAE KARTA HAI  
// 7. BigInt => {

// FOR BIG INT  => 
// let a ; 
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// NOW IF WE ADD SOMETING TO IT , IT WILL NOT GIVE THE CORRECT RESULT , TO MAKE THE RESULT CORRECT WE HAVE TO PUT AN "n" AT THE END OF THE NUMBER
//a = 9007199254740991n + 1n ; // 900719
//NOW IT WILL GIVE THE CORRECT RESULT
    // }       



// REFERENCE TYPES
// 1. Object   {}
// 2. Array    []
// 3. Function ()
//IN REFERENCE VALUES AAPKE PAAS REFERENCE PAAS HO JIYGA , NA KI AAPKO REAL COPY MILEGI

// DYNAMIC TYPING  => JS MAI STATIC TYPING NHI HAI , JS MAI HAI DYANAMIC TYPING
// JISKA MATLAB AAP DATA TOJ CHANGE KAR SAKTE HO , AUR USKE TYPE KO BHI CHANGE KAR SAKTE HO
//  explaination -:  
// let a = 12 ; 
// a =  " hello" 
// a = true ; 
// a = null ;
// a = undefined ;
// basically in js we have var , let , const to declare variable . iis liye hum ye sab kar sakte hain 
// console.log(a); // undefined

// // typeof =>  basically datatype batata hai 

//type coersion = "type conversion" ; // basically type conversion ko hi type coercion kehte hain
// a = 1 
// b  = "2"
// if we add them , we get 12 ,bcoz in js + have 2 meanings , one is addition and other is concatenation


//  truthy and falsy values
// 1. Falsy values => false , 0 , "" , null , undefined , NaN
// 2. Truthy values => everything else is truthy value , even "
// to check console pe jao or (!!value) likho , agar true aata hai to value truthy hai , agar false aata hai to value falsy hai

