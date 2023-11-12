import React, { useState } from "react";

export default function NewProject({ onProjectSave }) {
  const [enteredProjects, setEnteredProjects] = useState("");

  function handleAddProject(e) {
    setEnteredProjects(e.target.value);
  }
  function handleSaveProject() {
    if (enteredProjects.trim() === "") {
      return;
    }
    onProjectSave(enteredProjects);
    setEnteredProjects("");
  }

  return (
    <div className="my-4 " >
      <input
        type="text"
        className="w-64 outline-none px-2 py-1 rounded-sm bg-stone-200 "
        onChange={handleAddProject}
        value={enteredProjects}
      />
      <button
      onClick={handleSaveProject}
        type="submit"
        className=" w-20 p-1  bg-stone-500 text-stone-300 hover:text-stone-50"
      >
        Add
      </button>
    </div>
  );
}
