import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapSection from './components/MapSection';
import PlacesListContainer from './components/PlacesListContainer';

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/2 p-6 overflow-y-auto bg-white md:ml-4">
          <PlacesListContainer
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </div>
        <div className="w-full md:w-1/2 order-first md:order-none">
          <MapSection selectedPlace={selectedPlace} />
        </div>
      </div>
    </div>
  );
}
