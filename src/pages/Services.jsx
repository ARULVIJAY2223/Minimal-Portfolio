import React from 'react';
import { ShieldCheck, ShoppingBag, Shield, HandCoins, Briefcase, BarChart3, User } from 'lucide-react';

const Services = () => {

    // --- Data ---
    const topCards = [
        { icon: ShieldCheck, bg: '#E7EDFF', color: '#3B41F1', title: 'Life Insurance', sub: 'Unlimited protection' },
        { icon: ShoppingBag, bg: '#FFF5D9', color: '#FFBB38', title: 'Shopping', sub: 'Buy. Think. Grow.' },
        { icon: Shield, bg: '#DCFAF8', color: '#16DBCC', title: 'Safety', sub: 'We are your allies' },
    ];

    const servicesList = [
        { icon: HandCoins, bg: '#FFE0EB', color: '#FF82AC', title: 'Business loans', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
        { icon: Briefcase, bg: '#FFF5D9', color: '#F59E0B', title: 'Checking accounts', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
        { icon: BarChart3, bg: '#FFE0EB', color: '#FF82AC', title: 'Savings accounts', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
        { icon: User, bg: '#E7EDFF', color: '#3B41F1', title: 'Debit and credit cards', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
        { icon: ShieldCheck, bg: '#DCFAF8', color: '#16DBCC', title: 'Life Insurance', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
        { icon: HandCoins, bg: '#FFE0EB', color: '#FF82AC', title: 'Business loans', sub: 'It is a long established', info1: 'Lorem Ipsum', info2: 'Many publishing' },
    ];

    return (
        <div className="flex flex-col gap-[30px] font-inter text-[#1F2A56] max-w-[1180px] mx-auto w-full">

            {/* Top Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {topCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-[24px] p-[24px] flex items-center gap-[20px] shadow-sm h-[120px]">
                        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: card.bg }}>
                            <card.icon size={28} style={{ color: card.color }} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[18px] font-semibold text-[#1F2A56]">{card.title}</h3>
                            <p className="text-[14px] text-[#6B7280]">{card.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bank Services List */}
            <div>
                <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-[20px]">Bank Services List</h2>
                <div className="flex flex-col gap-[16px]">
                    {servicesList.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] p-[16px] md:p-[20px] shadow-sm flex flex-col md:flex-row md:items-center gap-[20px] md:gap-[0]"
                        >
                            {/* Icon & Title Group - Responsive */}
                            <div className="flex items-center gap-[20px] md:w-[280px] shrink-0">
                                <div className="w-[60px] h-[60px] rounded-[20px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                                    <item.icon size={28} style={{ color: item.color }} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[16px] font-semibold text-[#1F2A56]">{item.title}</h4>
                                    <span className="text-[13px] text-[#6B7280]">{item.sub}</span>
                                </div>
                            </div>

                            {/* Info Columns - Hidden on mobile/stacked, grid on desktop */}
                            <div className="flex flex-col md:flex-row md:flex-1 gap-[16px] md:gap-[0]">
                                <div className="flex flex-col gap-1 md:flex-1">
                                    <span className="text-[14px] font-medium text-[#1F2A56]">Lorem Ipsum</span>
                                    <span className="text-[13px] text-[#6B7280]">{item.info2}</span>
                                </div>
                                <div className="flex flex-col gap-1 md:flex-1">
                                    <span className="text-[14px] font-medium text-[#1F2A56]">Lorem Ipsum</span>
                                    <span className="text-[13px] text-[#6B7280]">{item.info2}</span>
                                </div>
                                <div className="flex flex-col gap-1 md:flex-1">
                                    <span className="text-[14px] font-medium text-[#1F2A56]">Lorem Ipsum</span>
                                    <span className="text-[13px] text-[#6B7280]">{item.info2}</span>
                                </div>
                            </div>

                            {/* Button - Full width on mobile, Fixed width on desktop */}
                            <button className="w-full md:w-[160px] h-[44px] rounded-[22px] border border-[#3B41F1] text-[#3B41F1] font-medium text-[14px] hover:bg-[#EEF2FF] transition-colors shrink-0">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;
