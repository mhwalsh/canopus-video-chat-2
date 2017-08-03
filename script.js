console.log('test');

// data structure
var numArr = [2, 4, 5, 6, 7];
var arrOrNames = ['millie', 'dev', 'alicia', 'carla', 'hunter', 'nebuchadnezzar'];

var cat1 = 'socks';
var cat2 = 'nebuchadnezzar';

var arrOfCats = [cat1, cat2];

// console.log('numArr ->', numArr);
// console.log('arrOrNames ->', arrOrNames);
// console.log('arrOfCats ->', arrOfCats);
//
// i is the iterator
// for (var i = 0; i < numArr.length; i++) {
//   console.log('i =', i, 'numArr[i] = ', numArr[i]);
// }

function printArrValues(arrToLog) {
  // arrToLog is the local variable
  for (var i = 0; i < arrToLog.length; i++) {
    console.log('i =', i, 'arrToLog[i] = ', arrToLog[i]);
  }
}

// console.log(arrToLog);

printArrValues(numArr);
printArrValues(arrOrNames);
printArrValues(arrOfCats);
