import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useFinanceContext } from '../../context/FinanceContext';
import { useMemo } from 'react';

const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981', '#f43f5e', '#06b6d4'];

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
        <div className="bg-card p-6 rounded-2xl border border-border w-full min-h-[420px] shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Spending Breakdown</h3>
            <div className="flex-1 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                    {data.length > 0 ? (
                        <PieChart margin={{ top: 0, right: 0, bottom: 20, left: 0 }}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="45%"
                                innerRadius={70}
                                outerRadius={90}
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
                            <Legend
                                verticalAlign="bottom"
                                iconType="circle"
                                wrapperStyle={{ bottom: "-10px", lineHeight: "24px" }}
                            />
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
