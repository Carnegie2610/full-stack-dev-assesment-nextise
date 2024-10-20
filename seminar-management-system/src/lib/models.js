import mongoose from "mongoose"
  
const courseSchema = new mongoose.Schema 
({
    course_name: {
        type: String,
        required: true,
        unique: true,    
    },
    date: {
        type: Date,
        required: true,    
    },
    subjects: {
        type: String,
        required: true,    
    },
    location: {
        type: String,
        required: true,    
    },
    participants: {
        type: Number,
        required: false,    
    },
    notes: {
        type: String,
    },
    price: {
        type: Number,
        min:0
    },
    trainer_price: {
        type: Number,
        min:0 
    },
    
   
}, {timestamps:true})


const TrainerSchema = new mongoose.Schema 
({
    Trainer_name: {
        type: String,
        required: true,
        unique: true,    
    },
    training_subjects: {
        type: [String],
        required: true,    
    },
    location: {
        type: String,
        required: true,    
    },
    email: {
        type: String,
        required: true,    
    },
   
}, {timestamps:true})

const UserSchema = new mongoose.Schema
({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps:true})

export const User = mongoose.models.user || mongoose.model("user",UserSchema)
export const Course = mongoose.models.course || mongoose.model("course",courseSchema)
export const Trainer = mongoose.models.trainer || mongoose.model("trainer",TrainerSchema)