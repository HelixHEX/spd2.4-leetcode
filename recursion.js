//A function that returns the factorial of any positive integer 
//(e.g. 5! = 1*2*3*4*5 = 120)
var factorial = n => {
  if (n === 0) return 1
  return n * factorial(n - 1)
}