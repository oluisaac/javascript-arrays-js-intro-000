
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return[Element,array];
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift (element)
}

function addElementToEndOfArray (array, element){
  return[...array,element]
}

function destructivelyAddElementToEndOfArray (array, element){
  array.push (element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  array
}

function removeElementFromBeginningOfArray (array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop ()
  retunr array
}

function removeElementFromEndOfArray (array){
  return array.slice (0,array.length -1);
}

function accessElementInArray (array, index){
  return array[index]
}
