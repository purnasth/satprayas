import React from 'react';
import Meta from '../utils/Meta';
import Title from '../components/ui/Title';
import useFetchAPI from '../hooks/useFetchAPI';
import logo from '../assets/logo.svg';

const SuccessStories = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: testimonialsContent,
    isLoading,
    isError,
    // } = useFetchAPI('testimonials', `${apiUrl}testimonials`);
  } = useFetchAPI('testimonials', `/api/testimonials.json`);

  if (isLoading) return null;
  if (isError) return console.error(isError);

  return (
    <>
      <Meta meta_title="Success Stories | Satprayas Nepal" canonicalUrl="" />

      <main className="px-4">
        <Title
          title="Success Stories"
          description="Read about the success stories of our children and how they have transformed their lives. Explore the impact of your donations and how they have helped empower children."
        />
        <section
          className={`transition-linear w-full columns-1 gap-2 sm:columns-2 md:gap-4 lg:columns-3 xl:columns-3`}
        >
          {testimonialsContent.map((content, index) => (
            <div
              key={content.id}
              className={`group mb-4 origin-center space-y-6 overflow-hidden rounded-xl bg-light p-6 shadow transition-all duration-300 ease-linear`}
            >
              <p className="text-pretty">{content.review}</p>
              <div className="flex items-center gap-4">
                <img
                  src={content.sourceImage ? content.sourceImage : logo}
                  alt={content.author}
                  className="size-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-body text-lg font-semibold">
                    {content.author}
                  </h3>
                  <p className="text-pretty text-sm">{content.source}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default SuccessStories;
