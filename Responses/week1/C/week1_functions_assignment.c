#include<stdio.h>
#include<string.h> //Needed for strcmp

char a = 5;
char b = 6;
    // Function prototype (declaration)
    void WelcomeUser(char name[]);
    int SquareNumber(int number);
    float ConvertToFahrenheit(float celsius);
    void GenerateEmail(char name[]);
    int IsEven(int number);
    float Calculate(char operator[], float a, float b);
    float ConvertToDollars(float ugx);
    
    // Calling the function
    int main() {
        WelcomeUser("Jonathan");
        WelcomeUser("Aaron");
        WelcomeUser("Renee");

        int result;

        // Call the function and store the result
        result = SquareNumber(45);
        printf("The square is: %d\n", result);

        result = SquareNumber(89);
        printf("The square is: %d\n", result);

        printf("This is the temperature: %.2f°F\n", ConvertToFahrenheit(100));
        printf("This is the temperature: %.2f°F\n", ConvertToFahrenheit(340));
        printf("This is the temperature: %.2f°F\n", ConvertToFahrenheit(3440));

        GenerateEmail("jonathan");
        GenerateEmail("renee");
        GenerateEmail("timothy");

        IsEven(334);
        IsEven(876);
        IsEven(43);
        IsEven(94);
        IsEven(33);

        printf("4 + 5 = %.2f\n", Calculate("add", 4, 5));
        printf("3 * 6 = %.2f\n", Calculate("multiply", 3, 6));
        printf("10 - 7 = %.2f\n", Calculate("subtract", 10, 7));
        printf("20 / 4 = %.2f\n", Calculate("divide", 20, 4));

        printf("%.2f\n", ConvertToDollars(7600));
        printf("%.2f\n", ConvertToDollars(765600));
        printf("%.2f\n", ConvertToDollars(4598000));

    }
    
    // Function definition
    void WelcomeUser(char name[]) //This is a character array, which is how C stores text (strings).

    {
        printf("Welcome %s!\n", name); //%s tells C to print a string.
    }

    int SquareNumber(int number) 
    {
        return number * number;
    }

    float ConvertToFahrenheit(float celsius)
    {
        return (celsius * 9 / 5) + 32;
    }

    void GenerateEmail(char name[])
    {
        printf("%s@gmail.com\n", name);
    }

    int IsEven(int number)
    {
        if (number % 2 == 0) {
            printf("%d is Even\n", number);
        } else {
            printf("%d is Odd\n", number);
        }
    }

    float Calculate(char operator[], float a, float b)
    {
        if (strcmp(operator, "add") == 0) {
            return a + b;
        } else if (strcmp(operator, "subtract") == 0) {
            return a - b;
        } else if (strcmp(operator, "multiply") == 0) {
            return a * b;
        } else if (strcmp(operator, "divide") == 0) {
            return a / b;
        } else {
            printf("Invalid operator!\n");
            return 0; // Returns 0 for invalid input.
        }
    }

    float ConvertToDollars(float ugx)
    {
        return ugx / 3800;
    }