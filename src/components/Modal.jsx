import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <h2  className="text-xl font-bold text-stone-700 my-4">Input Error</h2>
      <p className="text-stone-600 mb-4">Please ensure all fields are filled correctly</p>
      <form method="dialog" className="mt-4 text-right">
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
