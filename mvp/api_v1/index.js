const express = require("express");
const  mongoose  = require("mongoose");
const app = express();

const connectDB = require('./Config/database')


// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));


app.get("/", (req, res) => {
  res.send("API started v1");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
