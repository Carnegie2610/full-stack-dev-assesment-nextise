import Header from "../../ui/header/header";
import {AddCourse} from "../../../lib/actions"
// const sampleCourses = [
//   {
//     id: 1,
//     name: "React.js Fundamentals",
//     date: "2024-10-15",
//     subject: "React.js",
//     location: "Stuttgart",
//     participants: 15,
//     notes: "Introduction to React.js",
//     price: 250,
//     trainer: {
//       name: "Jane Doe",
//       trainingSubjects: ["React.js"],
//       location: "Stuttgart",
//       email: "jane.doe@example.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Node.js Basics",
//     date: "2024-10-22",
//     subject: "Node.js",
//     location: "Stuttgart",
//     participants: 10,
//     notes: "Introduction to Node.js",
//     price: 200,
//     trainer: null,
//   },
// ];



export default function AddCoursePage() {
    
  return (
    <div>
      <Header user="John Doe" onSignOut={() => {}} />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Add Course</h1>
        <form action={AddCourse} className="grid grid-cols-2 gap-4 ">
            <input type="text" placeholder="course name" name="course_name"   className="p-8 bg-slate-900  "  required />
            <input type="date" placeholder="date" name="date"  className="p-8 bg-slate-900  "  required />
            <input type="text" placeholder="subject" name="subjects" className="p-8 bg-slate-900"  required />
            <input type="text" placeholder="location" name="location"  className="p-8 bg-slate-900" required />
            <input type="number" placeholder="participants" name="participants" className="p-8 bg-slate-900"  required />
            <input type="text" placeholder="notes" name="notes" className="p-8 bg-slate-900"  required />
            <input type="number" placeholder="price" name="price"  className="p-8 bg-slate-900" required />
            <input type="number" placeholder="trainer_price" name="trainer_price"  className="p-8 bg-slate-900" required />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 w-1/6" type="submit">
                      submit
            </button>
        
        </form>

         
      </main>
    </div>
  );
}

