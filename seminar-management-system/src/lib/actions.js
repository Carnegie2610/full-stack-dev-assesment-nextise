import { Course,Trainer } from "./models"
import {conectToDB} from "./utils"

export const AddCourse = async (formData) =>{
    "use server"
    const {
        course_name,
        date,
        subjects,
        participants,
        notes,
        price,
        trainer_price,
        
        location,
        
    
    } = Object.fromEntries(formData)


        try {
            conectToDB()
            const newCourse = new Course({course_name,
                date,
                subjects,
                location,
                participants,
                notes,
                price,
                trainer_price
            })
                await newCourse.save();
                
            
            
        } catch (error) {
            throw new Error("Failed to create a course")
            
        }

        
}

export const AddTrainer = async (formInfo) => {

    "use server"
    const {
       
        Trainer_name,
        training_subjects,
        location,
        email
    
    } = Object.fromEntries(formInfo)

    try {
        conectToDB()
        const newTrainer = new Trainer({
                
            Trainer_name,
            training_subjects,
            location,
            email
        })
            await newTrainer.save();

    } catch (error) {
        throw new Error("Failed to create Trainer")
    }
}

export const AssignTrainer = async (courseId,trainerName) => {
    "use server"

    try {
       conectToDB()
       

       const course = await Course.findById(courseId)

       const trainer = await Trainer.findOne({ Trainer_name: trainerName })


       if (!course_ID || !trainer_NAME)
        {
            console.log("either the course id or the trainer could not be found" )
        }else{
            course.trainer = trainer
            await course.save()
            console.log("trainer saved successfully")
        }
    } catch (error) {
        console.log("error assigning trainer", error)
    }


}