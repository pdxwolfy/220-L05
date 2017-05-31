function makeCounterLogger(start) {
  function logRange(begin, end, delta) {
    for (var i = begin; i <= end; i += delta) {
      console.log(i);
    }
  }

  return function logFromStartTo(stop) {
    var i;

    if (start <= stop) {
      for (i = start; i <= stop; ++i) {
        console.log(i);
      }
    } else {
      for (i = start; i >= stop; --i) {
        console.log(i);
      }
    }
  }
}

makeCounterLogger(3)(5);
console.log('');
makeCounterLogger(3)(3);
console.log('');
makeCounterLogger(3)(2);
console.log('');
makeCounterLogger(10)(20);
console.log('');
var countLog = makeCounterLogger(5);
countLog(8);
console.log('');
countLog(2);
