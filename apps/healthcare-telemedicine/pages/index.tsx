import { useBooking } from '@diar/hooks';

export function Index() {
  const { booking } = useBooking();
  console.log(booking.services);
  return <div>diar </div>;
}

export default Index;
