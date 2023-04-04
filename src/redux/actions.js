import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const toggleAllCompleted = createAction('tasks/toggleAllCompleted');

export const deleteAllCompletedTask = createAction(
  'tasks/deleteAllCompletedTask'
);

export const setStatusFilter = createAction('filters/setStatusFilter');
