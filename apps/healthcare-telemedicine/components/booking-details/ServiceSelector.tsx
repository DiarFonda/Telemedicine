import React from 'react';
import { ServiceCard } from '../ServiceCard';
import { useRouter } from 'next/router';
import { useServicesQuery } from '@diar/graphql';
import { companyMapper } from '@diar/utils';

export const ServiceSelector = ({ companySlug }: { companySlug: string }) => {
  //   const [services, setServices] = useState([]);
  //   const [visibleCount, setVisibleCount] = useState(9); // Initially show 9 items (3x3 grid)

  // Mock data fetching function
  //   const fetchServices = () => {
  //     // Simulate fetching additional services
  //     const additionalServices = new Array(9).fill(null).map((_, i) => ({
  //       id: i + visibleCount, // Ensure unique IDs for keys
  //       title: "Service " + (i + visibleCount + 1),
  //       description: "Description for service " + (i + visibleCount + 1)
  //     }));

  //     return additionalServices;
  //   };

  //   useEffect(() => {
  //     // Simulate initial data load
  //     setServices(fetchServices());
  //   }, []);

  //   const handleSeeMore = () => {
  //     const moreServices = fetchServices();
  //     setServices(services.concat(moreServices));
  //     setVisibleCount(visibleCount + 9);
  //   };

  const { data: services, loading } = useServicesQuery({
    variables: {
      companyId: companyMapper[companySlug],
    },
  });
  if (loading) {
    return <div>Loading Services...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
        {services?.services.map((service) => (
          <ServiceCard
            description={service.description ?? ''}
            name={service.name}
            key={service.id}
          />
        ))}
      </div>
      {/* {visibleCount < services.length && ( */}
      {services?.services && services?.services?.length < 6 ? null : (
        <div className="flex justify-center mt-6">
          <button className="bg-primary text-white px-4 py-2 rounded shadow hover:accent-400 transition duration-150 ease-in-out cursor-pointer">
            See More
          </button>
        </div>
      )}
      {/* )} */}
    </div>
  );
};
