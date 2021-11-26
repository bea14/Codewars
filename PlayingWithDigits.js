/*Playing with digits
Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

/*
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)

  });
});
*/

function digPow(n, p){
    // ...
    let sum0 = 0
    let sum = 0
    let string = n.toString();
    let len = string.length;
    for (let i = 1; i < len; i++) {
    sum0 = Math.pow(parseInt(string.charAt(0),10),p)
      sum = sum + Math.pow(parseInt(string.charAt(i),10),(p+i))
    }
    let sumTot = sum0 + sum
    if (sumTot % (n) == 0) {
      let k = sumTot/n 
      return k
      } else return -1
  }

  /*
  Time: 714msPassed: 1Failed: 0
Test Results:
Tests
test
Completed in 5ms
You have passed all of the tests! :) 
*/
/*SOLUTIONS*/
/*
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
*/