var Utility = function(size) {
	this.localObject = new Object(size);

	this.findIndex = function(callbk) {
		for (i in this.localObject) {
			if (callbk(i, this.localObject[i])) return i;
		}
		return null;
	};

	this.mySize = function(callbk){
   return callbk(Object.keys(this.localObject).length);

	}
};

module.exports = Utility;
