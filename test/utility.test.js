var assert = require('assert');
var Utility = require('../utility');

describe('utility test suite', function() {
	it('should find index of passed param', function() {
		var utility = new Utility({ name: 'Raj', address: 'Pune' });

		assert.equal(utility.localObject.name, 'Raj');

		assert.equal(
			utility.findIndex(function(key, value) {
				return value === 'Pune';
			}),
			'address'
		);

		assert.equal(utility.mySize(function(len){
			return len;
		}),2);
	});
});
