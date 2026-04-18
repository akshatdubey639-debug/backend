import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const Schema =mongoose.Schema
const userSchema=new Schema({

    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        index:true


    },

    email:{
         type:String,
         required:true,
         trim:true,
         lowercase:true,
         unique:true

    },
    fullname:{
         type:String,
         required:true,
         trim:true,
         index:true
    },
    avatar:{
        type:String,// we will use here cloudnary url
        required:true
    },
    coverImage:{
        type:String
    },
    watchhistory:[{
        type:Schema.Types.ObjectId,
        ref:"video"
    }],
    password:{    
        type:String,
        required:true
    },
    refreshtoken:{
        type:String,

    },
   

  

}, {timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.method.ispasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password)  
}
userSchema.methods.generateAccessToken=function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname

     
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        EexpiresIn:process.env.ACCESS_TOKEN_EXPERY
    }
)
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign({
        _id:this._id,
        
        
},
  process.env.REFRESH_TOKEN_SECRET,
    {
        EexpiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const user= mongoose.model("user",userSchema)