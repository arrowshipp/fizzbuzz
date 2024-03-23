# fizzbuzz

Alternative Fizz Buzz

Write a function that takes in an integer n > 0,
and return an array A of length n.

The element at index i of array A is
determined by these conditions:

A[i] = 2	,	if i is divisible by 2
A[i] = 3	,	if i is divisible by 3
A[i] = 6	,	if i is divisible by both 2 and 3

If none of the above conditions are true, then

A[i] =   sum of all the array elements in 
indices that come before i

The remainder operator in JavaScript is %
Example for Input n = 6:

A[0] = 6,	0 divisible by both 2 and 3
A[1] = 6,	none of the conditions are true
A[2] = 2,	2 divisible by 2
A[3] = 3,	3 divisible by 3
A[4] = 2,	4 divisible by 2
A[5] = 6+6+2+3+2 = 19

If the function is test(), then test(6) = A, and A =  [6,6,2,3,2,19].
