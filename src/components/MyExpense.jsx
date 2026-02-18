import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Aug', value: 6000 },
    { name: 'Sep', value: 10000 },
    { name: 'Oct', value: 8000 },
    { name: 'Nov', value: 4000 },
    { name: 'Dec', value: 12500, active: true },
    { name: 'Jan', value: 9000 },
];

const MyExpense = () => {
    return (
        <div className="bg-white rounded-main p-6 w-full lg:w-[360px] h-[220px] shadow-card flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <h2 className="text-[18px] font-semibold text-text-dark">My Expense</h2>
                <span className="text-[16px] font-semibold text-text-dark">$12,500</span>
            </div>

            <div className="w-full h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={20} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" radius={[10, 10, 10, 10]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.active ? '#20C997' : '#E6EBF5'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MyExpense;
