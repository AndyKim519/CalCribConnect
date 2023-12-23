const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  status: Boolean, // does this user have a party?

  // if user is in party:
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
  },

  // if user is NOT in party:
  savedParties: [
    // list of saved parties
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
    },
  ],
  savedUnits: [
    // list of saved units
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
    },
  ],
});

const partySchema = new mongoose.Schema({
  // add reviews and ratings later
  name: String,
  description: String,
  current: Number, // current number of people in the party
  members: [
    // list of members in the party
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  status: Boolean, // does this party have a crib?

  // if the party has selected a crib
  crib: {
    // the crib that the party is planning to live in
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crib",
  },

  // if the party has NOT selected a crib
  interestedCrib: [
    {
      // the cribs that the party is interested in
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crib",
    },
  ],
});

const unitSchema = new mongoose.Schema({
  // add reviews and ratings later
  name: String,
  rent: Number,
  deposit: Number,
  bed: Number,
  bath: Number,
  sqft: Number,
  highlights: [String],
  kitchen: [String],
  details: [String],
  crib: {
    // the crib that the unit is apart of
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crib",
  },
  tours: [
    {
      // parties that are touring this unit
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
    },
  ],
});

const cribSchema = new mongoose.Schema({
  // add reviews and ratings later
  name: String,
  address: {},
  reviews: [
    {
      author: mongoose.Schema.Types.ObjectId,
      content: String,
    },
  ],

  units: [
    {
      // units that are in this crib
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
    },
  ],

  parites: [
    {
      // parties that are interested in this crib
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
    },
  ],
});

// create the models from the schema created above
const User = mongoose.model("User", userSchema);
const Party = mongoose.model("Party", partySchema);
const Unit = mongoose.model("Unit", unitSchema);
const Crib = mongoose.model("Crib", cribSchema);

module.export = { User, Party, Unit, Crib };
