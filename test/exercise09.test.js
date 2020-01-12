var chai = require('chai');
var assert = chai.assert;


/** Delete this line and the one at the bottom when you're ready for exercise 9
 
    suite('Unit Tests Exercise 9 - Number Comparison 2',function(){
      // 9 - .isBelow() => a < b , .isAtLeast =>  a >= b 
      // very similar to the last exercise
      test('Comparing the length of another string', function(){
        assert.fail('world'.length , 5);
      });
      test('Comparing a random number with zero', function(){
        assert.fail(2*Math.random(), 0);
      });
      test('Comparing modulo remainers', function(){
        assert.fail(5 % 2, 2);
      });
      test('Comparing fractions', function(){
        assert.fail(2/3, 1);
      });
      
    })

// number comparison allows for you to determine a range 
// in which certain variables or properties should be found
// one test, using randomness, will still produce a number lower
// than one, but randomness introduces indeterminancy into our tests.
  
// Delete this line when you're ready for exercise 7 **/
