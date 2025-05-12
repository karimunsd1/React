import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Share2, Bookmark } from 'lucide-react';
import sliders from "../assets/sliders.svg";

const places = [
    {
        id: 1,
        city: 'osaka',
        name: 'Osaka Luxury Suites, 5 min walk to Castle',
        district: 'Traditional District',
        price: '$870 USD',
        rating: 4.8,
        reviews: 112,
        image:
            'https://tse4.mm.bing.net/th?id=OIP.1fnFPa4xTbTxX5a0MheOSQHaE8&pid=Api&P=0&h=180',
        tag: 'Popular',
        amenities: ['Restaurant', 'Free Wifi'],
    },
    {
        id: 2,
        city: 'osaka',
        name: 'Osaka Bayview Hotel',
        district: 'Modern District',
        price: '$285 USD',
        rating: 3.2,
        reviews: 96,
        image:
            'https://live.staticflickr.com/1647/25909857681_d150625142_b.jpg',
        amenities: ['Pool', 'Free Wifi'],
    },
    {
        id: 3,
        city: 'osaka',
        name: 'Namba Grand Stay Hotel',
        district: 'Namba District',
        price: '$460 USD',
        rating: 4.7,
        reviews: 134,
        image: 'https://namba.hotelkeihan.co.jp/wp-content/uploads/sites/431/2023/05/A_2800_%E3%83%90%E3%83%B3%E3%82%AF%E3%83%99%E3%83%83%E3%83%89%E3%83%AB%E3%83%BC%E3%83%A02-960x550.jpg',
        amenities: ['Free Wifi', 'Airport Shuttle',],
        tag: 'Top Rated',
    },
    {
        id: 4,
        city: 'osaka',
        name: 'Umeda Skyview Hotel & Spa',
        district: 'Umeda District',
        price: '$720 USD',
        rating: 4.9,
        reviews: 210,
        image: 'https://www3.apahotel.com/image/842gensen8comforttwin.jpg',
        amenities: ['Spa', 'Rooftop Bar', 'Gym'],
        tag: 'Luxury',
    },


    {
        id: 5,
        city: 'tokyo',
        name: 'Cozy Neo Tokyo Inn',
        district: 'Cyberpunk District',
        price: '$480 USD',
        rating: 4.8,
        reviews: 112,
        image: 'https://wallpaper.dog/large/5567438.jpg',
        amenities: ['Transport', 'Self Check In'],
    },

    {
        id: 6,
        city: "tokyo",
        name: "Tokyo Tower View Apartment",
        district: "Minato",
        price: "$750 USD",
        rating: 4.7,
        reviews: 98,
        image: "https://imgcdn.stablediffusionweb.com/2024/5/9/954b4609-912d-4c53-9d50-57188393cc83.jpg",
        amenities: ["City View", "Washer", "Kitchen"],
    },
    {
        id: 7,
        city: "tokyo",
        name: "Shinjuku Business Hotel",
        district: "Shinjuku",
        price: "$390 USD",
        rating: 4.1,
        reviews: 150,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        amenities: ["Work Desk", "24hr Check-in"],
    },


    {
        id: 8,
        city: 'kyoto',
        name: 'Kyoto Zen Retreat',
        district: 'Gion District',
        price: '$820 USD',
        rating: 4.9,
        reviews: 150,
        image:
            'https://th.bing.com/th/id/OIP.r97_AQtiZtAlsc6L__CmCwHaE8?cb=iwc2&rs=1&pid=ImgDetMain',
        amenities: ['Spa', 'Traditional Rooms'],
    },
    {
        id: 9,
        city: 'kyoto',
        name: 'Kyoto Bamboo Forest Hotel',
        district: 'Arashiyama District',
        price: '$540 USD',
        rating: 4.5,
        reviews: 98,
        image:
            'https://images.squarespace-cdn.com/content/v1/5bbcf00a9b8fe874ed2f03d0/02277fae-15de-4a9e-bcc4-101bf6df6adb/kyoto-bamboo-grove-Adashino-Nenbutsuji.jpg?format=1500w',
        amenities: ['Free Wifi', 'Breakfast Included'],
    },
    {
        id: 10,
        city: "kyoto",
        name: "Minimalist Ryokan Kyoto",
        district: "Higashiyama",
        price: "$310 USD",
        rating: 4.2,
        reviews: 75,
        image: "https://th.bing.com/th/id/OIP.dVfvR0nm200-Wf6LW6Am9gHaE7?cb=iwc2&rs=1&pid=ImgDetMain",
        amenities: ["Tatami Mats", "Breakfast"],
    },
    {
        id: 11,
        city: 'kyoto',
        name: 'Kyoto Gion Ryokan Yachiyo',
        district: 'Gion District',
        price: '$410 USD',
        rating: 4.8,
        reviews: 168,
        image: 'https://pix10.agoda.net/hotelImages/178116/-1/549cb00bc7e6e31465fd85904cd2e367.jpg?s=1024x768',
        amenities: ['Traditional Meals', 'Japanese Garden', 'Onsen'],
        tag: 'Authentic Stay',
    },
];

const PlacesList = () => {
    const [selectedCity, setSelectedCity] = useState('osaka');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [showDateRange, setShowDateRange] = useState();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [activePriceFilter, setActivePriceFilter] = useState(null);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    useEffect(() => {
        handleSearch();
    }, [selectedCity, searchQuery, priceRange, dateRange]);

    const handleSearch = () => {
        let result = places.filter(
            (place) =>
                place.city === selectedCity
        );


        result = result.filter((place) => {
            const priceNum = parseInt(place.price.replace(/\D/g, ''));
            return priceNum >= priceRange[0] && priceNum <= priceRange[1];
        });
        if (searchQuery.trim() !== '') {
            result = result.filter((place) =>
                place.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (activePriceFilter === 'highest') {
            result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        } else if (activePriceFilter === 'lowest') {
            result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        }

        setFilteredPlaces(result);
    };

    const handleClear = () => {
        setSearchQuery('');
        setDateRange([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
        setPriceRange([0, 1000]);
        setFilteredPlaces(places.filter((p) => p.city === selectedCity));
    };


    return (
        <div className="w-full min-h-screen p-6 overflow-y-auto bg-gray-50 relative">
            <div className="absolute top-4 right-4 flex gap-4">

                <button className="p-2 rounded-full hover:bg-gray-200">
                    <Share2 size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <Bookmark size={20} />
                </button>
            </div>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">
                        {filteredPlaces.length} Places in <span className="text-indigo-600">{selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}, Japan</span>
                    </h2>
                    <p className="text-gray-600">Easily book hotels and search places quickly.</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 border rounded-full px-4 py-2">
                    <span className="text-red-500">●</span>
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="outline-none bg-transparent"
                    >
                        <option value="osaka">Osaka, Japan</option>
                        <option value="tokyo">Tokyo, Japan</option>
                        <option value="kyoto">Kyoto, Japan</option>
                    </select>
                </div>

                <button
                    onClick={() => setShowDateRange(!showDateRange)}
                    className="flex items-center gap-2 border rounded-full px-4 py-2"
                >
                    <span role="img" aria-label="calendar">📅</span>
                    <span>{`${format(dateRange[0].startDate, 'MMM dd')} - ${format(
                        dateRange[0].endDate,
                        'MMM dd'
                    )}`}</span>
                </button>

                <div className="flex items-center gap-2 border rounded-full px-4 py-2">
                    <select className="outline-none bg-transparent">
                        <option value="2500">$2,500+</option>
                        <option value="1000">$1,000 - $2,500</option>
                        <option value="500">$500 - $1,000</option>
                        <option value="below500">Below $500</option>
                    </select>
                </div>

                <button className="flex items-center gap-2 border rounded-full px-4 py-2">
                    <img src={sliders} alt="Filter" className="w-5 h-5" />
                    <span>Filter</span>
                </button>

                <div className="flex-1 flex items-center border rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search your destinations..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setTimeout(handleSearch, 0);
                        }}
                        className="flex-1 outline-none"
                    />
                </div>

                <button
                    onClick={handleClear}
                    className="border rounded-full px-4 py-2 text-gray-500"
                >
                    Clear
                </button>
                <button
                    onClick={handleSearch}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-full"
                >
                    Search
                </button>
            </div>

            <div className="flex justify-between items-center mb-6">
                {selectedCity === 'tokyo' ? (
                    <div className="flex flex-col w-full max-w-md px-4">
                        <label className="text-sm text-gray-700 mb-1"><strong>Price Range:</strong> ${priceRange[0]} - ${priceRange[1]}</label>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            step="50"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                            className="mb-2"
                        />

                    </div>
                ) : (
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                setActivePriceFilter('highest');
                                setTimeout(handleSearch, 0);
                            }}
                            className={`px-4 py-2 rounded-full ${activePriceFilter === 'highest'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Highest Price
                        </button>
                        <button
                            onClick={() => {
                                setActivePriceFilter('lowest');
                                setTimeout(handleSearch, 0);
                            }}
                            className={`px-4 py-2 rounded-full ${activePriceFilter === 'lowest'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Lowest Price
                        </button>
                    </div>
                )}
            </div>


            {showDateRange && (
                <div className="mb-6">
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDateRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                        className="shadow-md"
                    />
                </div>
            )}

            {filteredPlaces.length > 0 ? (
                <div className="space-y-6">
                    {filteredPlaces.map((place) => (
                        <div
                            key={place.id}
                            className="relative flex flex-col md:flex-row border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="relative w-full md:w-1/3 h-48">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover"
                                />

                            </div>
                            <div className="p-4 flex-1 relative">
                                <h3 className="text-lg font-semibold">{place.name}</h3>
                                {['Osaka Luxury Suites, 5 min walk to Castle', 'Osaka Bayview Hotel', 'Namba Grand Stay Hotel', 'Umeda Skyview Hotel & Spa'].includes(place.name) && (
                                    <p className="text-sm text-gray-600">
                                        Enjoy stunning views of Osaka Bay from your room, with easy access to Universal Studios Japan.
                                    </p>
                                )}
                                <p className="text-sm text-gray-600">
                                    {place.district}, {place.city.charAt(0).toUpperCase() + place.city.slice(1)}
                                </p>
                                <p className="mt-1 text-yellow-500">
                                    {'★'.repeat(Math.round(place.rating))}{' '}
                                    <span className="text-sm text-gray-500">({place.rating})</span>
                                </p>
                                <div className="flex flex-wrap mt-2 gap-2">
                                    {place.amenities.map((amenity, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-4 right-4 text-lg font-bold text-indigo-600">
                                    {place.price}
                                </div>
                                {place.tag && (
                                    <div className="absolute bottom-10 right-4 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                                        {place.tag}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No places found matching your search.</p>
            )}
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full w-full">
                Load More +
            </button>
        </div>
    );
};

export default PlacesList;