import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username should not be empty'],
        unique : true
    },
    email : {
        type : String,
        required : [true, 'Email should not be empty'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'Password should not be empty'],
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date

});

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;