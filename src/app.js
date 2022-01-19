const express = require("express");
const app = express();

//const jsx = require("jsx")
const htIncludes = require("./public/elements/include.html");

app.use(express.static("public"))

app.get("/", (req, res)=>{
  res.sendFile(__dirname, "public", "index.html");
  res.send(htIncludes)
})








app.listen(3000, ()=>{})