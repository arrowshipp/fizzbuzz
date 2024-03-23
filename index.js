function fizzBuzz(n) {

var A = new Array(n);
A[0]=6;
for (var i=1; i<n; i++) {
  
  if (i%2==0) { 
    if (i%3==0) { //divisible by 6
      A[i]=6;
    } else { //divisible by 2
      A[i]=2;
    }
  } 
  
  else if (i%3==0) { //divisible by 3
    A[i]=3;
  }
    
  else { //sum of all elements before 
    var sum=0;
    for (var j=0; j<i; j++) {
      sum+=A[j];
    }
    A[i]=sum;
  }
}
return A;
}

console.log(fizzBuzz(6));
