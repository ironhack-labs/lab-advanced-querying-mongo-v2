// Company.js
const mongoose = require('./db'); // Import the mongoose connection
const Schema = mongoose.Schema;

// Define the Company Schema
const companySchema = new Schema({
  name: { type: String, required: true },
  founded_year: { type: Number },
  employees: { type: Number },
  valuation: { type: Number },
  category_code: { type: String },
  ipo: {
    date: { type: Date },
    price: { type: Number }
  },
  partners: { type: [String] },
  acquisition: {
    price: { type: Number },
    currency: { type: String }
  }
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

// Export the model
module.exports = Company;
