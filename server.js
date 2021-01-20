const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Here's my middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

// Add routes, both for API and videw
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGDB_URI || "mongdb://localhost/myNotes", { useNewUrlParser: true, useUnifiedTopology: true, 'useFindAndModify': false })

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})