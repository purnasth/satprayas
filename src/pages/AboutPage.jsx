import React from 'react';
import Title from '../components/ui/Title';
import LogoBar from '../components/ui/LogoBar';
import UniversalFooter from '../layouts/UniversalFooter';
import FacilityList from '../components/ui/FacilityList';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';

const AboutPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: aboutContents,
    isLoading,
    isError,
    // } = useFetchAPI('aboutContents', `${apiUrl}about`);
  } = useFetchAPI('aboutContents', `/api/about.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const {
    title,
    description,
    images,
    sections,
    meta_title,
    meta_description,
    meta_keywords,
    home_page,
  } = aboutContents;

  const { title: homeTitle, description: homeDescription } = home_page[0];

  return (
    <>
      <Meta
        meta_title={`${meta_title ? meta_title : 'About | Satprayas Nepal'}`}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl="https://satprayash.org.np/about"
      />

      <main className="px-4">
        <Title title={title} description={description} />
        {/* <section className="mt-12 grid grid-cols-3 gap-3 md:mt-32 md:gap-12">
          {images
            .slice(0, 4)
            .reverse()
            .map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`h-48 w-full object-cover sm:h-96 md:h-12 lg:h-[32rem] xl:h-[85vh] ${index === 1 ? 'h-' : ''}`}
              />
            ))}
        </section> */}

        <section className="mt-12 grid grid-cols-3 content-center items-center gap-3 md:mt-32 md:gap-4">
          <div>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-48 w-full object-cover shadow-md sm:h-96 md:h-12 lg:h-[32rem] xl:h-[88vh]"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-auto w-full object-cover shadow-md"
            />

            <img
              src={images[2].src}
              alt={images[2].alt}
              className="h-auto w-full object-cover shadow-md"
            />
          </div>
          <div>
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="h-48 w-full object-cover shadow-md sm:h-96 md:h-12 lg:h-[32rem] xl:h-[88vh]"
            />
          </div>
        </section>
      </main>
      <div className="container space-y-6">
        <p className="mb-8 text-pretty text-4xl leading-relaxed">
          {homeDescription}
        </p>
      </div>
    </>
  );
};

export default AboutPage;
