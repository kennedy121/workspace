/*solução 1
function verificaPalindromo(string){
    if(!string) return "String Inexistente";

   return string.split("").reverse().join("") === string;


}

let myVar = false;

console.log(verificaPalindromo(myVar));
*/

//solução 2 

function verificaPalindromo2(string){
    if(!string) return "String Inexistente";

   for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string.length - 1 - 1){
            return false;
        }
   }
return true;

}

console.log(verificaPalindromo2("omo"));



