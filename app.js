var Node = function(p, v, n) {
	this.previous = p;
	this.value = v;
	this.next = n;
};

var List = function() {
	this.head = null;
	this.tail = null;
	this.addToHead = function(v) {
		var node = new Node(this.head, v, null);
		if (this.head) this.head.next = node;
		else this.tail = node;
		this.head = node;
	};
	this.addToTail = function(v) {
		var node = new Node(null, v, this.tail);
		if (this.tail) this.tail.previous = node;
		else this.head = node;
		this.tail = node;
	};
	this.displayList = function() {
		var v = this.tail;
		var msg = '';
		var res = [];
		while (v !== null) {
			msg += v.value + ' ';
			res.push(v.value);
			v = v.next;
		}
		console.log(`List is ${msg}`);
		return res;
	};
	this.removeHead = function() {
		if (!this.head) return null;
		var v = this.head.value;
		this.head = this.head.previous;
		if (this.head) this.head.next = null;
		else this.tail = null;
		return v;
	};
};

module.exports = List;
