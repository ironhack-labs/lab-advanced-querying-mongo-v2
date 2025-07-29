![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

query: 
{name: "Babelgum"}

Project: {name: 1}

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

query:
{number_of_employees: {$gt: 5000}}

Limit: 20

sort: {number_of_employees: -1} (from higher to lower number of employees)

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

query: {founded_year: {$in: [2000, 2001, 2002, 2003, 2004, 2005]}}

project: {name: 1, founded_year: 1}



<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

field ipo is = null impossible to retrieve the valu amount

<br>

**5. All the companies that don't include the `partners` field.**

{partners: {$exists: false}}

<br>

**6. All the companies that have a null value on the `category_code` field.**

{category_code: null}

<br>

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

{ number_of_employees: { $gt: 5000 } }

{ number_of_employees: -1 }

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

{founded_month: {$in: [7, 8, 9, 10, 11, 12]}}

limit: 1000

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->

<br>
