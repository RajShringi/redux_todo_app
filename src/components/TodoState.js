function TodoState({ state, setState }) {
  return (
    <div className="flex justify-center items-center space-x-4 text-xs py-2 shadow-sm md:shadow-none bg-white rounded-md dark:bg-dt-very-dark-desaturated-blue text-lt-light-grayish-blue dark:text-dt-dark-grayish-blue">
      <button
        onClick={() => setState("all")}
        className={`hover:text-dt-very-dark-desaturated-blue dark:hover:text-dt-light-grayish-blue ${
          state === "all" && "text-blue-400"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setState("active")}
        className={`hover:text-dt-very-dark-desaturated-blue dark:hover:text-dt-light-grayish-blue ${
          state === "active" && "text-blue-400"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setState("completed")}
        className={`hover:text-dt-very-dark-desaturated-blue dark:hover:text-dt-light-grayish-blue ${
          state === "completed" && "text-blue-400"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
export default TodoState;
