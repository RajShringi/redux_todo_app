import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "../store/todoSlice";
import { Draggable } from "react-beautiful-dnd";

function Todo({ id, todo, isCompleted, index }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(checkTodo(id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex items-center justify-between bg-white dark:bg-dt-very-dark-desaturated-blue p-2 border-b dark:border-dt-very-dark-grayish-blue-two cursor-pointer group"
        >
          <div className="basis-[90%] flex items-center">
            <div className="basis-[5%] flex justify-center items-center py-2 mx-4 relative">
              <div className="group">
                <input
                  type="checkbox"
                  className="appearance-none absolute w-5 h-5 z-10 cursor-pointer"
                  checked={isCompleted}
                  onChange={handleChange}
                />
                <div className="w-[23px] h-[23px] bg-lt-light-grayish-blue dark:bg-lt-very-dark-grayish-blue rounded-full flex justify-center items-center group-hover:bg-gradient-to-br from-sky-400 to-purple-400">
                  <div className="w-[21px] h-[21px] bg-white dark:bg-dt-very-dark-desaturated-blue rounded-full"></div>
                </div>
              </div>
              {isCompleted && (
                <img
                  src="/images/icon-check.svg"
                  alt="check"
                  className="absolute opacity-100"
                />
              )}
            </div>
            <p
              className={`block basis-[95%] py-1 transition ${
                isCompleted &&
                "line-through text-lt-light-grayish-blue dark:text-dt-very-dark-grayish-blue-one"
              }`}
            >
              {todo}
            </p>
          </div>
          <div className="basis-[8%]">
            <TfiClose
              onClick={handleDelete}
              className="text-lg cursor-pointer lg:hidden lg:group-hover:block"
            />
          </div>
        </li>
      )}
    </Draggable>
  );
}
export default Todo;
