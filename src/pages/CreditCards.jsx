import React from 'react';
import CreditCard from '../components/CreditCard';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
    CreditCard as CardIcon,
    Banknote,
    Globe,
    Smartphone,
    Lock,
    ShieldAlert,
    FileText
} from 'lucide-react';

const CreditCards = () => {

    // --- Data ---
    const myCards = [
        {
            balance: 5756,
            holder: "Eddy Cusuma",
            validThru: "12/22",
            number: "3778 **** **** 1234",
            theme: "dark",
            gradient: "linear-gradient(135deg, #4F7BFF 0%, #3B41F1 100%)" // Blue
        },
        {
            balance: 5756,
            holder: "Eddy Cusuma",
            validThru: "12/22",
            number: "3778 **** **** 1234",
            theme: "dark",
            gradient: "linear-gradient(135deg, #3B41F1 0%, #1F2296 100%)" // Dark Blue
        },
        {
            balance: 5756,
            holder: "Eddy Cusuma",
            validThru: "12/22",
            number: "3778 **** **** 1234",
            theme: "light",
            gradient: "#FFFFFF"
        }
    ];

    // Colors: Blue, Pink, Teal, Yellow
    const expenseData = [
        { name: 'DBL Bank', value: 30, color: '#3B41F1' }, // Blue
        { name: 'BRC Bank', value: 30, color: '#EC4899' }, // Pink
        { name: 'ABM Bank', value: 20, color: '#14B8A6' }, // Teal
        { name: 'MCP Bank', value: 20, color: '#F59E0B' }, // Yellow
    ];

    const cardList = [
        { type: "Secondary", bank: "DBL Bank", number: "**** **** 5600", name: "William", icon: CardIcon, bg: "#E7EDFF", color: "#3B41F1" },
        { type: "Secondary", bank: "BRC Bank", number: "**** **** 4300", name: "Michel", icon: Banknote, bg: "#FFE0EB", color: "#FF82AC" },
        { type: "Secondary", bank: "ABM Bank", number: "**** **** 7560", name: "Edward", icon: FileText, bg: "#FFF5D9", color: "#FFBB38" },
    ];

    const cardSettings = [
        { title: "Block Card", sub: "Instantly block your card", icon: ShieldAlert, bg: "#FFF5D9", color: "#FFBB38" },
        { title: "Change Pin Code", sub: "Choose another pin code", icon: Lock, bg: "#E7EDFF", color: "#3B41F1" },
        { title: "Add to Google Pay", sub: "Withdraw without any card", icon: Globe, bg: "#FFE0EB", color: "#FF82AC" },
        { title: "Add to Apple Pay", sub: "Withdraw without any card", icon: Smartphone, bg: "#DCFAF8", color: "#16DBCC" },
        { title: "Add to Apple Store", sub: "Withdraw without any card", icon: Smartphone, bg: "#DCFAF8", color: "#16DBCC" },
    ];

    return (
        <div className="flex flex-col gap-[30px] font-inter text-[#1F2A56] w-full max-w-[1400px]">

            {/* My Cards Section */}
            <div>
                <h2 className="text-[18px] font-semibold text-[#1F2A56] mb-[20px]">My Cards</h2>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px]">
                    {myCards.map((card, index) => (
                        <div key={index} className="h-[235px] w-full">
                            <CreditCard
                                balance={card.balance}
                                holder={card.holder}
                                validThru={card.validThru}
                                number={card.number}
                                theme={card.theme}
                                className="w-full h-full"
                                style={{ background: card.gradient }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle Section: Stats & List - RESPONSIVE GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[24px]">

                {/* Left: Card Expense Statistics */}
                <div className="bg-white rounded-[28px] p-[24px] shadow-soft flex flex-col items-center w-full h-full min-h-[300px]">
                    <h2 className="text-[18px] font-semibold text-[#1F2A56] mb-[0px] w-full text-left">Card Expense Statistics</h2>

                    <div className="flex flex-col items-center justify-center w-full flex-1">
                        {/* Donut Chart */}
                        <div className="h-[160px] w-[160px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={expenseData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={80}
                                        paddingAngle={6}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {expenseData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Legend */}
                        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[14px] mt-[20px]">
                            {expenseData.map((item, i) => (
                                <div key={i} className="flex items-center gap-[10px]">
                                    <span className="w-[10px] h-[10px] rounded-full shrink-0" style={{ background: item.color }}></span>
                                    <span className="text-[13px] text-[#6B7280] font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Card List */}
                <div className="flex flex-col xl:col-span-2 w-full">
                    <h2 className="text-[18px] font-semibold text-[#1F2A56] mb-[20px]">Card List</h2>
                    <div className="flex flex-col gap-[20px]">
                        {cardList.map((card, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[24px] px-[20px] shadow-none flex items-center w-full overflow-hidden"
                                style={{
                                    height: "92px",
                                    display: "grid",
                                    gridTemplateColumns: "60px 1.5fr 1.5fr 2fr 1.5fr 120px",
                                    gap: "10px",
                                    alignItems: "center"
                                }}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-[60px] h-[60px]">
                                    <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: card.bg }}>
                                        <card.icon size={22} style={{ color: card.color }} />
                                    </div>
                                </div>

                                {/* Card Type */}
                                <div className="flex flex-col gap-1 min-w-0">
                                    <span className="text-[14px] font-semibold text-[#1F2A56] truncate">Card Type</span>
                                    <span className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal truncate">{card.type}</span>
                                </div>

                                {/* Bank */}
                                <div className="flex flex-col gap-1 min-w-0">
                                    <span className="text-[14px] font-semibold text-[#1F2A56] truncate">Bank</span>
                                    <span className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal truncate">{card.bank}</span>
                                </div>

                                {/* Card Number */}
                                <div className="flex flex-col gap-1 min-w-0">
                                    <span className="text-[14px] font-semibold text-[#1F2A56] truncate">Card Number</span>
                                    <span className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal tracking-[1.5px] truncate">{card.number}</span>
                                </div>

                                {/* Namain Card */}
                                <div className="hidden sm:flex flex-col gap-1 min-w-0">
                                    <span className="text-[14px] font-semibold text-[#1F2A56] truncate">Namain Card</span>
                                    <span className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal truncate">{card.name}</span>
                                </div>

                                {/* Link */}
                                <button className="text-[14px] font-medium text-[#3B41F1] text-right w-full whitespace-nowrap">View Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Add New Card & Card Settings */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px]">
                {/* Add New Card (2 Cols) */}
                <div className="xl:col-span-2 bg-white rounded-[28px] p-8 shadow-soft">
                    <h2 className="text-[18px] font-semibold text-[#1F2A56] mb-[20px]">Add New Card</h2>
                    <p className="text-[14px] text-[#6B7280] mb-[24px] leading-7 max-w-2xl">
                        Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
                    </p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-[#1F2A56]">Card Type</label>
                            <input type="text" placeholder="Classic" className="h-[50px] rounded-[15px] border-none bg-[#F4F5F7] px-5 text-[14px] text-[#718EBF] placeholder-[#718EBF] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-[#1F2A56]">Name On Card</label>
                            <input type="text" placeholder="My Cards" className="h-[50px] rounded-[15px] border-none bg-[#F4F5F7] px-5 text-[14px] text-[#718EBF] placeholder-[#718EBF] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-[#1F2A56]">Card Number</label>
                            <input type="text" placeholder="**** **** **** ****" className="h-[50px] rounded-[15px] border-none bg-[#F4F5F7] px-5 text-[14px] text-[#718EBF] placeholder-[#718EBF] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-[#1F2A56]">Expiration Date</label>
                            <input type="text" placeholder="25 January 2025" className="h-[50px] rounded-[15px] border-none bg-[#F4F5F7] px-5 text-[14px] text-[#718EBF] placeholder-[#718EBF] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                        </div>
                        <button type="button" className="h-[50px] bg-[#3B41F1] text-white font-medium text-[15px] rounded-[15px] mt-2 w-[160px] shadow-lg shadow-[#3B41F1]/30">Add Card</button>
                    </form>
                </div>

                {/* Card Settings (1 Col) */}
                <div className="bg-white rounded-[28px] p-8 shadow-soft h-full">
                    <h2 className="text-[18px] font-semibold text-[#1F2A56] mb-[20px]">Card Setting</h2>
                    <div className="flex flex-col gap-[20px]">
                        {cardSettings.map((item, index) => (
                            <div key={index} className="flex items-center gap-[20px] cursor-pointer">
                                <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                                    <item.icon size={24} style={{ color: item.color }} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[15px] font-medium text-[#1F2A56]">{item.title}</h4>
                                    <span className="text-[13px] text-[#6B7280]">{item.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCards;
