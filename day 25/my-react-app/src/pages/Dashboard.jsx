import React from "react";
import Chart from "react-apexcharts";
import litecoinLogo from '../assets/litecoin.png';
import bitcoinLogo from '../assets/bitcoin.png';
import ethereumLogo from '../assets/ETH.png';
import Sandglass from '../assets/sandglass.png';
import thunder from '../assets/thunder.png';
const cryptoData = [
    { name: "BTC/USDT", price: "$24,850.10", logo: bitcoinLogo },
    { name: "ETH/USDT", price: "$2,138.87", logo: ethereumLogo },
    { name: "LTC/USDT", price: "$85.22", logo: litecoinLogo },
];

// Candlestick chart config
const candlestickSeries = [{
    data: [
        { x: new Date('2025-05-11'), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date('2025-05-12'), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date('2025-05-13'), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date('2025-05-14'), y: [6635.65, 6651, 6624.12, 6640] },
    ]
}];

const candlestickOptions = {
    chart: {
        type: 'candlestick',
        height: 350,
        background: 'transparent',
        toolbar: { show: false }
    },
    xaxis: {
        type: 'datetime',
        labels: { style: { colors: '#aaa' } }
    },
    yaxis: {
        tooltip: { enabled: true },
        labels: { style: { colors: '#aaa' } }
    }
};

// Donut chart config for Earnings
const donutSeries = [75, 25];
const donutOptions = {
    labels: ['Earned', 'Remaining'],
    colors: ['#22c55e', '#1e1e2f'],
    chart: { type: 'donut' },
    legend: { show: false }
};

export default function Dashboard() {
    return (
        <div className="h-screen overflow-y-auto bg-black text-white font-sans p-4">
            {/* Navbar */}
            <div className="flex justify-between items-center bg-[#1b1b20] p-4 rounded-xl">
                <h1 className="text-2xl font-bold text-orange-400">Dashboard</h1>
                <div className="flex gap-4 items-center">
                    <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm">
                        Buy / Sell
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm">
                        + Add New Crypto
                    </button>
                    <div className="flex items-center gap-2">
                        <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
                        <div className="text-sm"><div>Wade Warren</div></div>
                    </div>
                </div>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {cryptoData.map((coin, index) => (
                    <div key={index} className="bg-[#1b1b20] p-4 rounded-xl flex items-center gap-4">
                        <img src={coin.logo} className="w-10 h-10 object-contain" alt={coin.name} />
                        <div>
                            <p className="text-sm text-gray-400">{coin.name}</p>
                            <h2 className="text-xl font-semibold mt-1">{coin.price}</h2>
                        </div>
                    </div>
                ))}
                <div className="bg-[#1b1b20] p-4 rounded-xl flex flex-col justify-between">
                    <input
                        type="text"
                        className="p-2 rounded bg-[#1e1e2f] border border-gray-700 mb-4"
                        placeholder="Search BTC/ETH"
                    />
                    <div className="flex justify-center">
                        <img src={Sandglass} alt="icon" className="w-16 h-16 object-contain" />
                    </div>
                </div>
            </div>

            {/* Trade, Summary, History */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-[#1b1b20] p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Quick Trade</h3>
                    <input className="mb-2 w-full p-2 rounded bg-[#1e1e2f]" placeholder="Amount BTC" />
                    <input className="mb-2 w-full p-2 rounded bg-[#1e1e2f]" placeholder="Price BTC" />
                    <input className="mb-4 w-full p-2 rounded bg-[#1e1e2f]" placeholder="Total BTC" />
                    <div className="flex gap-2">
                        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full">Buy</button>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded w-full">Sell</button>
                    </div>
                </div>

                <div className="bg-[#1b1b20] p-4 rounded-xl col-span-1 md:col-span-2">
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <h3 className="font-semibold mb-4">Account Summary</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: "This Month", amount: "$3.45K", change: "+4.5%", trend: "last month" },
                                    { label: "This Week", amount: "$1.2K", change: "-31%", trend: "last week" },
                                    { label: "This Year", amount: "$24.8K", change: "+18.9%", trend: "last year" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1e1e2f] p-4 rounded text-center flex flex-col items-center"
                                    >
                                        <p className="text-sm text-gray-400">{item.label}</p>
                                        <p className="text-lg font-bold text-green-400">{item.amount}</p>
                                        <div className="mt-4 flex justify-center items-center">
                                            <img
                                                src={thunder}
                                                alt={`Icon for ${item.label}`}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                        <div className="mt-2 text-center">
                                            <p
                                                className={`text-sm ${item.change.startsWith("-") ? "text-red-400" : "text-green-400"
                                                    }`}
                                            >
                                                {item.change}
                                            </p>
                                            <p className="text-xs text-gray-500">{item.trend}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

                <div className="bg-[#1b1b20] p-4 rounded-xl">
                    <h3 className="font-semibold mb-4">History</h3>
                    {["Bitcoin", "Ethereum", "Litecoin"].map((coin, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-sm font-semibold text-green-400">+ $100.00</p>
                            <p className="text-sm text-gray-400">{coin}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Market Overview, Trades, Earnings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-8">
                <div className="bg-[#1b1b20] p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Market Overview</h3>
                    <Chart options={candlestickOptions} series={candlestickSeries} type="candlestick" height={300} />
                </div>

                <div className="bg-[#1b1b20] p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Recent Trading Activities</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-gray-400">
                                    <th className="py-1">Name</th>
                                    <th>Price</th>
                                    <th>24h%</th>
                                    <th>Market Cap</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((item) => (
                                    <tr key={item} className="text-gray-300 border-t border-gray-700">
                                        <td className="py-1">Bitcoin</td>
                                        <td>$24,000</td>
                                        <td className="text-green-400">+4.5%</td>
                                        <td>$473B</td>
                                        <td>$78B</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {[1, 2, 3].map((item) => (
                                    <tr key={item} className="text-gray-300 border-t border-gray-700">
                                        <td className="py-1">ethereum</td>
                                        <td>$27,000</td>
                                        <td className="text-green-400">+4.5%</td>
                                        <td>$473B</td>
                                        <td>$799B</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {[1, 2, 3].map((item) => (
                                    <tr key={item} className="text-gray-300 border-t border-gray-700">
                                        <td className="py-1">litecoin</td>
                                        <td>$37,000</td>
                                        <td className="text-green-400">+4.5%</td>
                                        <td>$493B</td>
                                        <td>$799B</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-[#1b1b20] p-4 rounded-xl">
                    <h3 className="font-semibold mb-4">Earnings</h3>
                    <Chart options={donutOptions} series={donutSeries} type="donut" width="100%" />
                </div>
            </div>
        </div>
    );
}
