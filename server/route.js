const express = require("express");
const router = express.Router();

// import all database models
const { User, Party, Unit, Crib } = require("./database");

// ---------------------------- USER SECTION ----------------------------

router.post("/newUser", async (req, res) => {
  // create new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status,
  });

  // save new user
  await newUser.save();
  res.json(newUser);
}); // add try catch?

router.get("/users", async (req, res) => {
  try {
    const foundUsers = await User.find();

    if (foundUsers.length === 0) {
      return res.status(404).send("Users not found");
    }

    return res.send(foundUsers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/user/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send("User not found");
    }

    return res.send(foundUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/deleteUser/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundUser = await User.findByIdAndDelete(id);

    if (!foundUser) {
      return res.status(404).send("User not found");
    }

    return res.send(foundUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}); // use delete instead of get

// ---------------------------- PARTY SECTION ----------------------------

router.post("/newParty", async (req, res) => {
  // create new party
  const newParty = new Party({
    name: req.body.name,
    description: req.body.description,
    current: 1,
    crib: req.body.crib,
    users: req.body.users,
  });

  // save new party
  await newParty.save();
  res.json(newParty);
});

router.get("/parties", async (req, res) => {
  try {
    const foundParties = await Party.find();

    if (foundParties.length === 0) {
      return res.status(404).send("Parties not found");
    }

    return res.send(foundParties);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/party/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundParty = await Party.findById(id);

    if (!foundParty) {
      return res.status(404).send("Party not found");
    }

    return res.send(foundParty);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/deleteParty/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundParty = await Party.findByIdAndDelete(id);

    if (!foundParty) {
      return res.status(404).send("Party not found");
    }

    return res.send(foundParty);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// ---------------------------- UNIT SECTION ----------------------------

router.post("/newUnit", async (req, res) => {
  // create new unit
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

  // save new unit
  await newUnit.save();
  res.json(newUnit);
});

router.get("/units", async (req, res) => {
  try {
    const foundUnits = await Unit.find();

    if (foundUnits.length === 0) {
      return res.status(404).send("Units not found");
    }

    return res.send(foundUnits);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/unit/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundUnit = await Unit.findById(id);

    if (!foundUnit) {
      return res.status(404).send("Unit not found");
    }

    return res.send(foundUnit);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/deleteUnit/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundUnit = await Unit.findByIdAndDelete(id);

    if (!foundUnit) {
      return res.status(404).send("Unit not found");
    }

    return res.send(foundUnit);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// ---------------------------- CRIB SECTION ----------------------------

router.post("/newCrib", async (req, res) => {
  // create new crib
  const newCrib = new Crib({
    name: req.body.name,
    address: req.body.address,
    units: req.body.units,
    parties: [],
  });

  // save new crib
  await newCrib.save();
  res.json(newCrib);
});

router.get("/cribs", async (req, res) => {
  try {
    const foundCribs = await Crib.find();

    if (foundCribs.length === 0) {
      return res.status(404).send("Cribs not found");
    }

    return res.send(foundCribs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/crib/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundCrib = await Crib.findById(id);

    if (!foundCrib) {
      return res.status(404).send("Crib not found");
    }

    return res.send(foundCrib);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/deleteCrib/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const foundCrib = await Crib.findByIdAndDelete(id);

    if (!foundCrib) {
      return res.status(404).send("Crib not found");
    }

    return res.send(foundCrib);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
