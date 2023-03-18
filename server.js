require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/accounts");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//connect to animus server
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected");
    app.listen(process.env.PORT, () => {
      console.log("app", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/accounts", accountRoutes);
