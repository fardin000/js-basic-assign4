// finding a perfect friend whose name takes exactlys 5 letters

// function longest_string(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
//   }
  
//   console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa', 'aaaaa', 'aaaaa', 'aaaaa', 'aaaaa', 'aaaaa']))



// function perfectFriend(names){
//     let longestName = names[0];
//     for(let i = 0; i <names.length; i++){
//       const element = names[i];
//       if(element > longestName){
//         longestName = element;
//       }
//     }
//     return longestName;
// }

// const names = [ "adam", "ahnaf", "kafi", "karim", "paul", "sevin", "kremlin", "najib", "rahat", "abdullah"  ];
// const largest = perfectFriend(names);
// console.log(largest);




// function largestElement(numbers){
//   let largest = numbers[0];
//   for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     //console.log(element);
//     if(element > largest){
//       largest = element;
//     }
    
//   } 
//   return largest;
// }

// //const ages = [ 12, 54, 2, 34, 76, 43, 23 , 76, 76];
// const ages = ["anik", "bonik", "siam", "labib", "rahat", "pintu", "kajol"]
// const oldest = largestElement(ages);
// console.log(oldest);



// function perfectFriend(numbers){
//   let largest = numbers[0];
//   for(let i = 1; i <= numbers.length; i++){
//     const element = numbers[i];
//     //console.log(numbers[i]);
//     //console.log(element);
//      if(element > largest){
//      largest = element;
//      }
//   }
//   return largest;
// }

// const ages = ["adam", "ahnaf", "kafi", "karim", "abdullah", "sevin", "kremlin", "najib", "rahat", "abid" ];
// const oldest = perfectFriend(ages);
// console.log(oldest);


// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// var longer = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(longer);



// let arr = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg"];

// function long_string(arr){
//    let longest="";
//    for (let i=0;i<arr.length;i++){
//       if (arr[i]>longest.length){
//          longest=arr[i];
//       }
//    } 
//    return longest;
// }

// var large = long_string(arr);
// console.log(large);


// function long_string(arr) {
//   let longest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i].length > longest.length) {
//           longest = arr[i];
//       }
//   }
//   return longest;
// }

// // let arr = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg", "gohinjongol", "jongonlmemongol"];

// // console.log(long_string(arr));


// let myArray = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg", "gohinjongol", "jongonlmemongol"];
// var letter = long_string(myArray);
// console.log(letter);

///////////////////////////////////////////////////////////////
// function long_string(letter) {
//   let fiveLetterLong = letter[0];
//   for (let i = 1; i < letter.length; i++) {
//       // if (arr[i].length > longest.length) {
//       //     longest = arr[i];
//       // }
//       //const element = arr[i]
//       if( letter[i].length == 5 ){
//           //longest = longest.length;
          
//           fiveLetterLong = letter[i];
//         }
//   }
//   return fiveLetterLong;
// }

// // let arr = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg", "gohinjongol", "jongonlmemongol"];

// // console.log(long_string(arr));


// let myArray = ["Orebro", "johir", "Sundsvall", "Hudriksvall", "nasir", "samir", "Goteborg", "akdtfeioldw"];
// var letter = long_string(myArray);
// console.log(letter);


/////////////////////////////////////////////
function long_string(letter) {
  let fiveLetterLong = letter[0];
  for (let i = 1; i < letter.length; i++) {
      // if (arr[i].length > longest.length) {
      //     longest = arr[i];
      // }
      //const element = arr[i]
      if( letter[i].length == 5 ){
          //longest = longest.length;
          fiveLetterLong = letter[i];
          return fiveLetterLong;
        }
        //const freshContainer = [];
  // for( let i = 0; i <= fiveLetterLong; i++){
  //   const element = fiveLetterLong;
  //   console.log(element);
  //     if(freshContainer.indexOf(element) == -1){
  //     freshContainer.push(element);
  //     }
    // }    
   }
  //return fiveLetterLong;
}

// let arr = ["Orebro", "Sundsvall", "Hudriksvall", "Goteborg", "gohinjongol", "jongonlmemongol"];

// console.log(long_string(arr));


let myArray = ["Orebro", "johir", "Sundsvall", "Hudriksvall", "nasir", "samir", "Goteborg", "akdtfeioldw"];
var letter = long_string(myArray);
console.log(letter);
