import { useRef, useState } from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import AddStudent from "./components/AddStudent";
import SelectedStudent from "./components/SelectedStudent";

function App() {
  const [studentState, setStudentState] = useState({
    selectStudentId: undefined,
    students: [],
    projects: [],
  });

  // to Select Specific Student
  const selectStudent = studentState.students.find(
    (student) => student.id === studentState.selectStudentId
  );

  let content;

  if (studentState.selectStudentId === null) {
    content = (
      <AddStudent
        onSaveStudent={handleSaveStudent}
        onCancel={HandleCancelStudentAdd}
      />
    );
  } else if (studentState.selectStudentId === undefined) {
    content = (
      <DashBoard
        onStartAdd={HandlestartStudentAdd}
        students={studentState.students}
        onSelectStudent={handleselectStudent}
      />
    );
  } else {
    content = (
      <SelectedStudent
        selectedstudent={selectStudent}
        onProjectSave={handleProjectSave}
        onDeleteStudent={handleDeleteStudent}
        projects={studentState.projects}
        onDeleteProject={handleDeleteProject}
      />
    );
  }

  // When Create Student button is Clicked
  function HandlestartStudentAdd() {
    setStudentState((prevState) => {
      return {
        ...prevState,
        selectStudentId: null,
      };
    });
  }

  // When cancel button is clicked
  function HandleCancelStudentAdd() {
    setStudentState((prevState) => {
      return {
        ...prevState,
        selectStudentId: undefined,
      };
    });
  }

  // when Save button is clicked
  function handleSaveStudent(studentInfo) {
    const newStudent = {
      ...studentInfo,
      id: Math.random(),
    };

    setStudentState((prevState) => {
      return {
        ...prevState,
        students: [...prevState.students, newStudent],
      };
    });
  }

  // To select specific student
  function handleselectStudent(id) {
    setStudentState((prevState) => {
      return { ...prevState, selectStudentId: id };
    });
  }

  function handleDeleteStudent() {
    setStudentState((prevState) => {
      return {
        ...prevState,
        selectStudentId:undefined,
        students: prevState.students.filter(
          (student) => student.id !== prevState.selectStudentId
        ),
      };
    });
  }

  function handleProjectSave(text) {
    setStudentState((prevState) => {
      const newProject = {
        project: text,
        studentId: prevState.selectStudentId,
        id: Math.random(),
      };
      return { ...prevState, projects: [...studentState.projects, newProject] };
    });
  }

  function handleDeleteProject(id){
    setStudentState((prevState)=>{
      return{
        ...prevState,
        projects:prevState.projects.filter((project)=> project.id !== id)
      }
    })
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onClose={HandleCancelStudentAdd} />
      {content}
    </main>
  );
}

export default App;
