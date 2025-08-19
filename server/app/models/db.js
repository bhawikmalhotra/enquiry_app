import mongoose from "mongoose";    

const mydbschema = new mongoose.Schema({
    name: { type: String, required: true },
    reg_no: { type: Number, required: true, unique: true },
    email: { type: String, required: true },        
    phone: { type: Number, required: true },
    message: { type: String, required: true },
});

const mydb = mongoose.model("mydb", mydbschema);
export default mydb;
