import {Course,Trainer} from "./models"
import {conectToDB} from "../lib/utils"


export const fetchCourses = async () => {
    conectToDB()
    try {
        const courses = await  Course.find()
        return courses
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch courses")
    } 
     
}
export const fetchTrainers = async () => {
    conectToDB()
    try {
        const trainers = await  Trainer.find()
        return trainers
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch courses")
    } 
     
}