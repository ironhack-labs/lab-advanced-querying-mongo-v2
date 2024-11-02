// app.js or server.js
const mongoose = require('./db'); // Connect to MongoDB
const Company = require('./Company'); // Import the Company model

// Example: Creating a new company entry
const newCompany = new Company({
  name: 'Tech Innovations',
  founded_year: 2021,
  employees: 150,
  valuation: 50000000,
  category_code: 'software',
  ipo: {
    date: new Date('2022-06-15'),
    price: 15.5
  },
  partners: ['Partner A', 'Partner B'],
  acquisition: {
    price: 10000000,
    currency: 'USD'
  }
});

// Save the new company to the database
newCompany
  .save()
  .then(() => console.log('Company saved successfully!'))
  .catch((err) => console.error('Error saving company:', err));
