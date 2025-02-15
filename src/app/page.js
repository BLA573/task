"use client";
import TaskCatagory from "../components/TaskCatagory";
import { useState, useEffect } from "react";
import AddTaskPopup from "../components/Task";

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const task = JSON.parse(localStorage.getItem("task"));

    if (task) {
      setTasks(task);
    }
  }, []);

  const togglePopup = (task = null) => {
    setSelectedTask(task);
    setPopupVisible(!isPopupVisible);
  };

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
    localStorage.setItem("task", JSON.stringify([newTask, ...tasks]));
  };
  const editTask = (taskToBeEdited) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskToBeEdited.id) {
        return (task = taskToBeEdited);
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("task", JSON.stringify(newTasks));
  };

  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("task", JSON.stringify(newTasks));
  };

  const handleTaskClick = (task) => {
    togglePopup(task);
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="min-[600px]:w-[30rem] min-[400px]:w-[20rem] w-72">
        <div className="my-10 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height={60}
            width={60}
          >
            <path d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
          </svg>
          <div>
            <div className="text-4xl">Task Board</div>
            <div className="text-sm mt-1 pl-2">Task to keep organaized</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {isPopupVisible && (
            <AddTaskPopup
              togglePopup={togglePopup}
              addTask={addTask}
              removeTask={removeTask}
              selectedTask={selectedTask}
              editTask={editTask}
            />
          )}
          <div onClick={() => togglePopup()} className=" cursor-pointer w-full">
            <TaskCatagory
              taskTitle={"Add Task"}
              taskStatus={"none"}
              taskIconLeft={"➕"}
            />
          </div>
          {tasks.length > 0 &&
            tasks.map((task, i) => (
              <div key={i} className="w-full cursor-pointer">
                <TaskCatagory
                  key={task.id}
                  {...task}
                  onClick={() => handleTaskClick(task)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
