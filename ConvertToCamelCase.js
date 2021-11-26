/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
/*
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

});
});*/

function toCamelCase(str){
    return str.charAt(0) + str.slice(1).toLowerCase().replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ0-9]+(.)/g, function(match, chr)
     {
         return chr.toUpperCase();
     });
 }

 /*
 Time: 672msPassed: 8Failed: 0
Test Results:
toCamelCase
should handle empty values
should remove underscores and convert first letter of word to upper case (2 of 2 Assertions)
should remove hyphens and convert first letter of word to upper case (5 of 5 Assertions)
Completed in 6ms 
*/

/*SOLUTION*/
/*function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
*/
/*
function toCamelCase(str){
  var strArray;
  if (str.indexOf('-') !== -1){ //if delineated by -
    strArray = str.split('-');
  } else {
    strArray = str.split('_');  //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i=1, len=strArray.length; i < len; i++){
    var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
  

}
*/