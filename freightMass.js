function calculateMass (freightItems){

    /*
    Replace this comment with your code.
    Use the array reduce() function to replace the value of totalMass.
    Note that it is possible to use forEach or other loop types to do this, but
    using "reduce" is probably the most elegant solution!
    */
  
    return freightItems.reduce((total, current) => total + current.length, 0); 
      
  }
  const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass);