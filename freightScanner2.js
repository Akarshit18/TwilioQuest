

function scan(freightItems) {
  let contrabandIndexes = [];
    // for each turn of the loop scan the array and find the word contraband
    // if word contraband is detected then output the position of it it the log 
  //Replace this comment with your code.
  //Your code needs to:
  //- Loop through every item in the freightItems array
    freightItems.forEach(function(element, index){
    
  // - if the item is equal to "contraband", add the current index of the item to contrabandIndexes - hint: use the array "push()" method
        if(element == "contraband"){
    
            contrabandIndexes.push(index);
        }
        
   })

  return contrabandIndexes;
}
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);