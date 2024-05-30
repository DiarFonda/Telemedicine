import { Avatar, AvatarFallback, AvatarImage, Skeleton } from '@diar/donda';
import { useEmployeesQuery } from '@diar/graphql';
import { companyMapper } from '@diar/utils';
import { useBooking } from '@diar/hooks';

export function EmployeeCard({ companySlug }: { companySlug: string }) {
  const { data: employees, loading } = useEmployeesQuery({
    variables: {
      companyId: companyMapper[companySlug],
    },
  });
  const { selectEmployee } = useBooking();

  const handleSelectService = (employee: string) => {
    selectEmployee(employee);
  };
  console.log('emp:', employees?.employees);
  return (
    <div className="space-y-8">
      {loading ? (
        <h1>loading employees...</h1>
      ) : (
        employees?.employees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors duration-200"
            onClick={() => handleSelectService(employee.name)}
          >
            {!loading ? (
              <Avatar className="h-9 w-9">
                <AvatarImage src="/batman.webp" alt="Avatar" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            ) : (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            )}
            <div className="ml-4 space-y-1">
              {!loading ? (
                <p className="text-sm font-medium leading-none">
                  {employee.name}
                </p>
              ) : (
                <Skeleton className="h-4 w-[200px]" />
              )}
              {loading ? (
                <Skeleton className="h-4 w-[200px]" />
              ) : (
                <p className="text-sm text-muted-foreground">
                  {employee.email}
                </p>
              )}
            </div>
            <div className="ml-auto font-medium">+${employee.cost}</div>
          </div>
        ))
      )}
    </div>
  );
}
