/*
choose two elements form the array and then add them so that you get a target
but you have to think about the space and time complexity like maybe arrayt contains much much more data 
so it will be not good to iuterate over the whole array for just two numbers (let's say out of 1000000)

Constraints:

2 <= nums.length <= 104 // array canm be this much bigger
-109 <= nums[i] <= 109 // it cna have this much higher postive or nagative numbs
-109 <= target <= 109 // or this type of!!


// Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

THE SIMPLE METHOD IS TO SOLVE IT BRUTE FORCE (they are computationally expensive)

function twoSum(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
    
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
*/


let seenValues = {}; // keeps the value's record that are visited

for (let i = 0; i < nums.length; i++) {
  let current = nums[i]; // value of the current index
  let needed = target - current; // e.g. 10 - 3 = 7 (needed) 

  if (seenValues[needed] !== undefined) {  // check if 7 is present in seen hashmap and if yes then return the index
    return [seenValues[needed], i];
  }

  seen[current] = i;
}
