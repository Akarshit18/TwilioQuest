function mutate (freightItems){
    
    let mutatedItems = [];

  /*
  Replace this comment with your code.
  Use the array map() function to replace mutatedItems with a new array of
  strings from the input array that have been converted to ALL CAPS
  */

  return mutatedItems = freightItems.map(item => item.toUpperCase());
    
}
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']