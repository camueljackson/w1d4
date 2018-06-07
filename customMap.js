var nums = [1, 5, 2];

function double(arr, fnct) {

  let doubleArr = [];
  let newNum;

  for(let i = 0; i < nums.length; i++){
    newNum = fnct(arr[i]);
    doubleArr.push(newNum)
  }
  return doubleArr
}

console.log(double(nums, function(aNum) {
  return aNum * 2;
}))

