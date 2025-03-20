# Programming Logic Exercises List

## Exercise 1: Sum of Numbers

Implement a web page containing 2 inputs and a button. Program the sum button to perform the sum of the numbers entered in the inputs and display the result on the page.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sum of Numbers</title>
    <script src="sum.js" defer></script>
</head>
<body>
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <button id="btnSum">Sum</button>
    <p id="result"></p>
</body>
</html>

## Exercise 2: Number Analysis

Create an application where the user can input N numbers. The application should then display the average, the largest number, and the smallest number entered.

Example:
Input: 10, 20, 5, 30, 1
Average: 13.2
Largest number: 30
Smallest number: 1

## Exercise 3: 

Algorithm Description
1. Input Collection
The algorithm reads the gender ('m' for male, 'f' for female).
It also reads the age of the person.

2. Classification by Age Group
If the age is less than 18, the person is classified as a minor.
If the age is between 18 and 60, the person is classified as an adult.
If the age is greater than 60, the person is classified as an elder.

3. Counting Individuals in Each Category
The algorithm maintains separate counters for each age group.
It also tracks how many males and females belong to each group.

4. Calculating Averages
The algorithm sums the ages for each category (minors, adults, elders) separately for men and women.
It then calculates the average age for each group by dividing the total sum by the number of individuals in that group.

Output Results
The algorithm outputs:

Total number of people in each age group (minors, adults, elders).
Total count and average age for:
Female minors
Male minors
Female adults
Male adults
Female elders
Male elders



