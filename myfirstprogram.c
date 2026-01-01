//! (gcc myfirstprogram.c -o myfirstprogram) in terminal creates executable file named myfirstprogram

#include<stdio.h>      //STEP 1: (Standard Input-Output) library Header File: Mandatory for a c program

// STEP 2: Main Function - execution of program starts from here
int main() {           // Body of the program starts here
  printf("Hello, World!\n");   // Prints Hello, World! on the screen, \n is used to move the cursor to next line.

  // Variables are defined as data types.
  // INDENTATION: It is a good practice to use indentation (spaces or tabs) to make the code more readable.

  //STEP 1: Variable Declaration

  int a, b, result; // These are integer type variables

  //STEP 2: Variable Initialization
  a = 10;  // Assigning value 10 to variable a
  b = 20;  // Assigning value 20 to variable b

  //STEP 3: Variable Usage
  result = a + b; // Adding values of a and b and storing it in result variable, a and b are operands, + is (binary)operator.

  printf( "The answer is = %d\n", result); // Printing the result on the screen, %d is a format specifier used for integer type.
  printf("The answer of %d + %d = %d\n", a, b, result);  // Printing values of a, b and result using format specifiers.

  double c, d, result2;
  c = 15.76;
  d = 25.897;
  result2 = c * d; // Multiplying values of c and d and storing it in result2 variable. * is (binary) operator.

  printf("The answer is = %f\n", result2);
  printf("The answer of %f x %f = %f\n", c, d, result2); // Printing values of c, d and result2 using format specifiers. %f is used for float/double type.
}