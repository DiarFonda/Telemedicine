import { useBooking } from '../useBookings/useBookings';

export const useCurrentStep = () => {
  const { booking } = useBooking();

  let currentStep: 'Service' | 'Employee' | 'DateTime';

  if (!booking.services) {
    currentStep = 'Service';
  } else if (!booking.employee) {
    currentStep = 'Employee';
  } else {
    currentStep = 'DateTime';
  }

  return { currentStep };
};
