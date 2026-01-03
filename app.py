import math # Math module that contains functions for mathematical operations.
print(math.ceil(2.9)) # Prints 3. A ceil of a number.
print(math.floor(2.9)) #Prints 2 and gets rid of the decimals.

"""
Mathematical Operators

+                    addition
-                    subtraction
/                    division
**                   power
//                   floor division
%                    modulus
*                    multiplication
int(number)          integer
float(number)        float
"""

print("Arinda Jonathan")
#Py dog
print("o----")
print(" ||||")

print("*" * 10) #Expression

#Variables and data types
price = 10
price = 20 #integer
rating = 4.5 #float
name='Jonathan' #string
is_published = False #boolean
print(price)

#Patient Check in
name = "John Smith"
age = 20
is_new = True

#Getting User input
name = input("What is your name? ")
print("Hi " + name)
fav_color = input("What is your favorite color? ")
print(name + " likes " + fav_color)

birth_year = input("Birth year? ")
print(type(birth_year))
age = 2026 - int(birth_year)
print(type(age))
print(age)


#weight converter
#1 pound = 0.453592 Kg
ask_weight = input("What is your weight(lbs)? ")
weight = float(ask_weight) * float(0.453592)
print("Your weight in Kg's is: " + str(weight))

course = "Python Course for beginners"
print(course)

email = '''
Hi John,
Here is our first email to you,
Thank you, The support team.
'''
print(email)

course = 'Python Course for beginners'
print(course[0])
print(course[-1]) #Prints from backwards(s)
print(course[0:3]) #This prints from index 0 to index 3 but excludes the character at index 3(pyt)
print(course[0:]) #prints all characters in the string(Python Course for beginners)
print(course[1:]) #Prints everything but excludes the first character
print(course[:5]) #Python removes the character at index 5

another = course[:]
print(another[:])

#Formatted Strings
first_name = "John"
last_name = "Smith"
message = first_name + " [" + last_name + "] is a coder"
print(message)

#Better way of doing this👆, Using a formatted string.
msg = f"{first_name} [{last_name}] is a coder"
print(msg)


#String Methods
course = "Python for beginners"
print(len(course)) #Counts number of characters in a particular string.

print(course.upper()) #Turns the string to uppercase. But does not modify it
print(course.lower()) #Turns the string to lowercase. But does not modify it
print(course.title()) #Converts the first characters of each word to Uppercase.

print(course.find("P")) #Prints the index for a specific character or word.
print(course.replace("beginners", "Absolute Beginners")) #Replaces words and characters with other words.

#Checking the existence of a character or a word.
print("Python" in course) #Boolean expression that returns true if word or character exists.

#Arithmetic Operations.
print(10 + 3)
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(10 ** 3)
print(10 * 3)
print(10 - 3)

x = 10
x = x + 3
print(x)

#Augmented assignment operators.
x += 3
print(x)
x -= 3

#Operator precedence.
x = 10 + 3 * 2 # This is not qual to 26 but 16 because * has more precedence than + in math
print(x)

'''
 Order of operation(Precedence)

1. Exponentiation 2 ** 3
2. multiplication or division
3. addition or subtraction

NOTE: Adding parenthesis changes the order of operation because python executes that code first.

'''

x = (2 + 3) * 10 - 3
print(x)

#Math Functions
x = 2.9
print(round(x)) # Rounds your number to the nearest whole number

print(abs(-2.9)) #(Absolute) Prints the positive version of a number even if it is a negative.

#If Statements
is_hot = True
is_cold = True


if is_hot:
    print("It's a hot day")
    print("Drink plenty of water")
elif is_cold:
    print("It's a cold day")
    print("Wear warm clothes")
else:
    print("It's a lovely day")
print("Enjoy your day!")

#House Selling
house_price = 1_000_000
buyer_credit_good = True
good_credit = (10 / 100) * house_price
bad_credit = (20 / 100) * house_price

if buyer_credit_good:
    print(f"You can put down ${good_credit}")
    print("Pleasure doing business, Enjoy")
else:
    print(f"You can put down ${bad_credit}")
    print("Pleasure doing business, Enjoy")
print(f"Total House Price: ${house_price}")