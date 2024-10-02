

import Link from "next/link";
import Header from "../ui/header/header";
import {fetchCourses, fetchTrainers} from "../../lib/data"
import { format } from "date-fns"
import { AssignTrainer } from "@/lib/actions";

const sampleCourses = [
  {
    id: 1,
    name: "React.js Fundamentals",
    date: "2024-10-15",
    subject: "React.js",
    location: "Stuttgart",
    participants: 15,
    notes: "Introduction to React.js",
    price: 250,
    trainer: {
      name: "Jane Doe",
      trainingSubjects: ["React.js"],
      location: "Stuttgart",
      email: "jane.doe@example.com",
    },
  },
  {
    id: 2,
    name: "Node.js Basics",
    date: "2024-10-22",
    subject: "Node.js",
    location: "Stuttgart",
    participants: 10,
    notes: "Introduction to Node.js",
    price: 200,
    trainer: null,
  },
];

const sampleTrainers = [
  {
    id: 1,
    name: "Jane Doe",
    trainingSubjects: ["React.js"],
    location: "Stuttgart",
    email: "jane.doe@example.com",
  },
  {
    id: 2,
    name: "John Smith",
    trainingSubjects: ["Node.js"],
    location: "Stuttgart",
    email: "john.smith@example.com",
  },
];


const Courses = async () => {


  
  const courses = await fetchCourses()
  console.log(courses)

  const trainers = await fetchTrainers()
  console.log(trainers);
    return (
      
      <div>
      <Header user="John Doe" onSignOut={() => {}} />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Home PAGE</h1>
        <Link
            href="/homepage/add-course"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600  relative bottom-5"
            >
            Create Course
          </Link>

        <table className="min-w-full bg-gray-800 border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 border-b">Course Name</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Subject</th>
              <th className="py-3 px-4 border-b">Location</th>
              <th className="py-3 px-4 border-b">participants</th>
              <th className="py-3 px-4 border-b">price</th>
              <th className="py-3 px-4 border-b">trainer price</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="py-3 px-4 border-b">{course.course_name}</td>
                <td className="py-3 px-4 border-b">{format(new Date(course.date), 'MMMM dd, yyyy')}</td>
                <td className="py-3 px-4 border-b">{course.subjects}</td>
                <td className="py-3 px-4 border-b">{course.location}</td>
                <td className="py-3 px-4 border-b">{course.participants}</td>
                <td className="py-3 px-4 border-b">{course.price}</td>
                <td className="py-3 px-4 border-b">{course.trainer_price}</td>
                <td className="py-3 px-4 border-b">
                  
                  {course.trainer ? (
                    <div>
                      <div>
                        <strong>{course.trainer.name}</strong>
                      </div>
                      <div>{course.trainer.trainingSubjects.join(", ")}</div>
                      <div>{course.trainer.email}</div>
                    </div>
                  ) : (
                    <span>No trainer assigned</span>
                  )} 
                </td>
                <td className="py-3 px-4 border-b flex space-x-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                    Delete
                  </button>
                  {course.trainer ? (
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">
                      Remove Trainer
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <select className="border bg-gray-800 border-gray-300 px-4 py-2 rounded-lg shadow-md"
                       
                      >
                        <option value="">Select Trainer</option>
                        {trainers.map((trainer) => (
                          <option key={trainer.id} value={trainer.id}>
                            {trainer.Trainer_name}
                          </option>
                        ))}
                      </select>
                        <button  onClick={async () => {
                          AssignTrainer()
                        }} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                        Assign Trainer
                      </button>
                      
                      
                    </div>
                  )}
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </main>
    </div>
  );
}
export default Courses