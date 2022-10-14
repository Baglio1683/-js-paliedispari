
let  word1 = prompt("Inserisci una parola:")

if(isPal(word1)){
    alert("la parola è palindroma")
}
else{
    alert("la parola non è palindroma")
}





function isPal(word){

    let str = word.toLowerCase()
    let bool;  
    let x;

    for(let i =0 ; i < str.length/2 ; i++){
             x = (str.length - 1) - i ; 
            if(str[i] === str[x]){
                bool = true
            }else{
                bool = false 
                break
            }
    }

return bool 
}





