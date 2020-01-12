var chai = require('chai');
var assert = chai.assert;

    suite('Unit Tests Exercise 8 - Number Comparison 1',function(){
      // 8 - .isAbove() => a > b , .isAtMost() => a <= b 
      // the tests will fail by default
      // use .isAbove() and isAtMost() to make the following tests pass
      test('Comparing the length of a string', function(){
        assert.fail('hello'.length , 5);
      });
      test('Comparing two numbers', function(){
         assert.fail(1, 0);
      });
      test('Comparing special numbers', function(){
         assert.fail(Math.PI, 3);
      });
      test('Comparing random numbers', function(){
         assert.fail(1 - Math.random(), 1);
      });
      
    })

// number comparison allows for you to determine a range 
// in which certain variables or properties should be found
// one test, using randomness, will still produce a number lower
// than one, but randomness introduces indeterminancy into our tests.
