// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Utility function to read/write to localStorage dynamically
// const getCachedData = (key) => {
//   const cachedData = localStorage.getItem(key);
//   return cachedData ? JSON.parse(cachedData) : null;
// };

// const setCachedData = (key, data) => {
//   localStorage.setItem(key, JSON.stringify(data));
// };

// const useFetchAPI = (key, url) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response = await axios.get(url);
//       // console.log('API Response:', response.data); // Log response
//       setCachedData(key, response.data); // Save to localStorage
//       return response.data;
//     },
//     initialData: () => {
//       const cachedData = getCachedData(key);
//       // console.log('Cached Data:', cachedData); // Log cached data
//       return cachedData;
//     },
//     onSuccess: (data) => {
//       // console.log('Data fetched successfully:', data); // Log success
//       setCachedData(key, data);
//     },
//     cacheTime: 0, // Disable caching by react-query
//     staleTime: 0, // Force fetching on every mount
//   });
// };

// export default useFetchAPI;

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Reusable API fetching hook
// const useFetchAPI = (key, url) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response = await axios.get(url);
//       // console.log('API Response:', response.data); // Log response
//       return response.data;
//     },
//     cacheTime: 0, // Disable caching by react-query
//     staleTime: 0, // Force fetching on every mount
//   });
// };

// export default useFetchAPI;

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Reusable API fetching hook with localStorage caching
// const useFetchAPI = (key, url) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       // Check if data exists in localStorage
//       const cachedData = localStorage.getItem(key);
//       if (cachedData) {
//         console.log('Using cached data:', key);
//         return JSON.parse(cachedData);
//       }

//       // Fetch data from API
//       console.log('Fetching fresh data from API:', url);
//       const response = await axios.get(url);

//       // Save the fetched data to localStorage
//       localStorage.setItem(key, JSON.stringify(response.data));

//       return response.data;
//     },
//     staleTime: Infinity, // Prevent automatic refetching by react-query
//     cacheTime: Infinity, // Cache indefinitely
//   });
// };

// // Clear cached data for a specific key
// export const clearCache = (key) => {
//   localStorage.removeItem(key);
// };

// export default useFetchAPI;

// ! Refactor the useFetchAPI hook to cache data in localStorage and use etag for conditional fetching: Refetch api on page reload if data is stale
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchAPI = (key, url) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const cachedData = JSON.parse(localStorage.getItem(key)) || null;

      const headers = {};
      if (cachedData?.etag) {
        headers['If-None-Match'] = cachedData.etag;
      }

      try {
        const response = await axios.get(url, { headers });
        const etag = response.headers.etag;

        // Save new data and etag in localStorage
        localStorage.setItem(
          key,
          JSON.stringify({
            data: response.data,
            etag,
          }),
        );

        return response.data;
      } catch (error) {
        if (error.response?.status === 304) {
          // Use cached data if server returns 304
          return cachedData.data;
        }
        throw error;
      }
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export default useFetchAPI;
