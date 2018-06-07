var nums = [1, 5, 2];

function double(arr, fnct) {

  for(let i = 0; i < nums.length; i++){
    nums[i] = fnct(nums[i]);
  }
  return nums
}

console.log(double(nums, function(num) {
  return num * 2;
}))

