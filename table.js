var Node = function(key, value) {
	this.key = key;
	this.value = value;
	this.next = null;
};

var Table = function(size) {
	this.cells = new Array(size);

	this.hash = function(key) {
		var count = 0;
		for (i = 0; i < key.length; i++) count += key.charCodeAt(i);
		return count % this.cells.length;
	};

	this.insert = function(key, value) {
		var loc = this.hash(key);

		if (!this.cells[loc]) {
			this.cells[loc] = new Node(key, value);
		} else if (this.cells[loc].key === key) {
			this.cells[loc].value = value;
		} else {
			var node = this.cells[loc];
			while (node.next) {
				if (node.next.key === key) {
					node.next.value = value;
					return;
				}
				node = node.next;
			}
			node.next = new Node(key, value);
		}
	};

	this.get = function(key, all) {
		var res = [];
		var loc = this.hash(key);
		if (!this.cells[loc]) return null;

		var node = this.cells[loc];
		while (node) {
			if (all) {
				res.push(node.value);
			} else if (node.key === key) {
				res.push(node.value);
			}
			node = node.next;
		}

		return res;
	};
};

module.exports = Table;
