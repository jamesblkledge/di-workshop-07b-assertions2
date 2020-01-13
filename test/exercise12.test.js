var chai = require('chai');
var assert = chai.assert;

// These variables are used in the tests. Don't Edit them.
var winterMonths = ['dec,','jan', 'feb', 'mar'];
var backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
 
suite('Unit Tests Exercise 12 - Array Inclusion',function(){
  // 12 - #include vs #notInclude 
  test('Array inclusion 1', function() {
    assert.notInclude(winterMonths, 'jul', "It's summer in july...");
  });
  test('Array inclusion 2', function(){
    assert.include(backendLanguages, 'javascript', 'JS is a backend language !!');
  });
})