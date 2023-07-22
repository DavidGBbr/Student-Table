import { students } from "@/data/Student";

const StudentsTable = () => {
  const calculateAverage = (grade1: number, grade2: number) => {
    const result = (grade1 + grade2) / 2;
    return result.toFixed(1).toString();
  };
  return (
    <div className="container">
      <table className="w-full rounded bg-gray-500 table">
        <thead className="bg-gray-800">
          <tr className="text-left">
            <th className="p-2">Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr className="text-left text-black">
              <td className="flex items-center gap-2 p-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={student.avatar}
                  alt={student.avatar + student.name}
                />
                <div className="flex flex-col">
                  <span className="font-bold">{student.name}</span>
                  <span>{student.email}</span>
                </div>
              </td>
              <td
                className={`text-white w-2 h-2 border  ${
                  student.active ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {student.active ? "Active" : "Inactive"}
              </td>
              <td>{student.grade1}</td>
              <td>{student.grade2}</td>
              <td>
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
