function flattenArray(array) {
    // TODO: flatten the array!
    array = array.flat(Infinity);
    if (array.length==0)
     return "Pure Ducktypium!";
    else
     return array;
  }
  
  console.log("Test case 1:");
  console.log(flattenArray([]));
  
  console.log("Test case 2:");
  console.log(flattenArray([1, "two", 3, "four"]));
  
  console.log("Test case 3:");
  console.log(flattenArray([1, 3, 3, 7, ["legacy wuz here"]]));
  
  console.log("Test case 4:");
  console.log(flattenArray(["python", ["javascript", ["api", ["messaging"]]]]));