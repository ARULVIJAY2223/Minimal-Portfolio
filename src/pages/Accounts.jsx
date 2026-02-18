import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import CreditCard from '../components/CreditCard';
import {
    BadgeDollarSign,
    HandCoins,
    PiggyBank,
    Wallet,
    Receipt,
    User,
    Gamepad2,
    Apple,
    RefreshCcw,
    Settings
} from 'lucide-react';

const Accounts = () => {

    const summaryData = [
        { title: "My Balance", amount: "$12,750", icon: Wallet, bg: "#FFF4E5", color: "#F59E0B" },
        { title: "Income", amount: "$5,600", icon: HandCoins, bg: "#E0F2FE", color: "#3B82F6" },
        { title: "Expense", amount: "$3,460", icon: Receipt, bg: "#FCE7F3", color: "#EC4899" },
        { title: "Total Saving", amount: "$7,920", icon: PiggyBank, bg: "#D1FAE5", color: "#10B981" },
    ];

    const lastTransactions = [
        { icon: "spotify", title: "Spotify Subscription", date: "25 Jan 2021", type: "Shopping", card: "1234 ****", status: "Pending", amount: -150 },
        { icon: "service", title: "Mobile Service", date: "25 Jan 2021", type: "Service", card: "1234 ****", status: "Completed", amount: -340 },
        { icon: "user", title: "Emilly Wilson", date: "25 Jan 2021", type: "Transfer", card: "1234 ****", status: "Completed", amount: 780 },
    ];

    const chartData = [
        { name: 'Sat', debit: 300, credit: 500 },
        { name: 'Sun', debit: 450, credit: 200 },
        { name: 'Mon', debit: 200, credit: 350 },
        { name: 'Tue', debit: 600, credit: 400 },
        { name: 'Wed', debit: 250, credit: 550 },
        { name: 'Thu', debit: 350, credit: 150 },
        { name: 'Fri', debit: 400, credit: 500 },
    ];

    const invoices = [
        { name: "Apple Store", time: "5h ago", amount: "$450", icon: Apple, bg: "#DCFAF8", color: "#16DBCC" },
        { name: "Michael", time: "2 days ago", amount: "$160", icon: User, bg: "#FFF5D9", color: "#FFBB38" },
        { name: "Playstation", time: "5 days ago", amount: "$1085", icon: Gamepad2, bg: "#E7EDFF", color: "#396AFF" },
        { name: "William", time: "10 days ago", amount: "$90", icon: User, bg: "#FFE0EB", color: "#FF82AC" },
    ];

    const getTransactionIcon = (type) => {
        switch (type) {
            case 'spotify': return { icon: RefreshCcw, bg: '#DCFAF8', color: '#16DBCC' }; // Greenish
            case 'service': return { icon: Settings, bg: '#E7EDFF', color: '#396AFF' }; // Blueish
            case 'user': return { icon: User, bg: '#FFE0EB', color: '#FF82AC' }; // Pinkish
            default: return { icon: Receipt, bg: '#E7EDFF', color: '#396AFF' };
        }
    };

    return (
        <div className="flex flex-col gap-[40px] font-inter">
            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {summaryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white rounded-[24px] p-6 h-[130px] shadow-soft">
                        <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                            <item.icon size={28} style={{ color: item.color }} />
                        </div>
                        <div>
                            <p className="text-[14px] font-medium text-[#6B7280]">{item.title}</p>
                            <h3 className="text-[24px] font-bold text-[#1F2A56] mt-[6px]">{item.amount}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Second Row: Last Transaction & My Card */}
            <div className="flex flex-col xl:flex-row gap-[24px]">
                {/* Last Transaction */}
                <div className="bg-white rounded-[28px] p-7 shadow-card flex-1 xl:max-w-[760px]">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-5">Last Transaction</h2>
                    <div className="flex flex-col gap-[20px]">
                        {lastTransactions.map((t, i) => {
                            const { icon: Icon, bg, color } = getTransactionIcon(t.icon);
                            return (
                                <div key={i} className="flex items-center justify-between h-[72px]">
                                    <div className="flex items-center gap-4 min-w-[200px]">
                                        <div className="w-[48px] h-[48px] rounded-[15px] flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                                            <Icon size={24} style={{ color: color }} />
                                        </div>
                                        <div>
                                            <h4 className="text-[16px] font-medium text-[#1F2A56]">{t.title}</h4>
                                            <span className="text-[13px] text-[#6B7280]">{t.date}</span>
                                        </div>
                                    </div>
                                    <span className="text-[15px] text-[#6B7280] hidden md:block w-[100px]">{t.type}</span>
                                    <span className="text-[15px] text-[#6B7280] hidden md:block w-[100px]">{t.card}</span>
                                    <span className={`text-[15px] font-medium hidden md:block w-[80px] ${t.status === 'Pending' ? 'text-[#F59E0B]' : 'text-[#396AFF]'}`}>{t.status}</span>
                                    <span className={`text-[16px] font-semibold text-right flex-1 ${t.amount < 0 ? 'text-[#FF4D4F]' : 'text-[#22C55E]'}`}>
                                        {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* My Card */}
                <div className="flex flex-col gap-5 w-full xl:w-[360px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[20px] font-semibold text-[#1F2A56]">My Card</h2>
                        <button className="text-[14px] font-semibold text-[#3B41F1] hover:text-blue-700">See All</button>
                    </div>
                    <div className="h-[220px]">
                        <CreditCard
                            balance={5756}
                            holder="Eddy Cusuma"
                            validThru="12/22"
                            number="3778 **** **** 1234"
                            theme="dark"
                            className="w-full h-full"
                            style={{ background: 'linear-gradient(135deg, #4F7BFF 0%, #3B41F1 100%)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Third Row: Debit & Credit Chart & Invoices */}
            <div className="flex flex-col xl:flex-row gap-[24px]">
                {/* Debit & Credit Overview */}
                <div className="bg-white rounded-[28px] p-7 shadow-card flex-1 xl:max-w-[760px] h-[420px]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[20px] font-semibold text-[#1F2A56]">Debit & Credit Overview</h2>
                        <div className="flex gap-[20px]">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#1814F3]"></span>
                                <span className="text-[12px] text-[#6B7280]">Debit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#FF82AC]"></span>
                                <span className="text-[12px] text-[#6B7280]">Credit</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[14px] text-[#6B7280] mb-6 hidden md:block">$7,560 Debited & $5,420 Credited in this Week</p>

                    <div className="h-[280px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} barGap={12} margin={{ top: 0, right: 0, left: 0, bottom: 30 }}>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#718EBF', fontSize: 13 }}
                                    dy={10}
                                    padding={{ left: 10, right: 10 }}
                                />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="debit" fill="#1814F3" barSize={18} radius={[10, 10, 0, 0]} />
                                <Bar dataKey="credit" fill="#F59E0B" barSize={18} radius={[10, 10, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Invoices Sent */}
                <div className="bg-white rounded-[28px] p-7 shadow-card w-full xl:w-[360px] h-auto">
                    <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-6">Invoices Sent</h2>
                    <div className="flex flex-col gap-[20px]">
                        {invoices.map((inv, i) => (
                            <div key={i} className="flex items-center justify-between h-[64px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-[48px] h-[48px] rounded-[15px] flex items-center justify-center shrink-0" style={{ backgroundColor: inv.bg }}>
                                        <inv.icon size={22} style={{ color: inv.color }} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-medium text-[#1F2A56]">{inv.name}</h4>
                                        <span className="text-[13px] text-[#6B7280]">{inv.time}</span>
                                    </div>
                                </div>
                                <span className="text-[16px] font-semibold text-[#1F2A56]">{inv.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
