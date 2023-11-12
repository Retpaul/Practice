import React from "react";
import projects from "../assets/projects.png";

export default function DashBoard({ onStartAdd, students,onSelectStudent }) {
  return (
    <main className="w-2/3">
      <div className="mt-16">
        <div className="flex content-center justify-center">
          <img
            src={projects}
            alt=""
            className="w-20 h-20 object-contain mx-auto"
          />
          <div>
            <button
              className="px-4 py-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
              onClick={onStartAdd}
            >
              Create Student
            </button>
          </div>
        </div>
      </div>
      {students.length === 0 && (
        <p className="mt-8 text-center">No student has been added to list </p>
      )}
      {students.length > 0 && (
        <table className="w-full my-8 mx-auto p-4 border-spacing-4 text-left">
          <thead className="text-lg text-stone-800 border-[1px] border-stone-800">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Stream</th>
              <th>Date Enlisted</th>
            </tr>
          </thead>
          <tbody className="text-lg mt-4">
            {students.map((student) => {
              const date = new Date(student.entryDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              );
              return (
                <tr key={student.id} className="py-4 text-left  bg-slate-200 cursor-pointer " onClick={()=>{onSelectStudent(student.id)}}>
                  <td className="capitalize">{student.name}</td>
                  <td>{student.email}</td>
                  <td className="capitalize">{student.stream}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
}
