![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->

query: {name:"Babelgum"}
project: {name: 1, _id: 0} // to retrieve only name and not the full object
sort: none 
skip: none
limit: none

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

<!-- Your Query Goes Here -->

query: {number_of_employees:{$gt:5000}}
project: none
sort: none 
skip: none
limit: 20

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

<!-- Your Query Goes Here -->

query: {founded_year:{$gte:2000, $lte:2005}} //  between 2000 and 2005, including years 
project: {name:1, founded_year:1, _id: 0 } // Retrieve only name and founded_year
sort: none 
skip: none
limit: none

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

<!-- Your Query Goes Here -->

query: {$and:[{"ipo.valuation_amount":{$gt:100000000}},{founded_year:{$lt:2010}}]}
project: {name:1, ipo:1, _id: 0}
sort: none 
skip: none
limit: none

<br>

**5. All the companies that don't include the `partners` field.**

<!-- Your Query Goes Here -->

query: {partners:{$exists:false}} // don't include the partners
project: none 
sort: none 
skip: none
limit: none

<br>

**6. All the companies that have a null value on the `category_code` field.**

<!-- Your Query Goes Here -->

query: {category_code:{$type: "null"}} // value is actually null, not just missing
project: none
sort: none 
skip: none
limit: none

<br>

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->

query: none
project: none
sort:  {"ipo.valuation_amount":-1} descending order.
skip: none
limit: none

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

<!-- Your Query Goes Here -->

query: none
project: none
sort: {number_of_employees:-1} descending order (biggest to smallest)
skip: none
limit: 10

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

<!-- Your Query Goes Here -->

query: {founded_month:{$gte:7 , $lte:12 }}
project: none
sort: none 
skip: none
limit: 1000

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->

query: {founded_day:{$lte:7}}
project: none
sort: {"acquisition.price_amount":-1}
skip: none
limit: 10

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->
query:{ "acquisition.acquired_year": { $gt: 2010 } }
project: { name: 1, acquisition: 1, _id: 0 }
sort: { "acquisition.price_amount": -1 }
skip: none
limit: none

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->

query: none
project: { name: 1, founded_year: 1, _id: 0 }
sort: { founded_year: 1 }
skip: none
limit: none

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->

query: {$and: [{ category_code: "web" }, { number_of_employees: { $gt: 4000 } }]}
project: none
sort: { number_of_employees: 1 }
skip: none
limit: none

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->

query: {$and: [{"acquisition.price_amount":{$gt:10000000}}, {"acquisition.price_currency_code":"EUR"}]}
project: none 
sort: none 
skip: none
limit: none

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->

query: {$and:[{founded_year:{$gte:2000, $lte:2010}},{"acquisition.acquired_year":{$gte:2011}}]}
project: none
sort: none 
skip: none
limit: none

<br>
