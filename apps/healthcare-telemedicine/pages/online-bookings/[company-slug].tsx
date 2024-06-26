import { useCurrentStep } from '@diar/hooks';
import { ServiceSelector } from '../../components/booking-details/ServiceSelector';
import { EmployeeSelector } from '../../components/booking-details/EmployeeSelector';
import { DateTimeSelector } from '../../components/booking-details/DateTimeSelector';
import { useRouter } from 'next/router';
import { PaymentMethod } from '../../components/booking-details/PaymentMethod';

export const index = () => {
  const { currentStep } = useCurrentStep();
  const router = useRouter();
  const companySlug = router.query['company-slug'] as string;

  const renderStep = () => {
    switch (currentStep) {
      case 'Service':
        return <ServiceSelector companySlug={companySlug} />;
      case 'Employee':
        return <EmployeeSelector companySlug={companySlug} />;
      case 'DateTime':
        // will add company slug to check availability
        return <DateTimeSelector />;
      case 'Payment':
        return <PaymentMethod />;
      default:
        return <ServiceSelector companySlug={companySlug} />;
    }
  };
  return <div>{renderStep()}</div>;
};

export default index;
