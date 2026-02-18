import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jul', balance: 100 },
    { name: 'Aug', balance: 350 },
    { name: 'Sep', balance: 250 },
    { name: 'Oct', balance: 480 },
    { name: 'Nov', balance: 780 },
    { name: 'Dec', balance: 220 },
    { name: 'Jan', balance: 590 },
    { name: 'Feb', balance: 650 },
];

const BalanceHistory = () => {
    return (
        <div className="bg-white rounded-main p-6 h-[276px] shadow-card">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#DBDFEA" />
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
                        ticks={[0, 200, 400, 600, 800]}
                    />
                    <Tooltip contentStyle={{ borderRadius: '10px', border: 'none' }} />
                    <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#2D60FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#1814F3"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorBalance)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceHistory;
