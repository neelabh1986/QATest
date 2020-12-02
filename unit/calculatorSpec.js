var assert = require('assert');

var calc = require('../test/calculator.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		assert.strictEqual(calc.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2-3=1', function(done) {
		assert.strictEqual(calc.sub(2, 3), 1);
		// Invoke done when the test is complete.
		done();
	});
});