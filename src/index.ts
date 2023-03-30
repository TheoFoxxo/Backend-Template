require("dotenv").config();

const express = require("express");
const serverapp = express();
const port = process.env.PORT || 3000;

import { us } from "./routes/users";

serverapp.get("/", (req: any, res: any) => {
  res.status(200).json(us);
});

serverapp.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});