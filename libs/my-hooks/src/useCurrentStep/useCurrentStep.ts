import { useBooking } from '../useBookings/useBookings';

export const useCurrentStep = () => {
  const { booking } = useBooking();

  let currentStep: 'Service' | 'Employee' | 'DateTime' | 'Payment';

  if (!booking.services) {
    currentStep = 'Service';
  } else if (!booking.employee) {
    currentStep = 'Employee';
  } else if (!booking.dateAndTime) {
    currentStep = 'DateTime';
  } else {
    currentStep = 'Payment';
  }

  return { currentStep };
};
