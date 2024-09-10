import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name should not be empty'],
    },
    email : {
        type : String,
        required : [true, 'Email should not be empty'],
    },
    mobile : {
        type : String,
        required : [true, 'Mobile Number should not be empty'],
    },
    date : {
        type : String,
        required : [true]
    }
    
});

const Enquiry = mongoose.models.enquiry || mongoose.model('enquiry', enquirySchema);
export default Enquiry;