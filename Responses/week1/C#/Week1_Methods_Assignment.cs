/* 
📝 Assignment Tasks
1️⃣ Welcome Message Method
*/
using System; //🗣️ “Hey C#, I want to use the tools that let me print words on the screen.”, Without this line, Console.WriteLine would not work.

namespace Name //🗣️ “All my code lives inside this box called Name.”
{
    class Program
    {
        static void Main()
        {
            // 1️⃣ Welcome
            WelcomeUser("Jonathan");
            WelcomeUser("Aaron");

            // 2️⃣ Square
            Console.WriteLine(SquareNumber(6));

            // 3️⃣ Temperature
            Console.WriteLine(ConvertToFahrenheit(100));

            // 4️⃣ Email
            Console.WriteLine(GenerateEmail("emmanuel"));

            // 5️⃣ Even or Odd
            Console.WriteLine(IsEven(5));
            Console.WriteLine(IsEven(8));

            // 6️⃣ Calculator
            Console.WriteLine(Calculate("add", 5, 6));
            Console.WriteLine(Calculate("divide", 10, 2));

            // 7️⃣ Currency
            Console.WriteLine(ConvertToDollars(7600));
        }

        // Methods
        static void WelcomeUser(string name)
        {
            Console.WriteLine($"Welcome, {name}");
        }
        static int SquareNumber(int number)
        {
            return number * number;
        }
        static double ConvertToFahrenheit(double celsius)
        {
            return (celsius * 9 / 5) + 32;
        }
        static string GenerateEmail(string name)
        {
            return name + "@gmail.com";
        }
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
                if (b == 0) return 0;
                return a / b;
            }
            return 0;
        }
        static double ConvertToDollars(double ugx)
        {
            return ugx / 3800;
        }
    }
}

