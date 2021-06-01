//Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).


function toCamelCase(str){
    
    return str.replace(/_\w|-\w/g, function(word) {
        return word.toUpperCase();
      }).replace(/-|_/g, '');


}
