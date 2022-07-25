function sumArray(numbers) {
    sum=0;
    for (i=0;i<numbers.length;i++)
    {
      sum += numbers[i];
    }
    console.log(sum);
    return sum;
    // TODO: Sum the numbers!
  }
  
  console.log("Test case 1:");
  console.log(sumArray([1, 2, 3]));
  
  console.log("Test case 2:");
  console.log(sumArray([-1, 0, 1]));
  
  console.log("Test case 3:");
  console.log(sumArray([100, 12.0, -4.5]));
  