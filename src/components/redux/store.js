// import { createStore } from 'redux'; // vanilla redux
// import { devToolsEnhancer } from '@redux-devtools/extension'; // vanilla redux

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);// vanilla redux

import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
