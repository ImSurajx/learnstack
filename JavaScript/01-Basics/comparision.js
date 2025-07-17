console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

/*
when we compare two data types it's must be the same data type.
what we can do;
we can use type conversion.
*/
console.log("2">1);
console.log("02">1);

/*
the reason is that an equality check == and comparision > < >= <= work differently
comparision convert null to a number, treating it as 0
that's why (3) null >= 0 is true  and (1) null > 0 is false;

Equality (==) → doesn’t convert null to number.
Relational (<, >, >=, <=) → converts null to number (0).

try to avoid this kind of comparision
*/
console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

/*
=== strickt equal to
also compare datatypes of variables 
recommend to use.
*/ 

console.log("2" === 2); // stop converstion & match












