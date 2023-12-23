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
    "mongodb+srv://andy519kim:Gq5dO07gfueI4FxI@main.w7qlcaz.mongodb.net/"
  );
  console.log("Successfully connected to MongoDB");
}

// import all database models
const { User, Party, Unit, Crib } = require("./database");

// ---------------------------- USER SCEHMA SECTION ----------------------------

app.post("/newmember", async (req, res) => {
  // create new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    parties: req.body.parties,
  });

  // save new user
  await newUser.save();
  res.json(newUser);
});

// ---------------------------- PARTY SCEHMA SECTION ----------------------------

app.post("/newparty", async (req, res) => {
  // create new user
  const newParty = new Party({
    name: req.body.name,
    description: req.body.description,
    current: 1,
    crib: req.body.crib,
    members: req.body.members,
  });

  // save new user
  await newParty.save();
  res.json(newParty);
});

app.get("/member/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundMember = await Member.findById(id);

    if (!foundMember) {
      return res.status(404).send("Member not found");
    }

    return res.send(foundMember);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// ---------------------------- UNIT SCEHMA SECTION ----------------------------

app.post("/newunit", async (req, res) => {
  // create new user
  const newUnit = new Unit({
    name: req.body.name,
    rent: req.body.rent,
    deposit: req.body.deposit,
    bed: req.body.bed,
    bath: req.body.bath,
    sqft: req.body.sqft,
    highlights: req.body.highlights,
    kitchen: req.body.kitchen,
    details: req.body.details,
    crib: req.body.crib,
  });

  // save new user
  await newUnit.save();
  res.json(newUnit);
});

// ---------------------------- CRIB SCEHMA SECTION ----------------------------

app.post("/newcrib", async (req, res) => {
  // create new user
  const newCrib = new Crib({
    name: req.body.name,
    address: req.body.email,
    units: req.body.units,
    parties: [],
  });

  // save new user
  await newCrib.save();
  res.json(newCrib);
});

// ---------------------------- END SCHEMA ----------------------------

app.listen(4000, () => {
  console.log("Listening on port 4000");
  // http://localhost:4000/
});
