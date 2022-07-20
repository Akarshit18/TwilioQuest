function scan(freightItems) {
  let contrabandCount = 0;


  //Replace this comment with your code.

  //Your code needs to:
  //- Loop through every item in the freightItems array
    freightItems.forEach(function(element) {

        
     // - if the item is equal to "contraband", increase contrabandCount by one
  
    if (element == 'contraband') {
        contrabandCount++
        }
})
    
  return contrabandCount;
}
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
  console.log('Number of "contraband": ' + numItems);