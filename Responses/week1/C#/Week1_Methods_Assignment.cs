/* 
📝 Assignment Tasks
1️⃣ Welcome Message Method
*/
using System; //🗣️ “Hey C#, I want to use the tools that let me print words on the screen.”, Without this line, Console.WriteLine would not work.

namespace Name //🗣️ “All my code lives inside this box called Name.”
{
    class Program // Robot.
    {
        /* //! CLOSED IN ORDER FOR THE REUSE OF Main(). 

        static void Main() //🗣️ “C# starts the program here!”
        {
            WelcomeUser("Jonathan"); // Calling of method.
            WelcomeUser("Aaron"); // Telling the computer to 🗣️ “Say welcome to Jonathan”, 🗣️ “Say welcome to Aaron”
        }

        */
        static void WelcomeUser(string name) //method(HELPER), string name means: string → text, name → the text you give it
        {
            //The $ is magic ✨, It allows C# to put the name inside the sentence.
            Console.WriteLine($"Welcome, {name}!");
            // 👉 The $ means string interpolation.String interpolation allows you to insert variables directly inside a string.
            // 👉{name}: This is where the value of the variable name is placed.
        }
    }

    //2️⃣ Number Square Method
    class Square
    {
        /*

        static void Main()
        {
            int result = SquareNumber(6); //📦 You store the answer in a box called result
            Console.WriteLine(result); //🖨️ Print what’s inside the box
        }

        /*

        /*
        1️⃣ static — “This machine belongs to everyone”
        🧸 Imagine a toy that anyone can use without owning it.
        static means:
        You don’t need to create an object
        You can use the machine right away
        👉 For now, just remember:
        static = easy to use

        This int tells us:
        🗣️ “This machine will give back a whole number.”

        3️⃣ SquareNumber — “The machine’s name”
        This is just the name of the machine 🏷️
        🗣️ “Hey machine, your name is SquareNumber.”

        4️⃣ (int number) — “What you put into the machine”
        This part tells us:
        🗣️ “You must give me ONE number.”
        int → the type (whole number)
        number → the name of the box that holds it
        Think of it like this 🎁:
        You put 5 into a box called number.

        The word number here is called a parameter
        It’s just a name for the box the machine will create inside the method
        We could name it anything!

        🧸 Toy Box Analogy
        You tell the robot: “Here is a toy” → 5
        Robot makes a box called number → stores the toy inside
        Robot plays with the toy → squares it
        Robot returns the new toy → gives it to you
        The name is just a label for the box, it doesn’t change how the robot works.

        Main program
        +--------+
        | result | <- empty
        +--------+

        Call SquareNumber(5)
        Method memory:
        +--------+
        | number | <- 5
        +--------+
        Calculate 5*5 → 25

        Return → copy 25 to main program:
        Main program:
        +--------+
        | result | <- 25
        +--------+
        Method memory disappears
        */
        static int SquareNumber(int number) //🧠 This is a machine 🧮, You give it a number, It gives you back the number × number
        {
            return number * number;
        }
    }

    //3️⃣ Temperature Converter (Celsius → Fahrenheit)
    //? POV: I did this without help🧑😁💪
    class Converter
    {
        /*

        static void Main()
        {
            int result = ConvertToFahrenheit(100);
            Console.WriteLine(result);
        }

        */

        static int ConvertToFahrenheit(int celsius)
        {
            return (celsius * 9 / 5) + 32;
        }
    }
    //4️⃣ Email Generator

    class Generator
    {
        /*
        static void Main()
        {
           string result = GenerateEmail("emmanuel");
           Console.WriteLine(result);
        }
        */
        static string GenerateEmail(string name)
        {
            return name + "@gmail.com";
        }
    }
    //5️⃣ Check Even or Odd
    class CheckEvenOdd
    {
        // Method that checks whether a number is even or odd
        static string IsEven(int number)
        {
            if (number % 2 == 0)
            {
                return "Even";
            }
            else
            {
                return "Odd";
            }
        }
        /*
        static void Main()
        {
            Console.WriteLine(IsEven(5));
            Console.WriteLine(IsEven(3));
            Console.WriteLine(IsEven(8));
            Console.WriteLine(IsEven(97));
            Console.WriteLine(IsEven(54));
        }
        */
    }

    //6️⃣ Mini Calculator Method
    class MiniCalculator
    {
        static double Calculate(string operation, double a, double b)
        {
            if (operation == "add")
            {
                return a + b;
            }
            else if (operation == "subtract")
            {
                return a - b;
            }
            else if (operation == "multiply")
            {
                return a * b;
            }
            else if (operation == "divide")
            {
                return a / b;
            }
            if (b == 0)
            {
                Console.WriteLine("Invalid Operation");
                return 0;
            }

            return a / b;

            /*
                    }
                    static void Main()
                    {
                        Console.WriteLine(Calculate("add", 5, 6));
                        Console.WriteLine(Calculate("subtract", 5, 6));
                        Console.WriteLine(Calculate("divide", 5, 6));
                        Console.WriteLine(Calculate("multiply", 5, 6));
                    }
            */
        }

        //7️⃣ Bonus Challenge (Optional)
        class Exchange
        {
            static double ConvertToDollars(double ugx)
            {
                double ExchangeRate = 3800;

                double Dollars = ugx / ExchangeRate;

                return Dollars;
            }
            static void Main()
            {
                Console.WriteLine(ConvertToDollars(670000));
            }
        }
    }
}
