import { Course, Trainer, User } from "./models";
import { conectToDB } from "../lib/utils";

export const fetchCourses = async () => {
	conectToDB();
	try {
		const courses = await Course.find();
		return courses;
	} catch (error) {
		console.log(error);
		throw new Error("failed to fetch courses");
	}
};
export const fetchTrainers = async () => {
	conectToDB();
	try {
		const trainers = await Trainer.find();
		return trainers;
	} catch (error) {
		console.log(error);
		throw new Error("failed to fetch courses");
	}
};

export const fetchUsers = async () => {
	conectToDB();
	try {
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("failed to users courses");
	}
};
