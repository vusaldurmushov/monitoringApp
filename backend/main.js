import express from "express";

const app = express();



app.get("/", (req, res) => {
  res.send("Get services is Ok!");
});


app.post("/createUser", (req, res)=>{

})

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
