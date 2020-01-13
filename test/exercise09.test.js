var chai = require('chai');
var assert = chai.assert;
 
    suite('Unit Tests Exercise 9 - Number Comparison 2',function(){
      // 9 - .isBelow() => a < b , .isAtLeast =>  a >= b 
      // very similar to the last exercise
      test('Comparing the length of another string', function(){
        assert.isAtLeast('world'.length , 5);
      });
      test('Comparing a random number with zero', function(){
        assert.isAtLeast(2*Math.random(), 0);
      });
      test('Comparing modulo remainers', function(){
        assert.isBelow(5 % 2, 2);
      });
      test('Comparing fractions', function(){
        assert.isBelow(2/3, 1);
      });
      
    })

// number comparison allows for you to determine a range 
// in which certain variables or properties should be found
// one test, using randomness, will still produce a number lower
// than one, but randomness introduces indeterminancy into our tests.