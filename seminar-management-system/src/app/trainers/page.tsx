
import Header from "../ui/header/header";
import Link from "next/link";
import { fetchTrainers } from "@/lib/data";



const Trainers = async () => {

  const user = "John Doe"; // Replace with actual user logic

  const handleSignOut = () => {
    // Add sign-out logic here
    console.log("User signed out");
  };
  const trainers = await fetchTrainers()
  return (
    
    <div>
      <Header user={user} onSignOut={handleSignOut} />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Trainers</h1>
        <Link
            href="/trainers/add-trainer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 relative bottom-3"
        >
                    Create Trainers
        </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="w-full bg-gray- border-b">
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Trainer Name
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Subjects
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Email
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer.id} className="border-b">
                  <td className="py-3 px-4">{trainer.Trainer_name}</td>
                  <td className="py-3 px-4">
                  {Array.isArray(trainer.training_subjects) ? trainer.training_subjects.toString() : "N/A"}
                  </td>
                  <td className="py-3 px-4">{trainer.location}</td>
                  <td className="py-3 px-4">
                    <a
                      href={`mailto:${trainer.email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {trainer.email}
                    </a>
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Trainers