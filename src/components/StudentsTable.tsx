import { Student } from "@/types/Student";

interface Props {
  students: Student[];
}

const StudentsTable = ({ students }: Props) => {
  const calculateAverage = (grade1: number, grade2: number) => {
    const result = (grade1 + grade2) / 2;
    return result.toFixed(1).toString();
  };
  return (
    <div className="container">
      <table className="w-full border border-gray-600 rounded-md overflow-hidden">
        <thead>
          <tr className="text-left border-b border-gray-600 bg-gray-800">
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Grade 1</th>
            <th className="p-3">Grade 2</th>
            <th className="p-3">Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="text-left text-gray-800 bg-gray-400 border-b border-gray-600"
            >
              <td className="p-3 flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={student.avatar}
                  alt={student.name}
                />
                <div className="flex flex-col">
                  <span className="font-bold">{student.name}</span>
                  <span>{student.email}</span>
                </div>
              </td>
              <td className="p-3 text-white">
                {student.active ? (
                  <div className="px-2 py-1 inline-block rounded-md text-xs border border-green-800 bg-green-600">
                    Active
                  </div>
                ) : (
                  <div className="px-2 py-1 inline-block rounded-md text-xs border border-red-800 bg-red-600">
                    Inactive
                  </div>
                )}
              </td>
              <td className="p-3">{student.grade1.toFixed(1)}</td>
              <td className="p-3">{student.grade2.toFixed(1)}</td>
              <td className="p-3 font-bold">
                {student.active
                  ? calculateAverage(student.grade1, student.grade2)
                  : "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
