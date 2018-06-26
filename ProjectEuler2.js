function fiboEvenSum(number) {
  // You can do it!
  var a = 1;
  var b = 2;
  var sum = 0;
  var count = 0;
 
 while(count <= number)
 {
    if(a % 2 === 0)
  {
     sum  += a;
  }
  var c = a + b;
  a = b;
  b = c;
  count++;
 }
  return sum;
}
fiboEvenSum(10);
