const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
   email : {
       "type" : String
    //    "required" : true,
   },
   password : {
       "type" : String
    //    "required" : true
   },
   "role" : [String]
})


const saveUsers = mongoose.Schema({
   "email" : {
      "type" : String,
      "required" : true
},
   "firstName" : {
      "type" : String
   },

   "lastName" : {
      "type" : String
   },
 "password" : {
  "type" : String
},
"token" : {
  "type" : String
}
}

   )



const user = new mongoose.model('user', userSchema);

const saveUser = new mongoose.model('saveUser', saveUsers)

module.exports = user;

module.exports = saveUser;



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/myFirstDB";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });