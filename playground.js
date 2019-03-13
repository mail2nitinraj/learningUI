/*Number reverse*/

((num)=>{
let str = num.toString();
str = str.split("");
str = str.reverse();
str = str.join('');
str = +str;
console.log(str, typeof str);
})(12345);
/*Number reverse*/

/**check for plaindrome*/

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

/*random number between 5 and 7*/
(()=>{
  console.log( 5 +  Math.random() * 2);
})();
/**/

/* recursiveFactorial*/
function recursiveFactorial(num){
  if(num===1){
    return 1;
  }
  return num * recursiveFactorial(num-1);
}
console.log('Output : '+recursiveFactorial(5));
/**/

/*recursiveGcd*/
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

/*Array binary search*/

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

/*first non repeating char in a string*/
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

//permutations of string with recursion
/*function makeCombinationRec(str) {
	var len = str.length;

	if (len === 1) {
		return [str];
	}
	var res = [];
	for (var i = 0; i < len; i++) {

		var c = str[i];
		var r = str.slice(0, i) + str.slice(i + 1);

  	var results = makeCombinationRec(r);

		results.forEach(function(v) {
      console.log( v);
    	res.push(c + v);
		});
	}
	return res;
}
console.log(makeCombinationRec('dog'));

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

/*count chars in string
console.log(((str)=>{
var arr = [];
for (var i = 0; i < str.length; i++) {
  var reg = new RegExp(str[i],'g');
  arr[i] = str[i] +' = '+str.match(reg).length;
}
arr = arr.filter((value, index, self)=>self.indexOf(value) === index);
return arr;
})('ppiiyyuusshhh'));
/**/

/* quick sort

function quickSORT(arr){
  if(arr.length <= 1)return arr;

  let leftArr = [];
  let rightArr = [];
  let pivot = arr.pop();
  let newArr = [];

  arr.forEach((value)=>{
    if(value>pivot)rightArr.push(value);
    else if(value<=pivot)leftArr.push(value);
  });
return newArr.concat(quickSORT(leftArr),pivot,quickSORT(rightArr));

}

console.log(quickSORT([,100,5,1,8,2,9,3]));


/***/

/*
function bubbleSORT(arr)
{
for(i = 0; i < arr.length-1; i++){
  for (var j = 0; j < arr.length-1; j++) {
    if (arr[j] > arr[j+1]) {
      swapEl(arr, j, j+1);
    }
  }
}
function swapEl(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
return arr;
}

console.log(bubbleSORT([8,1,6,3,5,2]));
/**/
/*Merge sort

function mergeSORT(arr){
  if(arr.length < 2){
    return arr;
  }

  var midpoint = Math.floor(arr.length / 2);

  function merge(left , right){
      var out = [];
      while(left.length && right.length){
        out.push(left[0] < right[0] ? left.shift() : right.shift() );
      }

      while(left.length){
        out.push(left.shift());
      }

      while (right.length) {
        out.push(right.shift());
      }
      return out;
  }

  return merge(
    mergeSORT(arr.slice(0, midpoint)),mergeSORT(arr.slice(midpoint, arr.length))
  );

}

console.log(mergeSORT([14,9,3,7,55,2,5,1,4]));

/**/
/*longest palindrome
function chkPalin(str){
  if(str === '' || str.length === 1){
    return true;
  }
  var arr = str.split('');
  if(arr.pop() === arr.shift()){
  return  chkPalin(arr.join(''))
  }else{
    return false;
  }
}

console.log(((str)=>{
var length = 0;
var result = '';

  var arr = str.split(' ');
  arr.forEach((value)=>{
    if(chkPalin(value)){
      if(value.length > length){
        length = value.length;
        result = value;
      }
    }
  });
return result;
})('hi test for 123321  this is nitin'));
/**/
