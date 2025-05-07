import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const ACCESS_KEY = "EXFfIcb2wOmsI0MGLRl_91WvWSLr95mDddKpUgHwrCM";

const fetchPhotos = async () => {
  const response = await fetch('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Unsplash photos');
  }

  return response.json();
};


const PhotosList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['unsplashPhotos'],               //Identifies this query 
    queryFn: fetchPhotos,                          //async function that fetches data from the Unsplash API
  });

  const [index, setIndex] = useState(0);

  if (isLoading) return <p className="text-center mt-8">Loading photo...</p>;
  if (isError) return <p className="text-center mt-8 text-red-500">Failed to load photo.</p>;

  const currentPhoto = data[index];                     //access a specific photo from the data array based on the index

  const handleChange = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <img
        src={currentPhoto.urls.small}
        alt={currentPhoto.alt_description}
        className="rounded-xl object-cover mb-4 shadow"
      />
      <p className="text-sm mb-4 text-gray-700">
        {currentPhoto.alt_description}
      </p>
      <button
        onClick={handleChange}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Next Photo
      </button>
    </div>
  );
};

export default PhotosList;
