#📝 Assignment Tasks
#1️⃣ Variables & Data Types
name = "Jonathan Saint"
age = 17
height_meters = 1.25
is_student = True

print(name)
print(age)
print(height_meters)
print(is_student)


#2️⃣ Arithmetic Operators
x = 5
y = 7

print(x + y)
print(x - y)
print(x / y)
print(x * y)
print(x % y)

#3️⃣ String Operations
first_name = "John"
last_name = "Smith"

print(f"{first_name} {last_name}")


#4️⃣ Comparison Operators
a = 3
b = 4

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)


#5️⃣ Conditional Statements
score = 85

if score >= 80:
    print("Excellent")
elif score >= 50:
    print("Pass")
else :
    print("Fail")



#6️⃣ Loops
for number in range(1, 11):
    print(number)


while number >= 1:
    print(number)
    number -= 1


#7️⃣ Lists
favorite_fruits = ["apple", "pineapple", "berry", "banana", "pear"]

print(favorite_fruits)
print(favorite_fruits[0], favorite_fruits[4])

#8️⃣ Dictionaries
person = {
    "name": "Jonathan",
    "age": 17,
    "is_student": True
}

print(person["name"])
print(person["age"])
print(person["is_student"])

#9️⃣ User Input
user = input("What is your name? ")
user_age = input("What is your age? ")
print(f"Hello {user}, you are {age} years old.")

nums = [23, 45, 55, 778, 97, 847, 857, 38, 365, 28, 73, 4837]

#🔟 Bonus Challenge (Optional)
for nums in nums:
    if nums % 2 != 0:
        print(nums)


'''
✔ Runs without errors 
✔ Uses correct Python indentation 
✔ Contains comments explaining your logic 
✔ Uses meaningful variable names 
✔ Produces clear output
'''