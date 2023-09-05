const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("db connected");
  }
});

// user functions

const getAllUsers = function (req, res) {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addUser = function (req, res) {
  const query =
    "INSERT INTO user (fullName, email, password, phoneNumber, address, sexe, image) values (?,?,?,?,?,?,?)";
  const { fullName, email, password, phoneNumber, address, sexe, image } =
    req.body;

  connection.query(
    query,
    [fullName, email, password, phoneNumber, address, sexe, image],
    (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "user added successfully" });
    }
  );
};

const updateUser = function (req, res) {
  const userId = req.params.id;
  const { fullName, email, password, phoneNumber, address, sexe, image } =
    req.body;
  const query =
    "UPDATE user SET fullName=?, email=?, password=?, phoneNumber=?, address=?, sexe=?, image=?  WHERE id=?";

  connection.query(
    query,
    [fullName, email, password, phoneNumber, address, sexe, image, userId],
    (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json(results);
    }
  );
};

const deleteUser = function (req, res) {
  const userId = req.params.id;
  const query = "DELETE FROM user WHERE id=?";

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// hotel functions

const getAllHotels = function (req, res) {
  const query = "SELECT * FROM hotel";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addHotel = function (req, res) {
  const query =
    "INSERT INTO hotel (name, address, description, phoneNumber, email, stars, rooms, image) values (?,?,?,?,?,?,?,?)";
  const {
    name,
    address,
    description,
    phoneNumber,
    email,
    stars,
    rooms,
    image,
  } = req.body;

  connection.query(
    query,
    [name, address, description, phoneNumber, email, stars, rooms, image],
    (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "hotel added successfully" });
    }
  );
};

const updateHotel = function (req, res) {
  const hotelId = req.params.id;
  const {
    name,
    address,
    description,
    phoneNumber,
    email,
    stars,
    rooms,
    image,
  } = req.body;
  const query =
    "UPDATE hotel SET name=?, address=?, description=?, phoneNumber=?, email=?, stars=?, rooms=?, image=?  WHERE id=?";

  connection.query(
    query,
    [
      name,
      address,
      description,
      phoneNumber,
      email,
      stars,
      rooms,
      image,
      hotelId,
    ],
    (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json(results);
    }
  );
};

const deleteHotel = function (req, res) {
  const hotelId = req.params.id;
  const query = "DELETE FROM hotel WHERE id=?";

  connection.query(query, [hotelId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// shop functions

const getAllProducts = function (req, res) {
  const query = "SELECT * FROM shop";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addProduct = function (req, res) {
  const query = "INSERT INTO shop (name, image, price) values (?,?,?)";
  const { name, image, price } = req.body;

  connection.query(query, [name, image, price], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ success: true, message: "shop added successfully" });
  });
};

const updateProduct = function (req, res) {
  const productId = req.params.id;
  const { name, image, price } = req.body;
  const query = "UPDATE shop SET name=?, image=?, price=?  WHERE id=?";

  connection.query(query, [name, image, price, productId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const deleteProduct = function (req, res) {
  const productId = req.params.id;
  const query = "DELETE FROM shop WHERE id=?";

  connection.query(query, [productId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// nightlife functions

const getAllNightLifes = function (req, res) {
  const query = "SELECT * FROM nightlife";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addNightLife = function (req, res) {
  const query = "INSERT INTO nightlife (name, image) values (?,?)";
  const { name, image } = req.body;

  connection.query(query, [name, image], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ success: true, message: "shop added successfully" });
  });
};

const updateNightLife = function (req, res) {
  const nightLifeId = req.params.id;
  const { name, image } = req.body;
  const query = "UPDATE nightlife SET name=?, image=?  WHERE id=?";

  connection.query(query, [name, image, nightLifeId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const deleteNightLife = function (req, res) {
  const nightLifeId = req.params.id;
  const query = "DELETE FROM nightlife WHERE id=?";

  connection.query(query, [nightLifeId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// nightlife functions

const getAllMuseums = function (req, res) {
  const query = "SELECT * FROM museums";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addMuseum = function (req, res) {
  const query = "INSERT INTO museums (name, image) values (?,?)";
  const { name, image } = req.body;

  connection.query(query, [name, image], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ success: true, message: "shop added successfully" });
  });
};

const updateMuseum = function (req, res) {
  const museumId = req.params.id;
  const { name, image } = req.body;
  const query = "UPDATE museums SET name=?, image=?  WHERE id=?";

  connection.query(query, [name, image, museumId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const deleteMuseum = function (req, res) {
  const museumId = req.params.id;
  const query = "DELETE FROM museums WHERE id=?";

  connection.query(query, [museumId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// nightlife functions

const getAllCitys = function (req, res) {
  const query = "SELECT * FROM city";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addCity = function (req, res) {
  const query = "INSERT INTO city (name, image, country) values (?,?,?)";
  const { name, image, country } = req.body;

  connection.query(query, [name, image, country], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ success: true, message: "shop added successfully" });
  });
};

const updateCity = function (req, res) {
  const cityId = req.params.id;
  const { name, image, country } = req.body;
  const query = "UPDATE city SET name=?, image=?, country=?  WHERE id=?";

  connection.query(query, [name, image, country, cityId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

const deleteCity = function (req, res) {
  const cityId = req.params.id;
  const query = "DELETE FROM city WHERE id=?";

  connection.query(query, [cityId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getAllHotels,
  addHotel,
  updateHotel,
  deleteHotel,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllNightLifes,
  addNightLife,
  updateNightLife,
  deleteNightLife,
  getAllMuseums,
  addMuseum,
  updateMuseum,
  deleteMuseum,
  getAllCitys,
  addCity,
  updateCity,
  deleteCity,
};
