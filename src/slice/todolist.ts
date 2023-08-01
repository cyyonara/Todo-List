import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../todoModel";

const initialState : Todo[] = [{ id: 1, name: "Wipe yo' ass", isDone: false}];

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {

    //reducer for adding new todo
    add : (state, { payload }) => {
      return [...state, { id: payload.id, name: payload.name, isDone: payload.isDone }]
    },

    //reducer for changing the isDone status of todo
    editStatus : (state, { payload }) => {
      return state.map((todo : Todo) => {
        if (todo.id === payload.id) {
          return {...todo, isDone: !todo.isDone}
        } else {
          return todo;
        }
      })
    },

    //reducer for changing todo name
    editTodoName: (state, { payload }) => {
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {...todo, name: payload.newName};
        } else {
          return todo;
        }
      })
    },

    //reducer for deleting a todo
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => {
        return todo.id !== payload.id;
      })
    }
  }
});

export const { add, editStatus, deleteTodo, editTodoName } = todoSlice.actions;
