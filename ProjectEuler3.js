function largestPrimeFactor(number) {
  // Good luck!
  var a = 0;
  var d = 2;
  while( number > 1 )
  {
    if( number % d === 0)
      {
       number /= d;
      }
    else
      {
        d++
      }
  }
  return d;
}

largestPrimeFactor(13195);
