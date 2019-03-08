/*Number reverse

((num)=>{
let str = num.toString();
str = str.split("");
str = str.reverse();
str = str.join('');
str = +str;
console.log(str, typeof str);
})(12345);
/*Number reverse*/

/**check for plaindrome

console.log(((str)=>{
  str = str.replace(/[' ']/g,'');
for(let i = 0; i < str.length-1; i++){
  if(str[i]===str[str.length-1-i] ){
  }else{
  return false;
  }
}
return true;
})('1 2 32    1'));
/*check for palindrome*/

/*random number between 5 and 7
(()=>{
  console.log( 5 +  Math.random() * 2);
})();
/**/

/* recursiveFactorial
function recursiveFactorial(num){
  if(num===1){
    return 1;
  }
  return num * recursiveFactorial(num-1);
}
console.log('Output : '+recursiveFactorial(5));
/**/

/*recursiveGcd
function recursiveGcd(a,b){
  var inp = a < b ? a : b;
    function chkGcd(inp){
      if(inp === 1){
        return 1;
      }
      if((a % inp === 0) && (b % inp === 0)){
         return inp;
      } else{
        return  chkGcd(inp-1);
      }
    }
 return chkGcd(inp);
}
console.log('Output : '+recursiveGcd(100,200));
/**/

/*Array binary search

function bSearch(arr,target){

    var half = Math.floor(arr.length / 2);
    if(arr[half] === target){
      return half;
    }

    if(target > arr[half]){
      return half + bSearch(arr.slice(half,arr.length),target);
    }else {
      return bSearch(arr.slice(0, half),target);
    }


}
var inpArr = [1,22,35,47,58,61,75,86,90];

console.log('Output : ' + bSearch(inpArr,58));

/**/

/*first non repeating char in a string
console.log(((str)=>{
  for(let i=0 ; i<str.length ; i++){
    let compareStr = str.substr(i+1, str.length);
    if( !(compareStr.indexOf(str[i]) > -1) ){
      return str[i];
    }
  }
})('the quick brown fox jumps then quickly blow air'));

/**/
/* array reduce, generator function
console.log(((arr,str)=>{

  function* loopOver(){
    yield 5;
    yield 6;
  }

let l = loopOver();
console.log(l.next(), l.next());
console.log(l.next(), l.next());
  for(v of loopOver()){
  console.log(v);
}


  return  "Sum of array : "+arr.reduce((p,v,i)=>{
      return  p+v;
    });


})([2,3,1,5],'Hello World'));
/**/

/**/


/**/

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
