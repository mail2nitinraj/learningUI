/*Prime Number using recursion */
/*
function chkPrime(nr, inc) {
	if (inc == 2) {
		return true;
	}
	//console.log(nr, inc);
	if (nr % inc === 0) {
		//console.log('NOT');
		return false;
	} else {
		return chkPrime(nr, inc - 1);
	}
}

var num = 23;
var res = chkPrime(num, num - 1) ? 'PRIME' : 'NOT PRIME';
console.log(num + ' is ' + res);
*/
// permutations of string
/*
(function makeCombination(str) {
	var len = str.length - 1;
	var res = '';
	for (i = 0; i <= len; i++) {
		res = str.charAt(i);

		for (j = 0; j <= len; j++) {
			if (i != j) {
				res += str.charAt(j);
			}
		}

		console.log(res);
	}
	for (i = 0; i <= len; i++) {
		res = str.charAt(i);

		for (j = len; j >= 0; j--) {
			if (i != j) {
				res += str.charAt(j);
			}
		}

		console.log(res);
	}
})('dog');*/
/*
//permutations of string with recursion
function makeCombinationRec(str) {
	var len = str.length;

	if (len === 1) {
		return [str];
	}
	var res = [];
	for (var i = 0; i < len; i++) {
		console.log(i, str);
		var c = str[i];
		var r = str.slice(0, i) + str.slice(i + 1);
		var results = makeCombinationRec(r);
		results.forEach(function(v) {
			res.push(c + v);
		});
	}
	return res;
}
console.log(makeCombinationRec('dog'));
*/
//fibonacci Number
/*function fibonacci(n) {
	var res = [0, 1];

	if (n <= 2) return 1;

	for (var i = 2; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}
	return res + ' ' + res[n];
}
console.log(fibonacci(12));*/
/*
//fibonacci with recursion
function fibo(inc) {
	if (inc <= 1) return inc;
	return fibo(inc - 1) + fibo(inc - 2);
}
console.log(fibo(12));*/
/*
// string reverse using recursion
function rever(str) {
	if (str.length == 1) return str;

	return rever(str.slice(1, str.length)) + str.charAt(0);
}
console.log(rever('OLLEH'));*/
