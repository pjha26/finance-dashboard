import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useFinanceContext } from '../../context/FinanceContext';
import { useMemo } from 'react';

const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981'];

export const SpendingBreakdownChart = () => {
    const { transactions } = useFinanceContext();

    const data = useMemo(() => {
        const expenses = transactions.filter(t => t.type === 'expense');
        const categories = expenses.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
            return acc;
        }, {});

        return Object.entries(categories)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);
    }, [transactions]);

    return (
        <div className="bg-card p-6 rounded-2xl border border-border w-full h-[350px] shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Spending Breakdown</h3>
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    {data.length > 0 ? (
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                                itemStyle={{ color: 'var(--color-foreground)' }}
                                formatter={(value) => `$${value}`}
                            />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <p className="text-muted-foreground">No data available.</p>
                        </div>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};
