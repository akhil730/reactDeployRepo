const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routes/Routes")
const app = express();

app.use(express.json())
app.use(Router);




const CONNECTION_URL =
  "mongodb+srv://akhilg1:akhilg123@cluster0.mgjqs.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`port is listening on: ${PORT}`))
  )
  .catch((error) => console.log(error.message));



app.get("/", (req, res) => {
    res.send("Hello")
    console.log("Hello world");

})

// const PORT = process.env.PORT || 5000;


// let CONNECTION_URL = `mongodb+srv://akhilg1:akhilg123@cluster0.mgjqs.mongodb.net/?retryWrites=true&w=majority`

// // MongoClient.connect(
// //   connectionString,
// //   { useNewUrlParser: true, useUnifiedTopology: true },
// //   function (err, client) {
// //     if(err) throw new err;
// //     db = client.db()
// //     app.listen(5000)
// //   }
// // )


// // const CONNECTION_URL =
// //   "mongodb://localhost:27017/myFirstDB";


// //   //const url = "mongodb://localhost:27017/myFirstDB"
// // const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//    app.listen(PORT, () => console.log(`port is listening on: ${PORT}`))
//   .catch((error) => console.log(error.message))
//   )

// app.get("/", (req, res) => {
//     res.send("HEllo")
//     console.log("Hello world");

// })




