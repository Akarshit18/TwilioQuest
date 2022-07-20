function getFirstAmountSorted(inputArray, numberOfItems) {
    inputArray.sort();   
    return inputArray.slice(0 , numberOfItems);
}
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);  