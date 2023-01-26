import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTodo, reOrderTodos } from "../store/todoSlice";
import NoTask from "./NoTask";
import Todo from "./Todo";
import TodoState from "./TodoState";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Todos() {
  let {
    todosState: { all, active, completed },
  } = useSelector((state) => state);

  let todos;

  const dispatch = useDispatch();

  const DeleteAllCompletedTodo = () => {
    dispatch(deleteCompletedTodo());
  };

  const [state, setState] = useState("all");

  if (state === "all") {
    todos = all;
  }

  if (state === "active") {
    todos = active;
  }
  if (state === "completed") {
    todos = completed;
  }

  const handleDrag = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(reOrderTodos({ todos: all, result }));
  };

  return (
    <div className="max-w-lg mx-auto">
      <ul className="bg-white dark:bg-dt-very-dark-desaturated-blue shadow-sm rounded-md py-2 my-4">
        {todos.length === 0 && state !== "completed" && <NoTask />}
        <DragDropContext onDragEnd={handleDrag}>
          <Droppable droppableId="todos">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => {
                  return <Todo key={todo.id} {...todo} index={index} />;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="flex justify-between items-center py-2 px-4 text-lt-light-grayish-blue dark:text-dt-dark-grayish-blue">
          <p className="text-xs">{active.length} items left</p>
          <div className="hidden md:block">
            <TodoState state={state} setState={setState} />
          </div>
          <button
            onClick={DeleteAllCompletedTodo}
            className={`hover:text-dt-very-dark-desaturated-blue dark:hover:text-dt-light-grayish-blue font-extralight text-xs`}
          >
            Clear Completed
          </button>
        </div>
      </ul>

      <div className="md:hidden">
        <TodoState state={state} setState={setState} />
      </div>
    </div>
  );
}

export default Todos;
