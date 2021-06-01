// In this little assignment you are given a string of space separated numbers, 
//and have to return the highest and lowest number.

function highAndLow(numbers){
   
    numbersB = numbers.split(' ').map(item => {
        return parseInt(item)
    })

   numbersB.sort((a,b)=> a-b)

   return `${numbersB[numbersB.length -1]} ${numbersB[0]}`

}
