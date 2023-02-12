const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const users = require('./Routes/Users');
const comments = require('./Routes/Comments');
const connectDB = require('./config/database')


// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

// Enable CORS for all the requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", (req, res) => {
  res.send("API started for v1");
});

//defined routes
app.use('/users', users );
app.use('/comments', comments );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
