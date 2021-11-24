const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// function titleCased(array){
//   let fixedTitles =[];
//   let tempTitles = [];
//   for(let i=0; i<array.length; i++){
//     tempTitles = array[i].split(" ")
//     for(let x=0; x<tempTitles.length; x++){
//       tempTitles[x] = capitalizeFirstLetter(tempTitles[x])
//     }
//     fixedTitles[i] = tempTitles.join(' ')
//   }
//   return fixedTitles
// }
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }


const titleCased = (titles) => {
  return tutorials.map( row => {
    //splits each row of words up
    const splitRow = row.split(" ");
    //spits each word into a array
    const capFirstLetter = splitRow.map( eachWord => eachWord.charAt(0).toUpperCase() + eachWord.slice(1))
    //combines the array of words back into a title
    const answer = capFirstLetter.join(' ')
    return answer


})
}
