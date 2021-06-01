/*
Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.


*/

function duplicateCount(text){
    let array = text.toUpperCase().split('').sort(),
        prev,
        secondA =[]
    for(i = 0; i < array.length; i++){
        if(array[i] === prev){
            
            secondA.push(array[i])
            
        }
        prev = array[i]
    }

    return (new Set(secondA).size)
}