var chai = require('chai');
var assert = chai.assert;

function weirdNumbers(delta) {
  return (1 + delta - Math.random());
} 

suite('Unit Tests Exercise 10 - Approximation',function(){
  // 10 - .approximately 
  // .approximately(actual, expected, range, [message])
  // actual = expected +/- range
  // Choose the minimum range (3rd parameter) to make the test always pass
  // it should be less than 1
  test('Approximation part 1', function(){
    assert.approximately(weirdNumbers(0.5) , 1, //edit this
      10 );
  });
  test('Approximation part 2', function(){
    assert.approximately(weirdNumbers(0.2) , 1, //edit this
      10 );
  });
})