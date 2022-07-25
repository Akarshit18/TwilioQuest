function isPalindrome(string) {
    const space = string.replace(/ /g, '').toLowerCase();
    string= space.toString();
     const arrayValues = string.split('');
     
     a= true;
     b= false;
     console.log(space);
  
      // reverse the array values
      const reverseArrayValues = arrayValues.reverse();
  
      // convert array to string
      const reverseString = reverseArrayValues.join('');
  
      if(string == reverseString) {
          return a;
      }
      else {
          return b;
      }
      // TODO: check for palindrome!
    }
  
    console.log("Test case 1:");
    console.log(isPalindrome("tacocat"));
    
    console.log("Test case 2:");
    console.log(isPalindrome(""));
    
    console.log("Test case 3:");
    console.log(isPalindrome("heLLo"));
    
    console.log("Test case 4:");
    console.log(isPalindrome("Never odd or even"));