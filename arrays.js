var = chocolateBars;

var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
return [element, ...array];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function AddElementToEndOfArray(array,element){
  return [...array, element]
}

}
