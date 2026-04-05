import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

    if (data.length === 0) {
        return (
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 flex flex-col" style={{ height: '420px' }}>
                <h3 className="text-lg font-semibold text-foreground mb-4">Spending Breakdown</h3>
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">No expense data available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6" style={{ height: '420px' }}>
            <h3 className="text-lg font-semibold text-foreground mb-2">Spending Breakdown</h3>
            {/*
        Key fix: pass a fixed pixel number to ResponsiveContainer height.
        Using height="100%" inside a flex child is unreliable in Recharts.
        The PieChart cy is centered within this fixed 340px height.
      */}
            <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="45%"
                        innerRadius={70}
                        outerRadius={105}
                        paddingAngle={4}
                        dataKey="value"
                        strokeWidth={0}
                    >
                        {data.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--color-card)',
                            borderColor: 'var(--color-border)',
                            borderRadius: '8px',
                            fontSize: '13px',
                        }}
                        itemStyle={{ color: 'var(--color-foreground)' }}
                        formatter={(v) => [`$${Number(v).toFixed(0)}`, 'Amount']}
                    />
                    <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
