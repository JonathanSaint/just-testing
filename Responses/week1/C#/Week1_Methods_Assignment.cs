/* 
📝 Assignment Tasks
1️⃣ Welcome Message Method
*/
using System; //🗣️ “Hey C#, I want to use the tools that let me print words on the screen.”, Without this line, Console.WriteLine would not work.

namespace Name //🗣️ “All my code lives inside this box called Name.”
{
    class Program
    {
        //Put all your method calls inside the Main method
        static void Main()
        {
            // 1️⃣ Welcome Message Method Call
            Console.WriteLine("Welcome Message Method Call:");

            WelcomeUser("Jonathan");
            WelcomeUser("Aaron");

            // 2️⃣ Number Square Method Call
            Console.WriteLine("Number Square Method Call:");

            Console.WriteLine(SquareNumber(6));
            Console.WriteLine(SquareNumber(87));
            Console.WriteLine(SquareNumber(1234));

            // 3️⃣ Temperature Converter Method Call (Celsius → Fahrenheit)
            Console.WriteLine("Temperature Converter Method Call (Celsius → Fahrenheit):");

            Console.WriteLine(ConvertToFahrenheit(100));
            Console.WriteLine(ConvertToFahrenheit(0));
            Console.WriteLine(ConvertToFahrenheit(-40));

            // 4️⃣ Email Generator Method Call
            Console.WriteLine("Email Generator Method Call:");

            Console.WriteLine(GenerateEmail("emmanuel"));
            Console.WriteLine(GenerateEmail("sylvia"));
            Console.WriteLine(GenerateEmail("barke"));

            // 5️⃣ Check Even or Odd Method Call
            Console.WriteLine("Check Even or Odd Method Call:");

            Console.WriteLine(IsEven(5));
            Console.WriteLine(IsEven(8));
            Console.WriteLine(IsEven(852));

            // 6️⃣ Mini Calculator Method Call
            Console.WriteLine("Mini Calculator Method Call:");

            Console.WriteLine(Calculate("add", 5, 6));
            Console.WriteLine(Calculate("subtract", 10, 4));
            Console.WriteLine(Calculate("multiply", 3, 7));
            Console.WriteLine(Calculate("divide", 10, 2));

            // 7️⃣ Bonus Challenge: Currency Converter Method Call (UGX → USD)
            Console.WriteLine("Bonus Challenge: Currency Converter Method Call (UGX → USD):");

            Console.WriteLine(ConvertToDollars(3800));
            Console.WriteLine(ConvertToDollars(19000));
            Console.WriteLine(ConvertToDollars(7600));
        }

        // All Methods go below this line 👇

        //1️⃣ Welcome Message Method
        static void WelcomeUser(string name)
        {
            Console.WriteLine($"Welcome, {name}"); // Using string interpolation to insert the name into the welcome message.
        }
        //2️⃣ Number Square Method
        static int SquareNumber(int number)
        {
            return number * number;
        }
        //3️⃣ Temperature Converter Method (Celsius → Fahrenheit)
        static double ConvertToFahrenheit(double celsius) 
        {
            return (celsius * 9 / 5) + 32; 
        }
        //4️⃣ Email Generator Method
        static string GenerateEmail(string name) // Returns an email address by appending "@gmail.com" to the provided name.
        {
            return name + "@gmail.com";
        }
        //5️⃣ Check Even or Odd Method
        static string IsEven(int number) // Returns "Even" or "Odd" based on the input number.
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
        //6️⃣ Mini Calculator Method
        static double Calculate(string operation, double a, double b) // Using double to accommodate division results.
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
                if (b == 0) return 0; // Prevent division by 0
                return a / b;
            }
            return 0; // Default return value if operation is unrecognized.
        }
        //7️⃣ Bonus Challenge: Currency Converter Method (UGX → USD)
        static double ConvertToDollars(double ugx)    // Used double to accommodate decimal values in conversion.
        {
            return ugx / 3800;
        }
    }
}
/*
✔ Runs without errors
✔ Contains all method calls 
✔ Includes comments explaining your logic 
✔ Uses clean and meaningful variable names 
✔ Uses correct C# syntax
*/