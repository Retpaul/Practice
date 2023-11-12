import React, { useRef } from "react";
import Input from "./UI/Input";
import Modal from "./Modal";

export default function AddStudent({ onSaveStudent, onCancel }) {
  const modal = useRef();

  const name = useRef();
  const email = useRef();
  const stream = useRef();
  const description = useRef();
  const entryDate = useRef();

  function handleSaveStudent() {
    const newStudent = {
      name: name.current.value,
      email: email.current.value,
      stream: stream.current.value,
      description: description.current.value,
      entryDate: entryDate.current.value,
    };
    if (
      newStudent.name.trim() === "" ||
      newStudent.email.trim() === "" ||
      newStudent.stream.trim() === "" ||
      newStudent.description.trim() === "" ||
      newStudent.entryDate.trim() === ""
    ) {
      modal.current.open();
      return
    }
    onSaveStudent(newStudent);
    name.current.value = "";
    email.current.value = "";
    stream.current.value = "";
    description.current.value = "";
    entryDate.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} />
      <section className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSaveStudent}
          >
            Save
          </button>
        </menu>

        <Input label="Name" type="text" ref={name} />
        <Input label="email" type="email" ref={email} />
        <Input label="stream" type="text" ref={stream} />
        <Input label="Description" type="text" textarea ref={description} />
        <Input label="Date of Entry" type="date" ref={entryDate} />
      </section>
    </>
  );
}
