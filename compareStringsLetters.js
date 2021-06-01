/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char. */

function XO(str){
    let countO = str.match(/O/gi);
    let countX = str.match(/X/gi);
    if ((countO == null && countX == null)) {
        return true
    }  else if ((countO == null && countX != null) || (countO != null && countX == null)){
        return false;
    } else if ((countO.length === countX.length)){
        return true
    }
    else {
        return false
    }
}