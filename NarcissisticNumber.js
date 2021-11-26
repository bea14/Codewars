/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/
function narcissistic(value) {
    // Code me to return true or false
    let sum = 0
    let N = 1
    N = Math.floor(Math.log10(value)) + 1
    if (N == 1) {sum = Math.pow(value,N)}
    else {
   
        /*console.log('m',m)
        console.log(c)
        console.log(d)
        console.log(u)*/
          for (let i = 1; i<=N ; i++){
          div = (value%Math.pow(10,i)-value%Math.pow(10,i-1))/Math.pow(10,i-1)
          console.log('i',i)
        console.log(div)
                     sum = sum + Math.pow(div,i)
            /*let m=(value-value%1000)/1000;
            let c=(value%1000-value%100)/100;
            let d=(value%100-value%10)/10;
            let u=value%10;*/
          }
    }
  }

  