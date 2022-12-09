const express = require("express")
const app = express()

require("dotenv/config");

const cors = require("cors")
const {default : mongoose} = require("mongoose")

app.use(cors({origin : true}))
app.use(express.json())


app.get("/", (req, res) => {
    return res.json("hi there...")
})

//user authentication route
const userRoute = require("./routes/auth")
app.use("/api/users", userRoute)

//album routes
const albumRoute = require("./routes/album")
app.use("/api/album", albumRoute)

//artist routes
const artistRoute = require("./routes/artist")
app.use("/api/artist", artistRoute)

//song routes 
const songRoute = require("./routes/song")
app.use("/api/song", songRoute)

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

app.listen(4000, () => console.log("listening to port 4000"));