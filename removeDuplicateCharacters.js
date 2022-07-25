function removeDuplicateCharacters(string) {
    var index = 0;
    var a=[];
    string=string.split("");
         for (var i = 0; i < string.length; i++)
         {
           if (string[i]==string[i+1])
           {
             continue;
           }
           else 
           {
            a.push(string[i]);
 
           }
 
         }
         const b=a.join("");
                  return b;
   // TODo: Remove duplicate characters!
 }
 
 console.log("Test case 1:");
 console.log(removeDuplicateCharacters("aabbcc"));
 
 console.log("Test case 2:");
 console.log(removeDuplicateCharacters("asdfjkl;"));
 
 console.log("Test case 3:");
 console.log(removeDuplicateCharacters("abba"));
 
 console.log("Test case 4:");
 console.log(removeDuplicateCharacters("fffunnn"));
 