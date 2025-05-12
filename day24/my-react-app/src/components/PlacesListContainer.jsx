import React, { useState } from 'react';
import PlacesList from './PlacesList';


export default function PlacesListContainer() {
    const [selectedCity, setSelectedCity] = useState("osaka");

    const allPlaces = [

        {
            id: 1,
            city: "osaka",
            name: "Osaka Luxury Suites, 5 min walk to Castle",
            district: "Traditional District",
            price: "$870 USD",
            rating: 4.8,
            reviews: 112,
            image: "https://tse4.mm.bing.net/th?id=OIP.1fnFPa4xTbTxX5a0MheOSQHaE8&pid=Api&P=0&h=180",
            tag: "Popular",
            amenities: ["Restaurant", "Free Wifi"],
        },
        {
            id: 2,
            city: "osaka",
            name: "Osaka Bayview Hotel",
            district: "Modern District",
            price: "$285 USD",
            rating: 3.2,
            reviews: 96,
            image: "https://live.staticflickr.com/1647/25909857681_d150625142_b.jpg",
            amenities: ["Pool", "Free Wifi"],
        },


        {
            id: 3,
            city: "tokyo",
            name: "Cozy Neo Tokyo Inn",
            district: "Cyberpunk District",
            price: "$480 USD",
            rating: 4.8,
            reviews: 112,
            image: "https://wallpaper.dog/large/5567438.jpg",
            amenities: ["Transport", "Self Check In"],
        },
        {
            id: 4,
            city: "tokyo",
            name: "Shinjuku Night View Hotel",
            district: "Entertainment District",
            price: "$690 USD",
            rating: 4.6,
            reviews: 87,
            image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/japan-1837210_1280.jpg",
            amenities: ["Free Wifi", "Bar", "Rooftop Access"],
        },


        {
            id: 5,
            city: "kyoto",
            name: "Kyoto Zen Retreat",
            district: "Gion District",
            price: "$820 USD",
            rating: 4.9,
            reviews: 150,
            image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/kyoto-1837213_1280.jpg",
            amenities: ["Spa", "Traditional Rooms"],
        },
        {
            id: 6,
            city: "kyoto",
            name: "Kyoto Bamboo Forest Hotel",
            district: "Arashiyama District",
            price: "$540 USD",
            rating: 4.5,
            reviews: 98,
            image: "https://cdn.pixabay.com/photo/2018/10/09/16/28/arashiyama-3733878_1280.jpg",
            amenities: ["Free Wifi", "Breakfast Included"],
        },
    ];

    const filteredPlaces = allPlaces.filter(place => place.city === selectedCity);

    return (


        <PlacesList
            places={filteredPlaces}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
        />

    );
}