import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import {
    BadgeDollarSign,
    PieChart,
    Repeat,
    ShoppingBag,
    Smartphone,
    CarFront
} from 'lucide-react';

const Investments = () => {

    const summaryData = [
        {
            title: "Total Invested Amount",
            amount: "$150,000",
            icon: BadgeDollarSign,
            bg: "#D1FAE5", // Green-100
            color: "#10B981" // Green-500
        },
        {
            title: "Number of Investments",
            amount: "1,250",
            icon: PieChart,
            bg: "#FCE7F3", // Pink-100
            color: "#EC4899" // Pink-500
        },
        {
            title: "Rate of Return",
            amount: "+5.80%",
            icon: Repeat,
            bg: "#DBEAFE", // Blue-100
            color: "#3B82F6" // Blue-500
        }
    ];

    const yearlyData = [
        { name: '2016', value: 5000 },
        { name: '2017', value: 25000 },
        { name: '2018', value: 18000 },
        { name: '2019', value: 38000 },
        { name: '2020', value: 22000 },
        { name: '2021', value: 30000 },
    ];

    const monthlyData = [
        { name: '2016', value: 12000 },
        { name: '2017', value: 15000 },
        { name: '2018', value: 28000 },
        { name: '2019', value: 22000 },
        { name: '2020', value: 26000 },
        { name: '2021', value: 35000 },
    ];

    const myInvestments = [
        {
            name: "Apple Store",
            category: "E-commerce, Marketplace",
            value: "$54,000",
            return: "+16%",
            isPositive: true,
            icon: ShoppingBag,
            iconBg: "#FFE0EB", // Pink
            iconColor: "#FF82AC"
        },
        {
            name: "Samsung Mobile",
            category: "E-commerce, Marketplace",
            value: "$25,300",
            return: "-4%",
            isPositive: false,
            icon: Smartphone,
            iconBg: "#E7EDFF", // Blue
            iconColor: "#396AFF"
        },
        {
            name: "Tesla Motors",
            category: "Electric Vehicles",
            value: "$8,200",
            return: "+25%",
            isPositive: true,
            icon: CarFront,
            iconBg: "#FFF5D9", // Yellow
            iconColor: "#FFBB38"
        }
    ];

    const trendingStocks = [
        { id: "01.", name: "Trivago", price: "$520", return: "+5%", isPositive: true },
        { id: "02.", name: "Canon", price: "$480", return: "+10%", isPositive: true },
        { id: "03.", name: "Uber Food", price: "$350", return: "-3%", isPositive: false },
        { id: "04.", name: "Nokia", price: "$940", return: "+2%", isPositive: true },
        { id: "05.", name: "Tiktok", price: "$670", return: "-12%", isPositive: false },
    ];

    return (
        <div className="flex flex-col gap-[40px] font-inter text-[#1F2A56]">
            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {summaryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-6 bg-white rounded-[28px] p-6 h-[130px] shadow-soft">
                        <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                            <item.icon size={28} style={{ color: item.color }} />
                        </div>
                        <div>
                            <p className="text-[14px] font-medium text-[#6B7280]">{item.title}</p>
                            <h3 className="text-[24px] font-bold text-[#1F2A56] mt-2">{item.amount}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="flex flex-col xl:flex-row gap-[24px]">
                {/* Yearly Total Investment */}
                <div className="bg-white rounded-[28px] p-7 shadow-card flex-1 xl:max-w-[760px] h-[340px]">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-6">Yearly Total Investment</h2>
                    <div className="h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={yearlyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid vertical={false} stroke="#E6EBF5" strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#718EBF', fontSize: 13 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#718EBF', fontSize: 13 }}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#F59E0B"
                                    strokeWidth={3}
                                    dot={{ r: 6, fill: '#fff', stroke: '#F59E0B', strokeWidth: 3 }}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Monthly Revenue */}
                <div className="bg-white rounded-[28px] p-7 shadow-card w-full xl:w-[360px] h-[340px]">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-6">Monthly Revenue</h2>
                    <div className="h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                                <CartesianGrid vertical={false} stroke="#E6EBF5" strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#718EBF', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#718EBF', fontSize: 12 }}
                                    tickFormatter={(value) => `$${value / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#14B8A6"
                                    strokeWidth={3}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Section: My Investment & Trending Stock */}
            <div className="flex flex-col xl:flex-row gap-[24px]">
                {/* My Investment */}
                <div className="bg-white rounded-[28px] p-7 shadow-card flex-1 xl:max-w-[760px]">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-6">My Investment</h2>
                    <div className="flex flex-col gap-[20px]">
                        {myInvestments.map((item, index) => (
                            <div key={index} className="flex items-center justify-between h-[88px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-[56px] h-[56px] rounded-[15px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.iconBg }}>
                                        <item.icon size={24} style={{ color: item.iconColor }} />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium text-[#1F2A56]">{item.name}</h4>
                                        <span className="text-[13px] text-[#6B7280]">{item.category}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-[16px] font-medium text-[#1F2A56]">Investment Value</h4>
                                    <span className="text-[15px] font-medium text-[#3B41F1]">{item.value}</span>
                                </div>
                                <div className="text-right w-[100px]">
                                    <h4 className="text-[16px] font-medium text-[#1F2A56]">Return Value</h4>
                                    <span className={`text-[15px] font-bold ${item.isPositive ? 'text-[#22C55E]' : 'text-[#FF4D4F]'}`}>
                                        {item.return}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trending Stock */}
                <div className="bg-white rounded-[28px] p-7 shadow-card w-full xl:w-[360px]">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-6">Trending Stock</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="pb-3 text-[14px] font-medium text-[#9CA3AF]">SL No</th>
                                <th className="pb-3 text-[14px] font-medium text-[#9CA3AF]">Name</th>
                                <th className="pb-3 text-[14px] font-medium text-[#9CA3AF]">Price</th>
                                <th className="pb-3 text-[14px] font-medium text-[#9CA3AF] text-right">Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trendingStocks.map((stock, index) => (
                                <tr key={index} className="border-b border-[#F1F5F9] last:border-none">
                                    <td className="py-3 text-[14px] font-medium text-[#1F2A56] h-[56px]">{stock.id}</td>
                                    <td className="py-3 text-[14px] font-medium text-[#1F2A56] h-[56px]">{stock.name}</td>
                                    <td className="py-3 text-[14px] font-medium text-[#1F2A56] h-[56px]">{stock.price}</td>
                                    <td className={`py-3 text-[14px] font-bold text-right h-[56px] ${stock.isPositive ? 'text-[#22C55E]' : 'text-[#FF4D4F]'}`}>
                                        {stock.return}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Investments;
