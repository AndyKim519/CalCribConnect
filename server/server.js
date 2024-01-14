const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// catches error
connect().catch((err) => console.log(err));

// connect to MongoDB
async function connect() {
  await mongoose.connect(
    "mongodb+srv://andy519kim:Gq5dO07gfueI4FxI@main.w7qlcaz.mongodb.net/" // berkeley email account
  );
  console.log("Successfully connected to MongoDB");
}

// import all database models
const { User, Party, Unit, Crib } = require("./database");

const Router = require("./route");
app.use("/router", Router);

app.listen(4000, () => {
  console.log("Listening on port 4000");
  // http://localhost:4000/
});
