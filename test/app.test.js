var List = require('../app');

var assert = require('assert');
/*from cmd*/

describe('add data to list', function() {
	it('should add to HEAD', function() {
		var list = new List();
		var item1 = '1';
		var item2 = '2';
		var item3 = '3';
		list.addToHead(item1);
		list.addToHead(item2);
		list.addToHead(item3);

		assert.equal(list.head.value, item3);
		assert.equal(list.tail.value, item1);
		assert.equal(list.head.previous.value, item2);
		assert.equal(list.head.previous.previous.value, item1);
		assert.equal(list.tail.next.value, item2);
		assert.equal(list.tail.next.next.value, item3);
	});
	it('should add to TAIL', function() {
		var list = new List();
		var item1 = '1';
		var item2 = '2';
		var item3 = '3';
		list.addToTail(item1);
		list.addToTail(item2);
		list.addToTail(item3);

		assert.equal(list.head.value, item1);
		assert.equal(list.tail.value, item3);
		assert.equal(list.head.previous.value, item2);
		assert.equal(list.head.previous.previous.value, item3);
		assert.equal(list.tail.next.value, item2);
		assert.equal(list.tail.next.next.value, item1);
	});
	it('should display list', function() {
		var list = new List();
		var item1 = '1';
		var item2 = '2';
		var item3 = '3';
		list.addToHead(item1);
		list.addToHead(item2);
		list.addToHead(item3);
		assert.deepEqual(list.displayList(), ['1', '2', '3']);
		list.removeHead();
		assert.deepEqual(list.displayList(), ['1', '2']);
	});
});
