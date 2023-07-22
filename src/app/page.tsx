import StudentsTable from "@/components/StudentsTable";
import { students } from "@/data/Student";

const page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center m-5">Lista de Estudantes</h1>
      <StudentsTable students={students} />
    </div>
  );
};

export default page;
