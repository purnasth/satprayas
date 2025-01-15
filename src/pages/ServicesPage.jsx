import React from 'react';
import Meta from '../utils/Meta';
import Title from '../components/ui/Title';
import useFetchAPI from '../hooks/useFetchAPI';

const ServicesPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: menu,
    isLoading,
    isError,
    // } = useFetchAPI('foodMenu', `${apiUrl}food-menu`);
  } = useFetchAPI('foodMenu', `/api/foodmenu.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  if (!menu || menu.length === 0) return null;
  return (
    <>
      <Meta meta_title="Services | Satprayas Nepal" canonicalUrl="" />

      <main className="px-6">
        <Title
          title="Our Services"
          description="We provide physiotherapy treatment, educational services, speech therapy and other capability development services to differently abled children from trained assistant physiotherapists and teachers."
        />
        <section
          className={`transition-linear w-full columns-1 gap-2 sm:columns-2 md:gap-6 lg:columns-3 xl:columns-3`}
        >
          {menu.map((service) => (
            <div
              key={service.id}
              className={`group mb-6 origin-center space-y-6 overflow-hidden rounded-xl border bg-light p-6 shadow transition-all duration-300 ease-linear`}
            >
              <h4 className="text-2xl capitalize">{service.name}</h4>
              <img
                src={service.imageUrl}
                alt={service.name}
                className="h-64 w-full rounded-lg object-cover shadow"
                draggable="false"
              />
              <p className="text-pretty">{service.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
