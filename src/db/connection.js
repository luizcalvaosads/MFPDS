import mongoose from "mongoose";

// "mongodb+srv://TESTBETA:TEST@testservermf.qlr5fzf.mongodb.net/?retryWrites=true&w=majority" production 

mongoose.connect(
  "mongodb+srv://TESTBETA:TEST@testservermf.qlr5fzf.mongodb.net/?retryWrites=true&w=majority"  
  )
  .then(() => console.log("> Database Connected!"))
  .catch(error => console.log(error));