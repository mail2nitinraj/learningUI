//prime number

function inp(input) {
	var s = true;
	function chkprime(num) {
		if (num === 2) {
			return num;
		}

		if (input % chkprime(num - 1) === 0) {
			s = false;
			return false;
		}
	}
	chkprime(input);
	return s;
}
////////////////////////
var num = 4;

for (i = 2; i < num; i++) {
	if (num % i == 0) {
		console.log('Not Prime');
	}
}
///////////////////////////
var str = 'The quick';
var c = 0;
var a = str.match(/[a,e,i,o,u]/g);

console.log(a.length);
////////////////////////
function fact(n) {
	if (n == 1) {
		return n;
	}

	return n * fact(n - 1);
}
////////////////////
var num = 7;
var res = num;

for (i = 0; i < num - 1; i++) {
	res = res * (num - 1 - i);
}
console.log(res);
/////////////////////
var str = 'Web Development Tutorial';

var a = str.split(' ');
var o = 0;
var output = '';
for (i in a) {
	if (a[i].length > o) {
		o = a[i].length;
		output = a[i];
	}
}

console.log(output);
//////////////////////
var str = 'the quick brown fox';

var a = str.split(' ');
var o = [];
for (i in a) {
	o[i] = a[i].charAt(0).toUpperCase() + a[i].substr(1);
}

console.log(o.join(' '));
//////////////////////////
var str = 'webmaster';

var a = str
	.split('')
	.sort()
	.join('');

console.log(a);

///////////////////////////
function rec(str) {
	if (str === '' || str.length == 1) {
		console.log('success');
		return true;
	}

	var a = str.split('');
	console.log(a.length);
	if (a.pop() == a.shift()) {
		rec(a.join(''));
	} else {
		return false;
	}
}
///////////////////////
function test(str) {
	console.log(str.charAt(0));
	if (str === undefined || str === '') return '';

	return test(str.substr(1)) + str.charAt(0);
}
//////////////////////
function all1(str) {
	var arr = [];

	for (i = 0; i < str.length; i++) {
		for (j = i; j <= str.length; j++) {
			if (str.substring(i, j) !== '') {
				arr.push(str.substring(i, j));
			}
		}
	}
	return arr.join();
}
///////////////////////
function chk2(str) {
	arr = [];

	for (i = 0; i < str.length; i++) {
		arr[i] = str.charAt(i);
	}
	console.log('start');
	var status = true;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[arr.length - i - 1]) {
			status = false;
		}

		console.log('inner', arr[i], arr[arr.length - i - 1]);
	}
	return status;
}
///////////////////////

var obj = {};

str.replace(/\S/g, function(v) {
	if (isNaN(obj[v])) {
		obj[v] = 1;
	} else {
		obj[v] = obj[v] + 1;
	}
});
///////////////////////////

function checkGCD(cx, cy) {
	var inc = cx < cy ? cx : cy;

	function commondivisor(inc) {
		if (inc === 1) {
			return 1;
		}

		if (cx % inc === 0 && cy % inc === 0) {
			console.log(inc);
			return inc;
		} else {
			commondivisor(inc - 1);
		}
	}

	commondivisor(inc);
}
//////////////////

var gcd = function(a, b) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
};
console.log(gcd(24, 32));
/////////////////////////

function mergeSort(sourceArray) {
	//console.log(`length is ${sourceArray.length}`);

	if (sourceArray.length <= 1) {
		return sourceArray;
	}

	var half = sourceArray.length / 2;
	var left = mergeSort(sourceArray.slice(0, half));
	var right = mergeSort(sourceArray.slice(half, sourceArray.length));

	function merge(left, right) {
		var res = [];
		while (left.length > 0 && right.length > 0) {
			console.log(`left ${left} right ${right}`);
			left[0] <= right[0] ? res.push(left.shift()) : res.push(right.shift());
		}
		console.log(`res ${res}----`);
		return res.concat(left).concat(right);
	}

	return merge(left, right);
}
console.log(mergeSort([5, 3, 8, 2, 9, 55, 22, 88, 11, 1]));
