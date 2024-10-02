import Header from "../../ui/header/header";
import {AddTrainer} from "../../../lib/actions"


// const sampleTrainers = [
//   {
//     id: 1,
//     name: "Jane Doe",
//     trainingSubjects: ["React.js"],
//     location: "Stuttgart",
//     email: "jane.doe@example.com",
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     trainingSubjects: ["Node.js"],
//     location: "Stuttgart",
//     email: "john.smith@example.com",
//   },
// ];

export default function AddTrainerPage() {
  return (
    <div>
      <Header user="John Doe" onSignOut={() => {}} />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">ADD Trainers</h1>
        <form action={AddTrainer} className="grid grid-cols-2 gap-4 ">
            <input type="text" placeholder="Trainer_name" name="Trainer_name"   className="p-8 bg-slate-900  "  required />
            <input type="email" placeholder="email" name="email"  className="p-8 bg-slate-900  "  required />
            <input type="text" placeholder="location" name="location" className="p-8 bg-slate-900"  required />
            <input type="text" placeholder="training_subjects" name="training_subjects"  className="p-8 bg-slate-900" required />

            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 w-1/6" type="submit">
                      submit
            </button>
           
   
        </form>

         
      </main>
    </div>
  );
}

