import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapSection from './components/MapSection';
import PlacesListContainer from './components/PlacesListContainer';

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1">
        <div className="w-1/2 p-6 overflow-y-auto bg-white">
          <PlacesListContainer
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </div>
        <div className="w-1/2">
          <MapSection />
        </div>
      </div>
    </div>
  );
}