import React, { useState } from 'react';
import CreditCard from '../components/CreditCard';
import MyExpense from '../components/MyExpense';
import { ArrowLeftRight, ArrowDownCircle, ArrowUpCircle, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Transactions = () => {
    const [activeTab, setActiveTab] = useState('All Transactions');

    const tabs = ['All Transactions', 'Income', 'Expense'];

    const transactions = [
        {
            description: "Spotify Subscription",
            id: "#12548796",
            type: "Shopping",
            card: "1234 ****",
            date: "28 Jan, 12.30 AM",
            amount: -2500,
            hasReceipt: true
        },
        {
            description: "Freepik Sales",
            id: "#12548796",
            type: "Transfer",
            card: "1234 ****",
            date: "25 Jan, 10.40 PM",
            amount: 750,
            hasReceipt: true
        },
        {
            description: "Mobile Service",
            id: "#12548796",
            type: "Service",
            card: "1234 ****",
            date: "20 Jan, 10.40 PM",
            amount: -150,
            hasReceipt: true
        },
        {
            description: "Wilson",
            id: "#12548796",
            type: "Transfer",
            card: "1234 ****",
            date: "15 Jan, 03.29 PM",
            amount: -1050,
            hasReceipt: true
        },
        {
            description: "Emilly",
            id: "#12548796",
            type: "Transfer",
            card: "1234 ****",
            date: "14 Jan, 10.40 PM",
            amount: 840,
            hasReceipt: true
        }
    ];

    const isPositive = (amount) => amount > 0;

    return (
        <div className="flex flex-col gap-6 font-inter">
            {/* Top Section: Cards & Expense */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Cards Wrapper */}
                <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto overflow-x-auto scrollbar-hide">
                    <CreditCard
                        balance={5756}
                        holder="Eddy Cusuma"
                        validThru="12/22"
                        number="3778 **** **** 1234"
                        theme="dark"
                        className="w-[350px] h-[220px]"
                    />
                    <CreditCard
                        balance={5756}
                        holder="Eddy Cusuma"
                        validThru="12/22"
                        number="3778 **** **** 1234"
                        theme="light"
                        className="w-[350px] h-[220px]"
                    />
                </div>
                {/* Expense Card */}
                <div className="w-full lg:w-auto flex-1">
                    <MyExpense />
                </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="flex flex-col gap-6 mt-4">
                <h2 className="text-[22px] font-semibold text-text-dark">Recent Transactions</h2>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-card-border">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                pb-3 text-[14px] font-medium transition-colors relative
                                ${activeTab === tab ? 'text-primary-blue' : 'text-text-light'}
                            `}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-blue rounded-t-md" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="bg-white rounded-main p-6 shadow-card overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                            <tr className="border-b border-card-border">
                                <th className="text-left py-4 text-[14px] font-medium text-text-light pl-4">Description</th>
                                <th className="text-left py-4 text-[14px] font-medium text-text-light">Transaction ID</th>
                                <th className="text-left py-4 text-[14px] font-medium text-text-light">Type</th>
                                <th className="text-left py-4 text-[14px] font-medium text-text-light">Card</th>
                                <th className="text-left py-4 text-[14px] font-medium text-text-light">Date</th>
                                <th className="text-right py-4 text-[14px] font-medium text-text-light pr-8">Amount</th>
                                <th className="text-right py-4 text-[14px] font-medium text-text-light pr-4">Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t, i) => (
                                <tr key={i} className="border-b border-app-bg last:border-none">
                                    <td className="py-4 pl-4">
                                        <div className="flex items-center gap-3">
                                            {t.description === "Spotify Subscription" || t.description === "Mobile Service" ?
                                                <div className="w-[36px] h-[36px] rounded-full bg-[#E7EDFF] flex items-center justify-center text-[#1814F3]">
                                                    <ArrowLeftRight size={18} />
                                                </div> :
                                                null
                                            }
                                            {/* Using simple logic for icons based on description for demo */}
                                            {(t.description !== "Spotify Subscription" && t.description !== "Mobile Service") &&
                                                <div className="w-[36px] h-[36px] rounded-full bg-[#E7EDFF] flex items-center justify-center text-[#1814F3]">
                                                    {t.amount > 0 ? <ArrowDownCircle size={18} /> : <ArrowUpCircle size={18} />}
                                                </div>
                                            }
                                            <span className="text-[14px] font-medium text-text-dark">{t.description}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-[14px] text-text-dark">{t.id}</td>
                                    <td className="py-4 text-[14px] text-text-dark">{t.type}</td>
                                    <td className="py-4 text-[14px] text-text-dark">{t.card}</td>
                                    <td className="py-4 text-[14px] text-text-dark">{t.date}</td>
                                    <td className={`py-4 text-[14px] font-semibold text-right pr-8 ${isPositive(t.amount) ? 'text-success' : 'text-danger'}`}>
                                        {isPositive(t.amount) ? '+' : '-'}${Math.abs(t.amount).toLocaleString()}
                                    </td>
                                    <td className="py-4 text-right pr-4">
                                        <button className="px-4 py-2 rounded-[18px] border border-primary-blue text-primary-blue text-[13px] hover:bg-[#EEF2FF] transition-colors">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-end items-center gap-3 mt-6">
                        <button className="flex items-center gap-1 text-[13px] text-text-blue font-medium hover:text-primary-blue transition-colors">
                            <ChevronLeft size={16} /> Previous
                        </button>
                        <div className="flex gap-2">
                            <button className="w-[36px] h-[36px] rounded-[10px] bg-primary-blue text-white font-semibold text-[13px] flex items-center justify-center">1</button>
                            <button className="w-[36px] h-[36px] rounded-[10px] text-primary-blue font-semibold text-[13px] flex items-center justify-center hover:bg-gray-100">2</button>
                            <button className="w-[36px] h-[36px] rounded-[10px] text-primary-blue font-semibold text-[13px] flex items-center justify-center hover:bg-gray-100">3</button>
                            <button className="w-[36px] h-[36px] rounded-[10px] text-primary-blue font-semibold text-[13px] flex items-center justify-center hover:bg-gray-100">4</button>
                        </div>
                        <button className="flex items-center gap-1 text-[13px] text-text-blue font-medium hover:text-primary-blue transition-colors">
                            Next <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
