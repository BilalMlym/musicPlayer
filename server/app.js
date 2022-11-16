const express = require("express")
const app = express()

const cors = require("cors")

app.get("/", (req, res) => {
    return res.json("hi there...")
})

app.listen(4000, () => console.log("listening from port:4000"))