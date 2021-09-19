/////////////////////////////////////////////////////////////////
///////                problem -4                            ////
////////////////////////////////////////////////////////////////

function perfectFriend(letter) {
//error handling conditions
if(typeof letter == 'string'){
    return "Don't use string, Please enter your friend's names in the list";
} 
 if( typeof letter == 'number' ){
    return "Don't use number , Please enter a your friend's name .";
} 

    let fiveLettersLong = letter[0];
    for (let i = 1; i < letter.length; i++) {
        if( letter[i].length < 4  &&  letter[i].length < 6 ){  
            fiveLettersLong = letter[i];
            return fiveLettersLong;
          } 
     }
  }
  
  //assigning to a variable
  let myArray = ["abcd","jahid","Orko", "johir", "Sahsultan", "Hojaifa", "nasir", "samir", "rahat", "jihad"];
  //testing with number
  //let myArray = "str";
  var letter = perfectFriend(myArray); //calling the fucntion from outside
  console.log(letter);