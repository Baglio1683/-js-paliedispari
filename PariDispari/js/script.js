
let bool;
let bool2;
let myNum;
let EvOrOdd; 

do{

    EvOrOdd = prompt("Scegli Pari o Dispari")

    if(EvOrOdd === "Pari" || EvOrOdd === "Dispari"){
        bool2 = false
    }
    else{
        bool2 = true
    }

}while(bool2); 



do{

myNum = parseInt(prompt("inserisci un numero da Pari o Dispari da 1 a 5 :"))

if(myNum >= 1 && myNum <= 5){
    bool = false
}
else{
    bool = true;
}

}while(bool)

console.log(myNum)

let x = RandomPcNum()
console.log(x)
alert("Il numero del Pc è " + x)

console.log(add(myNum,x))
alert("La somma è " + add(myNum,x))

if(EvOrOdd === "Pari"){

      if(IsEven(add(myNum,x))){
        alert("Hai Vintooo")
      }
    else{
       alert("Hai Perso !!")
    }
}
else{
    
     if(IsEven(add(myNum,x))){
          alert("Hai Persoo!!")
     }
    else{
         alert("Hai Vinto !!")
     }
  }




// Function Definition 

function RandomPcNum(){

return Math.floor((Math.random()* 5) +1)

}

function add( n1 , n2){

    let numb1 = parseInt(n1)
    let numb2 = parseInt(n2)
    const sum = (numb1 + numb2)
    return sum 
}


function IsEven(num){

    let bool; 

    if(num%2 === 0){
        bool = true; 
    }
    else{
        bool = false
    }
    return bool
}










