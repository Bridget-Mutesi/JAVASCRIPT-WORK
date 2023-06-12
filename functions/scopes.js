 let a = 20;//Global variable acessed every where
 function add(b){
    console.log(a+b);
    let c = 30;// local variable accessible in the function
    console.log(a+b+c);
    d = 6//tis is still global
 }
 add(20);

 function greet(){
    let hello = "hey" //local to greet but global to talk because they share the same boundary
    function talk(){
        let greeting = "hello there"
        console.log(`${hello} ${greeting}`);
    }
    talk()
    
 }
 greet()

 //




