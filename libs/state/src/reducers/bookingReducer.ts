import { BookingState, BookingAction } from '../types';

const initialState: BookingState = {
  services: null,
  location: null,
  employee: null,
  dateAndTime: null
};

function bookingReducer(state: BookingState = initialState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_SERVICE':
      return { ...state, services: action.payload };
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_EMPLOYEE':
      return { ...state, employee: action.payload };
    case 'SET_DATE_TIME':
      return { ...state, dateAndTime: action.payload };
    default:
      return state;
  }
}

export default bookingReducer;
