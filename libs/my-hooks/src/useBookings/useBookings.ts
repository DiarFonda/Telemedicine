import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setService, setLocation, setEmployee, setDateTime } from '@diar/state';
import { RootState } from '@diar/state';

export const useBooking = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state: RootState) => state.booking);

  const selectService = useCallback(
    (service: string) => {
      dispatch(setService(service));
    },
    [dispatch]
  );

  const selectLocation = useCallback(
    (location: string) => {
      dispatch(setLocation(location));
    },
    [dispatch]
  );

  const selectEmployee = useCallback(
    (employee: string) => {
      dispatch(setEmployee(employee));
    },
    [dispatch]
  );

  const selectDateTime = useCallback(
    (dateTime: string) => {
      dispatch(setDateTime(dateTime));
    },
    [dispatch]
  );

  const selectedService = booking.services;
  const selectedLocation = booking.location;
  const selectedEmployee = booking.employee;
  const selectedDateTime = booking.dateAndTime;

  return {
    booking,
    selectedService,
    selectedLocation,
    selectedEmployee,
    selectedDateTime,
    selectService,
    selectLocation,
    selectEmployee,
    selectDateTime,
  };
};
