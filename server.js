const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/api/index")(app);

// Starts the server
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });