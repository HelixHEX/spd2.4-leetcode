/*
 * Complete the 'shortestPalindrome' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

/* Example 1
input: abacaba
output: 0
*/

/* Example 2
input: abab
output: 1
*/

/* Example 3
input: yutrrme
output: 2
*/




function shortestPalindrome(s) {
  let count = 0;
  let str = s;
  while(!isPalindrome(str)) {
    count++;
    str = s.slice(count, s.length);
  }
  return count;

    
}

function isPalindrome(str) {
        //if the length of the string is less than or equal to 1
        if(str.length <= 1) {
            //return true
            return true;
        }

        //if the first and last characters of the string are not equal to each other
        if (str[0] !== str[str.length - 1]) {
            //return false
            return false;
        }

        //return the result of calling isPalindrome on the string without the first and last characters
        return isPalindrome(str.slice(1, str.length - 1));
    }

// Language: javascript
console.log(shortestPalindrome('abab'));