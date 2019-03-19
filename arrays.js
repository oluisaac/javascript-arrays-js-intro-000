
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
array.unshift(element);
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()

}
