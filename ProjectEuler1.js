function multiplesOf3and5(number) {
  // Good luck!

  var temp = 0;

  for(var i = 3; i < number; i++)
  {
    if((i % 3 === 0) || (i % 5 === 0))
    {
      temp = temp + i;
    }
  };
  return temp;
}

multiplesOf3and5(1000);
