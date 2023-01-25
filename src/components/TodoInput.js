import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getTime(),
        todo,
        isCompleted: false,
      })
    );
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-white dark:bg-dt-very-dark-desaturated-blue p-2 rounded-md">
          <div className="basis-[5%] flex justify-center items-center py-2 mx-4">
            <div className="w-[23px] h-[23px] bg-lt-light-grayish-blue rounded-full dark:bg-lt-very-dark-grayish-blue flex justify-center items-center">
              <div className="w-[21px] h-[21px] bg-white dark:bg-dt-very-dark-desaturated-blue rounded-full"></div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="block basis-[95%] outline-none py-2 dark:bg-dt-very-dark-desaturated-blue"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
export default TodoInput;
