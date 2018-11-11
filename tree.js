var Tree = function(value) {
	this.left = null;
	this.value = value;
	this.right = null;

	this.insert = function(value) {
		if (value <= this.value) {
			if (!this.left) this.left = new Tree(value);
			else this.left.insert(value);
		} else {
			if (!this.right) this.right = new Tree(value);
			else this.right.insert(value);
		}
	};

	this.displayTree = function(order, callbk) {
		order === 'pre' && callbk(this.value);
		this.left && this.left.displayTree(order, callbk);
		order === 'in' && callbk(this.value);
		this.right && this.right.displayTree(order, callbk);
		order === 'post' && callbk(this.value);
	};

	this.breadthFirst = function(callbk) {
		var res = [this];
		while (res.length) {
			var root = res.shift();
			callbk(root.value);
			root.left && res.push(root.left);
			root.right && res.push(root.right);
		}
	};

	this.getMinValue = function() {
		if (this.left) return this.left.getMinValue();
		return this.value;
	};
};

module.exports = Tree;
