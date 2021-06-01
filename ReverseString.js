/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed 
(like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present. */


function spinWords(string){
    let splitedString = string.split(" ");
    for (i= 0; i < splitedString.length; i++) {
      if (splitedString[i].length >= 5){
       let splitedWord = splitedString[i].split("").reverse().join("");
       splitedString[i] = splitedWord;
        
       }
       
    }
      return splitedString.join(" ");
}


 