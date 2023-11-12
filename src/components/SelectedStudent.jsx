import React from "react";
import Projects from "./Projects";

export default function SelectedStudent({ onDeleteProject,projects,selectedstudent,onProjectSave,onDeleteStudent }) {
  return (
    <section className="w-[35rem] mt-16">
      <div className="mb-10 border-b-2 border-stone-700 p-5">
        <h1 className="text-3xl font-bold text-stone-600 mb-2 text-center">
          Student Bio
        </h1>
        <div className="my-12 flex justify-between items-center">
          <div>
            <h1 className="mb-2 font-bold uppercase md:text-xl text-stone-800">
              {selectedstudent.name}
            </h1>
            <p className="text-stone-700 ">{selectedstudent.email}</p>
          </div>
          <button onClick={onDeleteStudent} className="bg-stone-700 text-stone-400 p-2 mr-2 rounded-lg hover:bg-red-500 hover:text-stone-200">
            Delete
          </button>
        </div>
        <p className="text-stone-600 whitespace-pre-wrap mb-4">
          {selectedstudent.description}
        </p>
      </div>
      <Projects handleProjectSave={onProjectSave} projects={projects} handleProjectDelete={onDeleteProject}/>
     
    </section>
  );
}
