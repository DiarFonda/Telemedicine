import { BookingAction } from '../types';

export const setService = (service: string): BookingAction => ({
  type: 'SET_SERVICE',
  payload: service
});

export const setLocation = (location: string): BookingAction => ({
  type: 'SET_LOCATION',
  payload: location
});

export const setEmployee = (employee: string): BookingAction => ({
  type: 'SET_EMPLOYEE',
  payload: employee
});

export const setDateTime = (dateTime: string): BookingAction => ({
  type: 'SET_DATE_TIME',
  payload: dateTime
});
