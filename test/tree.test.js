var Tree = require('../tree');
var assert = require('assert');

describe('Tree test', function() {
	it('should create tree', function() {
		var tree = new Tree(5);
		var data = [3, 6, 1, 7, 8, 4, 10, 2, 9];

		data.forEach(function(v) {
			tree.insert(v);
		});

		var result1 = [];
		var result2 = [];
		tree.displayTree('pre', function(value) {
			result1.push(value);
		});
		assert.deepEqual(result1, [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]);

		tree.displayTree('in', function(value) {
			result2.push(value);
		});
		assert.deepEqual(result2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

		var result3 = [];
		tree.breadthFirst(function(value) {
			result3.push(value);
		});

		assert.deepEqual(result3, [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]);

		assert.equal(tree.getMinValue(), 1);
	});
});
