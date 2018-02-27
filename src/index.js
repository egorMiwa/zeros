module.exports = function getZerosCount(number) {
  // your implementation
  var S = 0;
  while (number >= 5)
  {
    number = Math.floor(number/5);
    S = S + number;
  }
  return S;
}
