import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import bookingReducer from './reducers/bookingReducer';
import {thunk} from 'redux-thunk';


const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return bookingReducer(state, action);
  }
};

const makeStore = () => configureStore({
  reducer: {
    booking: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export const wrapper = createWrapper(makeStore);
