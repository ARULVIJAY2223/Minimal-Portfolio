import React from 'react';
import { User, Briefcase, BarChart3, Settings } from 'lucide-react';

const Loans = () => {
    // --- Data ---
    const summaryCards = [
        { icon: User, bg: '#DBEAFE', color: '#3B82F6', label: 'Personal Loans', amount: '$50,000' },
        { icon: Briefcase, bg: '#FEF3C7', color: '#F59E0B', label: 'Corporate Loans', amount: '$100,000' },
        { icon: BarChart3, bg: '#FCE7F3', color: '#EC4899', label: 'Business Loans', amount: '$500,000' },
        { icon: Settings, bg: '#D1FAE5', color: '#10B981', label: 'Custom Loans', amount: 'Choose Money' },
    ];

    const activeLoans = [
        { id: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', install: '$2,000 / month', active: true },
        { id: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', install: '$8,000 / month', active: false },
        { id: '03.', money: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', install: '$5,000 / month', active: false },
        { id: '04.', money: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', install: '$2,000 / month', active: false },
        { id: '05.', money: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', install: '$10,000 / month', active: false },
        { id: '06.', money: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', install: '$2,000 / month', active: false },
        { id: '07.', money: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', install: '$500 / month', active: false },
        { id: '08.', money: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', install: '$900 / month', active: false },
    ];

    const totals = {
        moneyTotal: '$125,0000',
        leftTotal: '$750,000',
        installTotal: '$50,000 / month'
    };

    return (
        <div className="flex flex-col gap-[40px] font-inter text-[#1F2A56] max-w-[1180px] mx-auto">

            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
                {summaryCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-[24px] h-[120px] p-[20px] flex items-center gap-[20px] shadow-sm">
                        <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: card.bg }}>
                            <card.icon size={28} style={{ color: card.color }} />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <span className="text-[14px] font-medium text-[#6B7280]">{card.label}</span>
                            <span className="text-[20px] font-bold text-[#1F2A56]">{card.amount}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Loans Overview */}
            <div>
                <h2 className="text-[20px] font-semibold text-[#1F2A56] mb-[15px]">Active Loans Overview</h2> {/* Reduced margin */}
                <div className="bg-white rounded-[24px] p-[20px] shadow-sm">
                    <div className="w-full">

                        {/* Table Header */}
                        <div
                            className="grid border-b border-[#E6EBF5] pb-[12px] mb-[12px]"  /* Reduced spacing */
                            style={{
                                gridTemplateColumns: '60px 150px 150px 140px 120px 180px 1fr 120px',
                                alignItems: 'center'
                            }}
                        >
                            <span className="text-[14px] font-medium text-[#6B7280]">SL No</span>
                            <span className="text-[14px] font-medium text-[#6B7280]">Loan Money</span>
                            <span className="text-[14px] font-medium text-[#6B7280]">Left to repay</span>
                            <span className="text-[14px] font-medium text-[#6B7280]">Duration</span>
                            <span className="text-[14px] font-medium text-[#6B7280]">Interest rate</span>
                            <span className="text-[14px] font-medium text-[#6B7280]">Installment</span>
                            <span></span> {/* Spacer */}
                            <span className="text-[14px] font-medium text-[#6B7280]">Repay</span>
                        </div>

                        {/* Table Rows */}
                        <div className="flex flex-col gap-[0px]">
                            {activeLoans.map((loan, i) => (
                                <div
                                    key={i}
                                    className="grid border-b border-[#F1F5F9] last:border-none h-[56px]" /* Reduced height */
                                    style={{
                                        gridTemplateColumns: '60px 150px 150px 140px 120px 180px 1fr 120px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <span className="text-[14px] text-[#1F2A56]">{loan.id}</span>
                                    <span className="text-[14px] text-[#1F2A56]">{loan.money}</span>
                                    <span className="text-[14px] text-[#1F2A56]">{loan.left}</span>
                                    <span className="text-[14px] text-[#1F2A56]">{loan.duration}</span>
                                    <span className="text-[14px] text-[#1F2A56]">{loan.rate}</span>
                                    <span className="text-[14px] text-[#1F2A56]">{loan.install}</span>
                                    <span></span> {/* Spacer */}
                                    <button
                                        className="w-[100px] h-[35px] rounded-[50px] text-[15px] font-medium flex items-center justify-center border border-[#718EBF] text-[#718EBF] bg-transparent transition-all hover:bg-[#E7EDFF] hover:text-[#1814F3] hover:border-[#1814F3]"
                                    >
                                        Repay
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total Row */}
                        <div
                            className="grid pt-[10px]" /* Reduced spacing */
                            style={{
                                gridTemplateColumns: '60px 150px 150px 140px 120px 180px 1fr 120px',
                                alignItems: 'center'
                            }}
                        >
                            <span className="text-[14px] font-bold text-[#FF4D4F]">Total</span>
                            <span className="text-[14px] font-bold text-[#FF4D4F]">{totals.moneyTotal}</span>
                            <span className="text-[14px] font-bold text-[#FF4D4F]">{totals.leftTotal}</span>
                            <span></span> {/* Duration */}
                            <span></span> {/* Interest */}
                            <span className="text-[14px] font-bold text-[#FF4D4F]">{totals.installTotal}</span>
                            <span></span> {/* Spacer */}
                            <span></span> {/* Repay */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loans;
