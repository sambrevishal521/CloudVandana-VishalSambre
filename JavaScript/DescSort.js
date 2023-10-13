// Without using array.Sort methos....

function bubbleSortDescending(arr) {
    let len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const inputStr = prompt("Enter a list of numbers separated by spaces:");
  const inputArray = inputStr.split(" ");
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = Number(inputArray[i]);
  }
  
  const sortedDescending = bubbleSortDescending(inputArray);
  console.log("Sorted in descending order: " + sortedDescending.join(", "));
  


// Using Array.Sort method....

// function sortDescending(arr) {
//     return arr.sort(function(a, b) {
//       return b - a;
//     });
//   }
  
//   const inputStr = prompt("Enter a list of numbers separated by spaces:");
//   const inputArray = inputStr.split(" ").map(Number);
  
//   const sortedDescending = sortDescending(inputArray);
//   console.log("Sorted in descending order: " + sortedDescending.join(", "));
  
