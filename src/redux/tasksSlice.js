import { createSlice, nanoid } from '@reduxjs/toolkit';
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   //   toggleAllCompleted,
//   deleteAllCompletedTask,
//   setStatusFilter,
// } from './actions';
// import { statusFilters } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },

    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    markAllCompleted(state, action) {
      for (const task of state) {
        if (!task.completed) {
          task.completed = !task.completed;
        }
      }
    },

    deleteAllCompletedTasks(state, action) {
      return state.filter(task => !task.completed);
    },

    deleteAllTasks(state, action) {
      return state.filter(task => !task.completed && task.completed);
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  markAllCompleted,
  deleteAllCompletedTasks,
  deleteAllTasks,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
