const express = require("express")
const app = express()

require("dotenv/config");

const cors = require("cors")
const {default : mongoose} = require("mongoose")


app.get("/", (req, res) => {
    return res.json("hi there...")
})

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });