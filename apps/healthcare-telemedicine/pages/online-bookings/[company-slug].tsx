import { useCurrentStep } from '@diar/hooks';
import { ServiceSelector } from '../../components/booking-details/ServiceSelector';
import { EmployeeSelector } from '../../components/booking-details/EmployeeSelector';
import { DateTimeSelector } from '../../components/booking-details/DateTimeSelector';
import { useRouter } from 'next/router';

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
        return <DateTimeSelector companySlug={companySlug} />;
      default:
        return <ServiceSelector companySlug={companySlug} />;
    }
  };
  return <div>{renderStep()}</div>;
};

export default index;
