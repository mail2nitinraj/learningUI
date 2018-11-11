var assert = require('assert');
var Table = require('../table');

describe('Hash table test', function() {
	var table = new Table(5);
	table.insert('baa', 1);
	table.insert('aba', 2);
	table.insert('aba', 3);
	table.insert('aac', 4);
	table.insert('aac', 5);
	it('should create table', function() {
		assert.equal(table.hash('baa'), 2);
		assert.equal(table.cells[table.hash('baa')].value, 1);
		assert.equal(table.cells[table.hash('aba')].next.value, 3);
		assert.equal(table.cells[table.hash('aac')].value, 5);
	});

	it('should get value', function() {
		assert.deepEqual(table.get('baa', true), [1, 3]);
		assert.deepEqual(table.get('aac', false), [5]);
	});
});
