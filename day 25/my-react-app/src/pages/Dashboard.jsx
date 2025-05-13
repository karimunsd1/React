import { useState } from 'react';
import litecoinLogo from '../assets/litecoin.png'; // Import the image from the assets folder
import bitcoinLogo from '../assets/bitcoin.png';
import ethereumLogo from '../assets/ETH.png';

export default function Dashboard() {
    const [selectedCoin, setSelectedCoin] = useState('ltc');
    const coinOptions = [
        { value: 'btc', label: 'Bitcoin' },
        { value: 'eth', label: 'Ethereum' },
        { value: 'ltc', label: 'Litecoin' },
    ];

    const getCoinLogo = (coin) => {
        switch (coin) {
            case 'ltc':
                return litecoinLogo;
            case 'btc':
                return bitcoinLogo;
            case 'eth':
                return ethereumLogo;
            default:
                return '';
        }
    };

    return (
        <div className="ml-64 pt-16 p-6 bg-[#111] text-white min-h-screen">
            <header className="w-full flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-bold">Wade Warren</p>
                            <p className="text-xs text-orange-500">Super Admin</p>
                        </div>
                    </div>

                </div>
            </header>

            {/* Crypto Selector Section */}
            <section className="w-full bg-[#222] p-4 rounded shadow mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Selected Crypto Display with Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src={getCoinLogo(selectedCoin)}
                            alt="Selected Crypto"
                            className="w-8 h-8"
                        />
                        <span className="text-sm font-bold">
                            {
                                coinOptions.find((coin) => coin.value === selectedCoin)?.label
                            }
                        </span>
                    </div>

                    {/* Select Coin */}
                    <select
                        value={selectedCoin}
                        onChange={(e) => setSelectedCoin(e.target.value)}
                        className="text-sm font-bold p-2 rounded bg-black text-white"
                    >
                        {coinOptions.map((coin) => (
                            <option key={coin.value} value={coin.value}>
                                {coin.label}
                            </option>
                        ))}
                    </select>

                    {/* Currency Pair Select */}
                    <select className="bg-black text-gray-400 px-2 py-1 rounded focus:outline-none">
                        <option>BTC/USD</option>
                        <option>ETH/USD</option>
                        <option>LTC/USD</option>
                    </select>
                </div>

                {/* Market Stats */}
                <div className="flex items-center gap-6">
                    <div className="text-center">

                        <p className="text-orange-500 font-bold">$37,390.00</p>
                        <p className="text-xs text-gray-400">24h changes</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400">37,440.01</p>
                        <p className="text-xs text-gray-400">24h high</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400">37,327.30</p>
                        <p className="text-xs text-gray-400">24h low</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400">37,390.00</p>
                        <p className="text-xs text-gray-400">24h volume (BTC)</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Buy BTC</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Add New Crypto</button>
                </div>

            </section>

            {/* Notifications Row */}
            <div className="w-full flex justify-end items-center mb-6">
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-orange-500">
                        <i className="fas fa-bell"></i>
                    </button>
                    <button className="text-gray-400 hover:text-orange-500">
                        <i className="fas fa-envelope"></i>
                    </button>
                </div>
            </div>

            {/* Crypto Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 w-full">
                <div className="bg-[#222] p-4 rounded shadow">
                    <img
                        src={bitcoinLogo}
                        alt="Bitcoin"
                        className="w-8 h-8 mx-auto mb-2"
                    />
                    <h2 className="text-sm text-gray-400">BTC/USDT</h2>
                    <p className="text-xl font-bold">$34,850.10</p>
                </div>
                <div className="bg-[#222] p-4 rounded shadow">
                    <img
                        src={ethereumLogo}
                        alt="Bitcoin"
                        className="w-8 h-8 mx-auto mb-2"
                    />
                    <h2 className="text-sm text-gray-400">ETH/USDT</h2>
                    <p className="text-xl font-bold">$2,138.87</p>
                </div>
                <div className="bg-[#222] p-4 rounded shadow">
                    <img
                        src={litecoinLogo}
                        alt="Bitcoin"
                        className="w-8 h-8 mx-auto mb-2"
                    />
                    <h2 className="text-sm text-gray-400">LTC/USDT</h2>
                    <p className="text-xl font-bold">$24,850.10</p>
                </div>

                <div className="bg-[#222] p-4 rounded shadow flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search BTC/ETH"
                        className="bg-black text-gray-400 px-4 py-2 rounded w-full focus:outline-none"
                    />
                </div>
            </section>

            {/* Market Overview and History */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                <div className="bg-[#222] p-4 rounded shadow col-span-2">
                    <h2 className="text-sm text-gray-400 mb-4">Market Overview</h2>
                    <div className="h-40 bg-black rounded"></div>
                </div>
                <div className="bg-[#222] p-4 rounded shadow">
                    <h2 className="text-sm text-gray-400 mb-4">History</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                            <span>Bitcoin</span>
                            <span>$34,850.10</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Ethereum</span>
                            <span>$2,138.87</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Litecoin</span>
                            <span>$24,850.10</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Recent Activity & Transfer */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 w-full">
                <div className="bg-[#222] p-4 rounded shadow">
                    <h2 className="text-sm text-gray-400 mb-4">Recent Trading Activities</h2>
                    <div className="h-40 bg-black rounded"></div>
                </div>
                <div className="bg-[#222] p-4 rounded shadow">
                    <h2 className="text-sm text-gray-400 mb-4">Quick Transfer</h2>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Amount BTC"
                            className="bg-black text-gray-400 px-4 py-2 rounded w-full focus:outline-none"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Send</button>
                    </div>
                </div>
            </section>

            {/* Quick Trade Section */}
            <section className="bg-[#222] p-4 rounded shadow w-full max-w-md mx-auto mb-6">
                <h2 className="text-sm font-bold text-white mb-4">Quick Trade</h2>
                <div className="flex items-center justify-between bg-black p-2 rounded mb-4">
                    <div className="flex items-center gap-2">
                        <img src={bitcoinLogo} alt="Bitcoin" className="w-6 h-6" />
                        <span className="text-sm text-gray-300">561,511 BTC</span>
                    </div>
                    <button className="text-gray-400 hover:text-orange-500">
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Amount BTC</label>
                        <input
                            type="text"
                            placeholder="1.200000"
                            className="w-full bg-black text-gray-300 px-3 py-2 rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Price BPL</label>
                        <input
                            type="text"
                            placeholder="0.000000"
                            className="w-full bg-black text-gray-300 px-3 py-2 rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Total BPL</label>
                        <input
                            type="text"
                            placeholder="0.000000"
                            className="w-full bg-black text-gray-300 px-3 py-2 rounded focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center gap-2">
                        <i className="fas fa-arrow-up"></i> Buy
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center gap-2">
                        <i className="fas fa-arrow-down"></i> Sell
                    </button>
                </div>
            </section>
        </div>
    );
}
