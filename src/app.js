import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  for ( let i=0; i< pronoun.length; i++){
    

    for (let j=0; j< adj.length; j++) {
      for (let h=0; h< noun.length; h++){
        console.log(pronoun[i] + adj [j] + noun [h] + ".com")
     

      }
      
     


    }



  }

  console.log("Hello Rigo from the console!");
};
