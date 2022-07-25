function reverseSentence(sentence) {
    // TODO: Reverse a sentence!
    lastCharacter = sentence.substring(sentence.length - 1,sentence.length);
    sentence = sentence.slice(0,-1);
    sentence = sentence.charAt(0).toLowerCase()+sentence.slice(1);
    sentence = sentence.split(' ');
    sentence = sentence.reverse();
    sentence = sentence.join(' ');
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return sentence+lastCharacter;
    // return array;
  }
  
  console.log("Test case 1:");
  console.log(reverseSentence("How are you today?"));
  
  console.log("Test case 2:");
  console.log(reverseSentence("I visited Ethiopia last year."));
  
  console.log("Test case 3:");
  console.log(reverseSentence("Hurray!"));