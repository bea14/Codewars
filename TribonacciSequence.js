/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

*/
/*
describe("Basic tests",function(){
Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
Test.assertSimilar(tribonacci([1,1,1],1),[1])
Test.assertSimilar(tribonacci([300,200,100],0),[])
Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
})
*/
/*
Random tests
Testing for signature: [12, 15, 4] and n: 23
Testing for signature: [2, 15, 18] and n: 21
Testing for signature: [17, 14, 17] and n: 47
Testing for signature: [9, 6, 7] and n: 0
Testing for signature: [10, 1, 1] and n: 18
*/
let res = []
let sum = 0
function tribonacci(signature,n){
  console.error(signature)
  //your code here
  res = []
  sum = 0
  if (n == 2) {
    res.push(signature[0])
    res.push(signature[1])            
             }
  if (n == 3) {res.push(signature)}
  if (n == 1) {res.push(signature[0])}
  if (n == 0) {res = []}
  if (signature.length == 0) {res = []}
  if (signature.length == 0) {res = signature}
  if (signature.length != 0 && signature.length != 1 && n > 2){
    res = signature
    for (let i = 0; i < signature.length; i++) {
    sum =  sum + parseFloat(signature[i])
    }
    res.push(sum);
    sum = 0
    for (let i = 3; i < n-1; i++) {
     sum = parseFloat(res[i]) + parseFloat(res[i-1]) + parseFloat(res[i-2])
      res.push(sum);
    }
  }  
    return res
}

/*
Time: 600msPassed: 10Failed: 0
Test Results:
Basic tests
Test Passed: Value == '[1, 1, 1, 3, 5, 9, 17, 31, 57, 105]'
Test Passed: Value == '[0, 0, 1, 1, 2, 4, 7, 13, 24, 44]'
Test Passed: Value == '[0, 1, 1, 2, 4, 7, 13, 24, 44, 81]'
Test Passed: Value == '[1, 0, 0, 1, 1, 2, 4, 7, 13, 24]'
Test Passed: Value == '[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]'
Test Passed: Value == '[1, 2, 3, 6, 11, 20, 37, 68, 125, 230]'
Test Passed: Value == '[3, 2, 1, 6, 9, 16, 31, 56, 103, 190]'
Test Passed: Value == '[1]'
Test Passed: Value == '[]'
Test Passed: Value == '[0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5]'
Completed in 6ms
STDERR
You have passed all of the tests! :) 
*/
/*SOLUTIONS*/
/*
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/
