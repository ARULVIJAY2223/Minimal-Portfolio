import React from 'react';
import CreditCard from '../components/CreditCard';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivity from '../components/WeeklyActivity';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistory from '../components/BalanceHistory';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-[30px] font-inter">
            {/* Top Row: Cards and Recent Transactions */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-[30px]">
                {/* My Cards Section */}
                <div className="flex-col min-w-0">
                    <div className="flex justify-between items-center mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">My Cards</h2>
                        <button className="text-text-dark text-[17px] font-semibold hover:text-primary-blue transition-colors">
                            See All
                        </button>
                    </div>
                    {/* Cards Container */}
                    <div className="flex flex-nowrap gap-[30px] overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide items-start">
                        <CreditCard
                            balance={5756}
                            holder="Eddy Cusuma"
                            validThru="12/22"
                            number="3778 **** **** 1234"
                            theme="dark"
                        />
                        <CreditCard
                            balance={5756}
                            holder="Eddy Cusuma"
                            validThru="12/22"
                            number="3778 **** **** 1234"
                            theme="light"
                        />
                    </div>
                </div>

                {/* Recent Transactions Section */}
                <div className="flex flex-col">
                    <div className="mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">Recent Transaction</h2>
                    </div>
                    <RecentTransactions />
                </div>
            </div>

            {/* Middle Row: Weekly and Expense */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-[30px]">
                <div className="flex flex-col min-w-0">
                    <div className="mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">Weekly Activity</h2>
                    </div>
                    <WeeklyActivity />
                </div>
                <div className="flex flex-col">
                    <div className="mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">Expense Statistics</h2>
                    </div>
                    <ExpenseStatistics />
                </div>
            </div>

            {/* Bottom Row: Quick Transfer and Balance History */}
            <div className="grid grid-cols-1 xl:grid-cols-[445px_1fr] gap-[30px]">
                <div className="flex flex-col">
                    <div className="mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">Quick Transfer</h2>
                    </div>
                    <QuickTransfer />
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="mb-5 md:mb-6">
                        <h2 className="text-[22px] font-semibold text-text-dark">Balance History</h2>
                    </div>
                    <BalanceHistory />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
