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
  } = useFetchAPI('aboutContents', `${apiUrl}about`);

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
  } = aboutContents;

  return (
    <>
      <Meta
        meta_title={`${meta_title ? meta_title : 'About | Satprayas Nepal'}`}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl="https://satprayas-nepal.com/about"
      />

      <main className="px-0">
        <div className="px-4">
          <Title title={title} description={description} />
        </div>
        <section className="mt-12 grid grid-cols-3 gap-3 md:mt-32 md:gap-12">
          {images
            .slice(0, 3)
            .reverse()
            .map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`h-48 w-full object-cover sm:h-96 md:h-12 lg:h-[32rem] xl:h-[85vh] ${index === 1 ? 'translate-y-8 md:translate-y-16' : ''}`}
              />
            ))}
        </section>
      </main>
      <div className="mt-20">
        <LogoBar />
      </div>

      <main className="mx-auto grid w-full grid-cols-1 gap-8 md:gap-16 lg:w-[90%] lg:grid-cols-2 xl:w-4/5 xl:gap-32">
        <img
          src={images[3].src}
          alt={images[3].alt}
          className="top-10 h-64 w-full object-cover sm:h-96 lg:sticky lg:h-[90vh]"
        />
        <div className="flex flex-col gap-8 sm:gap-16">
          {/* {sections.map((section, index) => (
            <div
              key={index}
              className="flex h-auto flex-col items-start justify-center gap-4 text-pretty lg:h-screen"
            >
              <span className="text-xl opacity-70">{section.title}</span>
              <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
                {section.heading}
              </h3>
              <p className="max-w-md text-pretty text-left text-dark/60">
                {section.content}
              </p>
            </div>
          ))} */}
          {sections.map((section, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: section }}
              className="flex h-auto flex-col items-start justify-center gap-4 text-pretty lg:h-screen"
            />
          ))}
        </div>
      </main>
      <LogoBar />
      <FacilityList />
      <UniversalFooter />
    </>
  );
};

export default AboutPage;
