const express = require("express");
const app = express();
const UserD = require("../models/user");

app.get("/users", async  (req, res) => {
    const getUsers = await UserD.find();
        try {
        res.status(200).json(getUsers);
    } catch (error) {
        res.status(501).send(error);
    }
})

 app.post("/postUser", async (req, res) => {
    const createUser = new UserD(req.body);
    console.log(createUser);
    try { 
     await res.setHeader("Content-Type", "application/json");
      res.status(201).json(createUser);
      createUser.save();  
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = app;