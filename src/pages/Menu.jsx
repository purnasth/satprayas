import React from 'react';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';
// import foodMenu from '../assets/menu/menu.pdf';
import ReservationWhatsApp from '../components/ui/ReservationWhatsApp';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';

const Menu = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: menuPage,
    isLoading,
    isError,
  } = useFetchAPI('menuPage', `${apiUrl}menu-page`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const {
    heading,
    description,
    menuPdf,
    meta_title,
    meta_description,
    meta_keywords,
  } = menuPage;

  console.log(menuPdf.link);

  return (
    <>
      <Meta
        meta_title={`${meta_title ? meta_title : 'Food Menu | Satprayas Nepal'}`}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl="https://satprayas-nepal.com/food-menu"
      />
      <main>
        <Title title={heading} description={description} />

        <div className="mx-auto mt-8 flex justify-center flex-col gap-8 md:gap-16">
          {menuPdf.map((pdf, index) => (
            <iframe
              key={index}
              src={pdf.link}
              className="h-[80vh] w-full border-none md:h-[110vh]"
              title="Food Menu"
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="mx-auto h-32 w-px bg-orange-300/30" />
          <ReservationWhatsApp />
        </div>
      </main>
      <UniversalFooter />
    </>
  );
};

export default Menu;
