import React from "react";
import NewProject from "./NewProject";

export default function Projects({ handleProjectSave, projects ,handleProjectDelete}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Projects</h2>
      <NewProject onProjectSave={handleProjectSave} />
      {projects.length === 0 && (
        <p className="text-stone-800 my-10">
          The Student has not worked on any project yet !
        </p>
      )}
      {projects.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projects.map((project) => {
            return (
              <li key={project.id} className="flex justify-between my-4">
                <span>{project.project}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={()=>handleProjectDelete(project.id)}>
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
