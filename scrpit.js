
/* Taking input from user */
function myfunction() {
  let name1=document.querySelector("#name1");
  let name2=document.querySelector("#name2");
  let Message=document.querySelector("#message");
  word1=name1.value;
  word2=name2.value;
 let str1=name1.value;
 let str2=name2.value;
 console.log(word1);
 console.log(word2);
const result=removeCommonLetters(word1,word2)
 console.log(result);
 if(result==0)
   alert("Please enter yor name");


   /* Captitalizing the name */


   function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
let nam1=capitalizeFirstLetter(str1);
let nam2=capitalizeFirstLetter(str2);

console.log(nam1,nam2)

/* Comparing you and ur friend with flames */


 const myarray=["f","l","a","m","e","s","f","l","a","m","e","s","f","l","a","m","e","s"]
var res=myarray[result-1];
console.log(res)

switch(res){
  case "f": {
            Message.innerHTML=nam1+ " and " +nam2+ " ,your are Friends 👫 😊";
            console.log("Friends");
            
            break;
            }
  case "l": {
            Message.innerHTML=nam1+" and "+nam2+" ,your are Lovers 👩‍❤️‍👨💕 ";
            console.log("Lovers");
            break;
            } 
  case "a": {
            Message.innerHTML=nam1+" your having Affection towards "+nam2+" 😍 🥰";
            console.log("Affection");
            break;
            } 
  case "m": {
            Message.innerHTML=nam1+" and "+nam2+" ,you will be Married  👨‍👩‍👧‍👦 "; 
            console.log("Marriage");
            break;
            }   
  case "e": {
             Message.innerHTML=nam1+" and "+nam2+" ,your are Enemies ⚔️ 😱"; 
            console.log("Enemies");
            break;
            }    
  case "s": {
             Message.innerHTML=nam1+" and "+nam2+" ,your are Siblings 👨‍👧 😢"; 
            console.log("Siblings");
            break;
            }  
  default:{
          Message.innerHTML="Sorry,Unknown content"       
          }                   
}
setTimeout(function() {
  var confirmed = confirm("Hope you enjoyed! 🥳");
  if (confirmed) {
     console.log("Yes")
  } else {
    console.log("No")
  }
}, 4000);


}

/* Function to remove common letters in the name */

function removeCommonLetters(word1, word2) {
  let result = '';
  for (let i = 0; i < word1.length; i++) {
    if (word2.indexOf(word1[i]) === -1) {
      result += word1[i];
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) === -1) {
      result += word2[i];
    }
  }
  return result.length;
}



















