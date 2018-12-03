function factoriel(n) {
  let p = n;
  if (n <= 1)
    return 1;
  for (var i = 2; i < n; i++) {
    p *= i;
  }
  return p;
}

function Tk(n, k) {
  return factoriel(n + k - 1) / (factoriel(k) * factoriel(n - 1));
}

function Tkm1(n, k) {
  return Tk(n - 1, k)
}

function arrMul(arr1, arr2) {
  if (typeof arr1 == 'number' || typeof arr2 == 'number')
    throw 'Cant multiply numbers';

  let rarr = [];
  for (var i = 0; i < arr1.length + arr2.length - 1; i++) {
    rarr.push(0);
  }
  for (var i = 0; i < arr1.length; i++) {
    let arr1El = arr1[i];
    if (arr1El == 0)
      continue;
    for (var j = 0; j < arr2.length; j++) {
      let arr2El = arr2[j];
      if (arr2El == 0)
        continue;
      rarr[i + j] += arr1El * arr2El;
    }
  }

  return rarr;
}

function mul() {
  if (arguments.length == 0)
    return undefined;
  if (arguments.length == 1)
    return arguments[0];
  var arrK = arrMul(arguments[0], arguments[1]);

  for (var i = 2; i < arguments.length; i++) {
    arrK = arrMul(arrK, arguments[i]);
    console.log('mooar');
  }

  return arrK;
}

function polyLog(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0)
      continue;
    let sgn = "+ ";
    if (arr[i] < 0)
      sgn = '- ';
    str += sgn+Math.abs(arr[i])+ "n^"+(arr.length-1-i)+" ";
  }
  console.log(str);
}

module.exports = {
  factoriel: factoriel,
  Tk: Tk,
  Tkm1: Tkm1
}