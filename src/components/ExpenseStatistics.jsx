import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
    { name: 'Entertainment', value: 30, color: '#3949AB' },
    { name: 'Investment', value: 20, color: '#E91E63' },
    { name: 'Bill Expense', value: 15, color: '#FB8C00' },
    { name: 'Others', value: 35, color: '#3B41F1' },
];

const ExpenseStatistics = () => {

    return (
        <div className="bg-white rounded-main p-8 h-[322px] w-full flex items-center justify-center shadow-card">
            <div className="w-full h-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            paddingAngle={5}
                            innerRadius={0}
                            outerRadius={125}
                            dataKey="value"
                            stroke="none"
                            labelLine={false}
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                                const RADIAN = Math.PI / 180;
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                return (
                                    <g>
                                        <text x={x} y={y - 8} fill="white" textAnchor="middle" dominantBaseline="central" className="font-bold text-[13px]">
                                            {value}%
                                        </text>
                                        <text x={x} y={y + 8} fill="white" textAnchor="middle" dominantBaseline="central" className="text-[11px] font-medium">
                                            {data[index].name}
                                        </text>
                                    </g>
                                );
                            }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ExpenseStatistics;
