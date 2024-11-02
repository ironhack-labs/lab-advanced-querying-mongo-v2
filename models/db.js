// db.js
const mongoose = require('mongoose');

// MongoDB Connection URI
const MONGODB_URI = "mongodb://127.0.0.1:27017/companiesDB";

// Connecting to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// Exporting the mongoose connection to use in other files
module.exports = mongoose;
