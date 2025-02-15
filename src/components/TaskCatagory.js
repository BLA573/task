export default function TaskCatagory({
  taskTitle,
  taskDescription,
  taskStatus,
  taskIconLeft,
  onClick,
}) {
  const backgroundColor = new Map();

  backgroundColor.set("in progress", "lightoranget");
  backgroundColor.set("done", "lightgreent");
  backgroundColor.set("won't do", "roset");
  backgroundColor.set("none", "addt");
  backgroundColor.set("in progressdark", "oranget");
  backgroundColor.set("donedark", "greent");
  backgroundColor.set("won't dodark", "redt");
  backgroundColor.set("nonedark", "darkaddt");

  return (
    <div
      className={`flex justify-between items-start py-2 px-3 rounded-xl  bg-${backgroundColor.get(
        taskStatus
      )}`}
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="bg-white h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0">
          {taskIconLeft}
        </div>
        <div className="">
          <h1 className="font-bold text-base flex items-center break-all">
            {taskTitle}
          </h1>
          <p className=" text-sm pr-5 break-all">{taskDescription}</p>
        </div>
      </div>
      <div
        className={`bg-${backgroundColor.get(
          taskStatus + "dark"
        )} h-9 w-9 rounded-lg flex justify-center items-center text-center flex-shrink-0`}
      >
        {taskStatus == "done" && (
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
        )}
        {taskStatus == "won't do" && (
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
        )}
        {taskStatus == "in progress" && (
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
        )}
        {taskStatus == "none" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="15"
            height="15"
            className="fill-whitet"
          >
            <circle cx="256" cy="256" r="256" />
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              className="fill-[#9d89f7]"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
