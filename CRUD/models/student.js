import mongoose from "mongoose";

// create schema

const StudentSchema = new mongoose.Schema ({
    name:{type:String, required: true, trim: true},
    age:{type:Number, required: true, min:18, max:60},
    fees:{type:mongoose.Decimal128, required: true, validate:(value)=> value>=5000.00}
})

 const studentmodle = mongoose.model("student", StudentSchema)

    export default studentmodle