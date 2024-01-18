const express = require("express");
const mongoose = require("mongoose");
const trackerModel = require("./db/models/tracker");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://mariaimran787898:Maria123@cluster0.3ztda6b.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
  });

//   API ROUTES

app.post("/post", (req, res) => {
  trackerModel
    .create({
      description: req.body.description,
      amount: req.body.amount,
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/get", (req, res) => {
  trackerModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err, "get ni diya"));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  trackerModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(3003, () => {
  console.log("server is running");
});
