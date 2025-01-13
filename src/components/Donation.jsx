import React from 'react';
import useFetchAPI from '../hooks/useFetchAPI';

const Donation = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
  } = useFetchAPI('siteRegulars', `/api/siteregulars.json`);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) {
    console.error(isError);
    return (
      <p className="text-center text-red-500">Sorry, something went wrong.</p>
    );
  }

  const { booking_QR } = siteRegulars;

  return (
    <section className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-1 flex-col items-center gap-4">
          <img
            src={booking_QR}
            alt="Donation QR Code"
            className="h-48 w-48 object-contain"
          />
          <p className="max-w-xs text-center text-sm">
            Scan the QR code to make a donation and be the light in someone's
            life.
          </p>
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-8 text-3xl underline">Bank Details</h3>
          <table className="w-full table-auto text-left">
            <tbody>
              <tr>
                <td className="font-semibold">Bank Name:</td>
                <td>Himalayan Bank Ltd.</td>
              </tr>
              <tr>
                <td className="font-semibold">Bank Address:</td>
                <td>Bhaktapur Branch, Nepal</td>
              </tr>
              <tr>
                <td className="font-semibold">Swift Code:</td>
                <td>HIMANPKA</td>
              </tr>
              <tr>
                <td className="font-semibold">Account Number:</td>
                <td>004-04699420011</td>
              </tr>
              <tr>
                <td className="font-semibold">Contact:</td>
                <td>+977 9851063716, +977 9851247627</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>
          <em>
            (Please mention your name and donation purpose, so we can easily
            allocate the funds properly).
          </em>
        </p>
      </div>

      <h3 className="my-32 text-center text-7xl leading-snug">
        Donations from you are what allow <strong className='text-green-700 font-normal'>Satprayas Nepal</strong> to survive and
        florish. We are grateful for your support.
      </h3>
    </section>
  );
};

export default Donation;
