import { Card, CardHeader, CardTitle, CardContent } from '@diar/donda';
import { EmployeeCard } from '../EmployeeCard';

export const EmployeeSelector = ({ companySlug }: { companySlug: string }) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Select an Employee</CardTitle>
      </CardHeader>
      <CardContent>
        <EmployeeCard companySlug={companySlug} />
      </CardContent>
    </Card>
  );
};
