import React from 'react';

const TransactionItem = ({ iconColor, icon, title, date, amount, isPositive }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div
                    className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] rounded-full flex items-center justify-center text-[24px]"
                    style={{ backgroundColor: iconColor }}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-text-dark">{title}</h3>
                    <p className="text-[14px] text-text-light mt-1">{date}</p>
                </div>
            </div>
            <span className={`text-[16px] font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
                {isPositive ? '+' : '-'}${Math.abs(amount).toLocaleString()}
            </span>
        </div>
    );
};

const RecentTransactions = () => {
    const transactions = [
        {
            id: 1,
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: -850,
            icon: "💳", // Placeholder
            iconColor: "#FFF5D9",
            isPositive: false
        },
        {
            id: 2,
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: 2500,
            icon: "🅿️", // Placeholder
            iconColor: "#E7EDFF",
            isPositive: true
        },
        {
            id: 3,
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: 5400,
            icon: "👤", // Placeholder
            iconColor: "#DCFAF8",
            isPositive: true
        }
    ];

    return (
        <div className="bg-white rounded-main p-6 h-[235px] flex flex-col justify-between shadow-card w-full xl:w-[350px]">
            <div className="flex flex-col gap-4">
                {transactions.map(t => (
                    <TransactionItem key={t.id} {...t} />
                ))}
            </div>
        </div>
    );
};

export default RecentTransactions;
