![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Advanced Querying MongoDB - Crunchbase Lab

## Iteration 2

### 1. All companies whose name matches 'Babelgum'. Retrieve only their name field.
query: { "name": "Babelgum" }
projection: { "name": 1, "_id": 0 }
sort: {}
skip: 0
limit: 0

---

### 2. All companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.
query: { "number_of_employees": { "$gt": 5000 } }
projection: {}
sort: { "number_of_employees": 1 }
skip: 0
limit: 20

---

### 3. All companies founded between 2000 and 2005, both years included. Retrieve only the name and founded_year fields.
query: { "founded_year": { "$gte": 2000, "$lte": 2005 } }
projection: { "name": 1, "founded_year": 1, "_id": 0 }
sort: {}
skip: 0
limit: 0

---

### 4. All companies that had a IPO Valuation Amount of more than 100,000,000 and were founded before 2010. Retrieve only the name and ipo fields.
query: { "ipo.valuation_amount": { "$gt": 100000000 }, "founded_year": { "$lt": 2010 } }
projection: { "name": 1, "ipo": 1, "_id": 0 }
sort: {}
skip: 0
limit: 0

---

### 5. All companies that don't include the partners field.
query: { "partners": { "$exists": false } }
projection: {}
sort: {}
skip: 0
limit: 0

---

### 6. All companies that have a null value in the category_code field.
query: { "category_code": null }
projection: {}
sort: {}
skip: 0
limit: 0

---

### 7. Order all the companies by their IPO price in descending order.
query: {}
projection: {}
sort: { "ipo.valuation_amount": -1 }
skip: 0
limit: 0

---

### 8. Retrieve the 10 companies with the most employees, order by the number of employees.
query: {}
projection: {}
sort: { "number_of_employees": -1 }
skip: 0
limit: 10

---

### 9. All companies founded in the second semester of the year (July to December). Limit your search to 1000 companies.
query: { "founded_month": { "$gte": 7, "$lte": 12 } }
projection: {}
sort: {}
skip: 0
limit: 1000

---

### 10. All companies founded on the first seven days of the month, including the seventh. Sort by acquisition price in descending order. Limit to 10 documents.
query: { "founded_day": { "$lte": 7 } }
projection: {}
sort: { "acquisition.price_amount": -1 }
skip: 0
limit: 10

---

## Iteration 3 (Bonus)

### 1. All companies acquired after 2010, order by acquisition amount, retrieve only name and acquisition.
query: { "acquisition.acquired_year": { "$gt": 2010 } }
projection: { "name": 1, "acquisition": 1, "_id": 0 }
sort: { "acquisition.price_amount": 1 }
skip: 0
limit: 0

---

### 2. Order companies by founded year, retrieve only name and founded year.
query: {}
projection: { "name": 1, "founded_year": 1, "_id": 0 }
sort: { "founded_year": 1 }
skip: 0
limit: 0

---

### 3. All companies in the 'web' category with more than 4000 employees. Sort by number of employees ascending.
query: { "category_code": "web", "number_of_employees": { "$gt": 4000 } }
projection: {}
sort: { "number_of_employees": 1 }
skip: 0
limit: 0

---

### 4. All companies whose acquisition amount is more than 10,000,000 and the currency is 'EUR'.
query: { "acquisition.price_amount": { "$gt": 10000000 }, "acquisition.price_currency_code": "EUR" }
projection: {}
sort: {}
skip: 0
limit: 0

---

### 5. All companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
query: { 
    "founded_year": { "$gte": 2000, "$lte": 2010 },
    "$or": [
        { "acquisition.acquired_year": { "$gte": 2011 } },
        { "acquisition.acquired_year": { "$exists": false } }
    ]
}
projection: {}
sort: {}
skip: 0
limit: 0
