import { revalidatePath } from "next/cache";
import { Course, Trainer } from "./models";
import { conectToDB } from "./utils";
import nodemailer from "nodemailer";
import { signIn } from "../auth.ts";

export const AddCourse = async (formData) => {
	"use server";
	const {
		course_name,
		date,
		subjects,
		participants,
		notes,
		price,
		trainer_price,

		location,
	} = Object.fromEntries(formData);

	try {
		conectToDB();
		const newCourse = new Course({
			course_name,
			date,
			subjects,
			location,
			participants,
			notes,
			price,
			trainer_price,
		});
		await newCourse.save();
	} catch (error) {
		throw new Error("Failed to create a course");
	}
};

export const AddTrainer = async (formInfo) => {
	"use server";
	const { Trainer_name, training_subjects, location, email } =
		Object.fromEntries(formInfo);

	try {
		conectToDB();
		const newTrainer = new Trainer({
			Trainer_name,
			training_subjects,
			location,
			email,
		});
		await newTrainer.save();
	} catch (error) {
		throw new Error("Failed to create Trainer");
	}
};

const sendEmailNotification = async (trainerEmail, courseDetails) => {
	const transporter = nodemailer.createTransport({
		host: "localhost", // host for sending email
		port: 1025, // Mailhog SMTP port
		secure: false, // No SSL for local development
	});

	const mailOptions = {
		from: '"Course Management" <no-reply@seminarmanagement.com>', // Sender address
		to: "john.doe@example.com", // Trainer's email address
		subject: `You have been assigned to the course: ${courseDetails.course_name}`, // Subject line
		text: `Hello ${courseDetails.trainerName},\n\nYou have been successfully assigned to the course: ${courseDetails.course_name}.\nBest regards,\nCourse Management Team`, // Plain text body
		html: `<h1>Hello ${courseDetails.trainerName},</h1>
			 <p>You have been successfully assigned to the course: <strong>${courseDetails.name}</strong>.</p>
			 <p>Course Description: ${courseDetails.description}</p>
			 <p>Start Date: ${courseDetails.startDate}</p>
			 <p>Best regards,<br>Course Management Team</p>`, // HTML body
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log("Email sent to trainer successfully");
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

export const AssignTrainer = async (formData) => {
	"use server";

	const { courseid, trainerid } = Object.fromEntries(formData);
	console.log("Course ID:", courseid);
	console.log("Trainer ID:", trainerid);

	try {
		conectToDB();

		const course = await Course.findById(courseid);

		const trainer = await Trainer.findById(trainerid);

		if (!course || !trainer) {
			console.log("either the course id or the trainer could not be found");
		} else {
			course.trainer = trainer;
			await course.save();
			console.log("trainer saved successfully");

			const CourseDetails = {
				course_name: course.course_name,
				trainerName: trainer.Trainer_name,
			};

			await sendEmailNotification(trainer.email, CourseDetails);
		}
	} catch (error) {
		console.log("error assigning trainer", error);
	}
	revalidatePath("/homepage");
};

export const authenticate = async (formData) => {
	"use server";
	const { username, password } = Object.fromEntries(formData);
	try {
		await signIn("credentials", { username, password });
	} catch (err) {
		console.log(err);
		throw err;
	}
};
