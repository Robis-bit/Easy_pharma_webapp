const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:String,
    Id:String,
   profilePhoto: String,
    firstName: String,
    lastName: String,
    lastVisited: {
        type: Date,
        default: new Date(),
      },
      provider:String,

});

const User=mongoose.model('user',userSchema)

module.exports=User