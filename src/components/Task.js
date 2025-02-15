"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskPopup({
  togglePopup,
  addTask,
  removeTask,
  selectedTask,
  editTask,
}) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [icon, setIcon] = useState(0);
  const [status, setStatus] = useState("in progress");
  const [id, setId] = useState("");

  const icons = ["📚", "🏋‍♂️", "☕", "💰", "⏰", "🧹", "🛒", "👩‍🍳"];

  useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.taskTitle);
      setTaskDescription(selectedTask.taskDescription);
      setIcon(icons.indexOf(selectedTask.taskIconLeft));
      setStatus(selectedTask.taskStatus);
      setId(selectedTask.id);
    } else {
      setTaskName("");
      setTaskDescription("");
      setIcon(0);
      setStatus("in progress");
      setId("");
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: id || uuidv4(),
      taskTitle: taskName,
      taskDescription: taskDescription,
      taskStatus: status,
      taskIconLeft: icons[icon],
    };
    if (selectedTask) {
      console.log(1);
      editTask(newTask);
    } else {
      console.log(2);
      addTask(newTask);
    }
    togglePopup();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    removeTask(id);
    togglePopup();
  };

  return (
    <div
      onClick={() => togglePopup()}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start p-2"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg shadow-lg w-full min-[1072px]:w-[800px] min-[560px]:w-[560px] h-[99.9%] overflow-y-scroll"
      >
        <div className="flex flex-col h-full justify-between">
          <form className=" flex flex-col gap-1">
            <div className="relative">
              <h2 className="text-xl font-bold mb-4">Task details</h2>
              <button
                onClick={() => togglePopup()}
                className="absolute top-0 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
                </svg>
              </button>
            </div>

            <label className="text-gray-500 text-xs">Task name</label>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline focus:outline-1 focus:outline-bluet mb-2 text-sm"
              required
            />
            <label className="text-gray-500 text-xs">Description</label>
            <textarea
              type="text"
              placeholder="Enter a short description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md h-28 focus:outline focus:outline-1 focus:outline-bluet resize-none text-sm mb-2"
            />
            <label className="text-gray-500 text-xs">Icon</label>
            <div className="flex gap-3 mb-2 flex-wrap">
              {icons.map((iconSrc, index) => (
                <div
                  key={index}
                  className={`bg-lightgrayt h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0 cursor-pointer ${
                    icon === index && "bg-lightoranget"
                  }`}
                  onClick={() => setIcon(index)}
                >
                  {iconSrc}
                </div>
              ))}
            </div>
            <label className="text-gray-500 text-xs">Status</label>
            <div className="flex gap-3 flex-wrap">
              <div
                onClick={() => setStatus("in progress")}
                className={`flex items-center gap-3 cursor-pointer border-2 p-[2px] active:border-bluet rounded-xl w-60 ${
                  status == "in progress" && "border-bluet"
                }`}
              >
                <div className="bg-lightoranget h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="15"
                    height="15"
                    className="fill-whitet"
                  >
                    <circle cx="256" cy="256" r="256" />
                    <path
                      d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                      className="fill-lightoranget"
                    />
                  </svg>
                </div>
                <p className=" flex items-center text-sm">In Progress</p>
              </div>
              <div
                onClick={() => setStatus("done")}
                className={`flex items-center gap-3 cursor-pointer border-2 p-[2px] active:border-bluet rounded-xl w-60 ${
                  status == "done" && "border-bluet"
                }`}
              >
                <div className="bg-greent h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="15"
                    height="15"
                    className="fill-[#69eb85]"
                  >
                    <circle cx="256" cy="256" r="256" />
                    <path
                      d="M369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      className="fill-whitet"
                    />
                  </svg>
                </div>
                <p className=" flex items-center text-sm">Completed</p>
              </div>
              <div
                onClick={() => setStatus("won't do")}
                className={`flex gap-3 cursor-pointer border-2 p-[2px] active:border-bluet rounded-xl w-60 ${
                  status == "won't do" && "border-bluet"
                }`}
              >
                <div className="bg-redt h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="15"
                    height="15"
                    className="fill-whitet"
                  >
                    <circle cx="256" cy="256" r="256" />
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                      className="fill-[#ec7f7b]"
                    />
                  </svg>
                </div>
                <p className=" flex items-center text-sm">Won't do</p>
              </div>
            </div>
          </form>
          <div className="flex gap-3 mt-4 justify-end">
            {selectedTask && (
              <button
                onClick={handleDelete}
                className="bg-darkgrayt h-8 w-24 rounded-xl flex justify-center gap-1 items-center text-white text-sm"
              >
                Remove
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={15}
                  width={15}
                  className="fill-white"
                >
                  <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
              </button>
            )}
            <button
              onClick={handleSubmit}
              className="bg-bluet h-8 w-24 rounded-xl flex justify-center gap-1 items-center text-white text-sm"
            >
              Save
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={15}
                width={15}
                className="fill-white"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
