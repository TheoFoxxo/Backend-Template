require("dotenv").config();

const express = require("express");
const serverapp = express();
const port = process.env.PORT || 3000;

serverapp.get("/", (req, res) => {
  res.json({
    user: "Theodore",
    email: "admin@google.com",
    password: "1234567890",
  });
});

serverapp.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
