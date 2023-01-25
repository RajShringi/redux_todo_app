import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = JSON.parse(localStorage.getItem("todos")) || {
  all: [],
  active: [],
  completed: [],
};

function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: INTIAL_STATE,
  reducers: {
    addTodo(state, action) {
      let newAll = [action.payload, ...state.all];
      let newActive = newAll.filter((todo) => !todo.isCompleted);
      let newCompleted = newAll.filter((todo) => todo.isCompleted);
      localStorage.setItem(
        "todos",
        JSON.stringify({
          all: newAll,
          active: newActive,
          completed: newCompleted,
        })
      );
      return {
        all: newAll,
        active: newActive,
        completed: newCompleted,
      };
    },

    removeTodo(state, action) {
      let newAll = state.all.filter((todo) => todo.id !== action.payload);
      let newActive = newAll.filter((todo) => !todo.isCompleted);
      let newCompleted = newAll.filter((todo) => todo.isCompleted);
      localStorage.setItem(
        "todos",
        JSON.stringify({
          all: newAll,
          active: newActive,
          completed: newCompleted,
        })
      );
      return {
        all: newAll,
        active: newActive,
        completed: newCompleted,
      };
    },

    checkTodo(state, action) {
      console.log(state);
      const id = action.payload;
      state.all.forEach((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });

      state.active = state.all.filter((todo) => !todo.isCompleted);
      state.completed = state.all.filter((todo) => todo.isCompleted);
      localStorage.setItem(
        "todos",
        JSON.stringify({
          all: [...state.all],
          active: [...state.active],
          completed: [...state.completed],
        })
      );
    },

    deleteCompletedTodo(state, action) {
      let newAll = state.all.filter((todo) => !todo.isCompleted);
      let newActive = newAll.filter((todo) => !todo.isCompleted);
      let newCompleted = newAll.filter((todo) => todo.isCompleted);
      localStorage.setItem(
        "todos",
        JSON.stringify({
          all: newAll,
          active: newActive,
          completed: newCompleted,
        })
      );
      return {
        all: newAll,
        active: newActive,
        completed: newCompleted,
      };
    },

    reOrderTodos(state, action) {
      let newAll = reorder(
        action.payload.todos,
        action.payload.result.source.index,
        action.payload.result.destination.index
      );
      let newActive = newAll.filter((todo) => !todo.isCompleted);
      let newCompleted = newAll.filter((todo) => todo.isCompleted);
      localStorage.setItem(
        "todos",
        JSON.stringify({
          all: newAll,
          active: newActive,
          completed: newCompleted,
        })
      );
      return {
        all: newAll,
        active: newActive,
        completed: newCompleted,
      };
    },
  },
});

export const {
  addTodo,
  removeTodo,
  checkTodo,
  deleteCompletedTodo,
  reOrderTodos,
} = todoSlice.actions;

export default todoSlice;
