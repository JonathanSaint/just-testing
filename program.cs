//! Runs using dotnet run
using System; // using System means that we can use classes from the System namespace.
// A blank line. C# ignores white space. However, multiple lines makes the code more readable.

namespace Helloworld { //namespace is used to organize your code, and it is a container for classes and other namespaces.
class Program          //class is a container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class.
    {                     // The curly braces {} marks the beginning and the end of a block of code.
    
    static void Demo()
    {
            Console.WriteLine("Hello, World!"); // If you omit the using System line, you would have to write System.Console.WriteLine() to print/output text.
            Console.WriteLine("Hello World!");
            Console.WriteLine("I am Learning C#"); // WriteLine method is used to output values.
            Console.WriteLine("It is awesome!");
            Console.WriteLine(3 + 4);
            Console.Write("Hello World! "); // Write() method does not insert new line at the end of out put unlike WriteLine() method.
            Console.Write("I will print on the same line.");
    }
}
}
