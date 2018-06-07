//

function findWaldo(arr, found) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(waldoIndex) {

  console.log("Found Waldo at index " + waldoIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// **************************************************************************


function findWaldo(arr, found) {

arr.forEach(function (name, index) {
  if (name === "Waldo") {
    found(index)
    //found(name)
  }
});

}

function actionWhenFound(waldoIndex) {

  console.log("Found Waldo at index " + waldoIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
