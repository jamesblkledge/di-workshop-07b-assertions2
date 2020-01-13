var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 11 - Array Identitiy',function(){
  // 11 - #isArray vs #isNotArray 
  test('does split return an array?', function() {
    assert.isArray('isThisAnArray?'.split(''), 'String.prototype.split() returns an Array');
  })
  test('does indexOf return an array?', function() {  
    assert.isNotArray([1,2,3].indexOf(2), 'indexOf returns a number.');
  });
})