const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//load env
dotenv.config({ path: "./config.env" });

const app = express();

//morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Profile Route

app.use("/api/v1/profile", require("./routes/profile"));

//Handle Production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(__dirname + "/public/"));
  //handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
});
