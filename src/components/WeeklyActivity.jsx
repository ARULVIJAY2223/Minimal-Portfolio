import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Sat', deposit: 480, withdraw: 240 },
    { name: 'Sun', deposit: 350, withdraw: 130 },
    { name: 'Mon', deposit: 330, withdraw: 270 },
    { name: 'Tue', deposit: 480, withdraw: 370 },
    { name: 'Wed', deposit: 150, withdraw: 240 },
    { name: 'Thu', deposit: 390, withdraw: 240 },
    { name: 'Fri', deposit: 400, withdraw: 330 },
];

const WeeklyActivity = () => {
    return (
        <div className="bg-white rounded-main p-8 h-[322px] w-full shadow-card">
            <div className="flex justify-end mb-4 gap-7">
                <div className="flex items-center gap-3">
                    <div className="w-[15px] h-[15px] rounded-full bg-primary-blue" />
                    <span className="text-text-light text-[15px]">Deposit</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[15px] h-[15px] rounded-full bg-success" />
                    <span className="text-text-light text-[15px]">Withdraw</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={240}>
                <BarChart
                    data={data}
                    barGap={15}
                    margin={{
                        top: 20,
                        right: 0,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F3F5" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#718EBF', fontSize: 13 }}
                        dy={15}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#718EBF', fontSize: 13 }}
                        ticks={[0, 100, 200, 300, 400, 500]}
                    />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="deposit" fill="#2D31FA" barSize={15} radius={[10, 10, 10, 10]} />
                    <Bar dataKey="withdraw" fill="#41D4A8" barSize={15} radius={[10, 10, 10, 10]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeeklyActivity;
