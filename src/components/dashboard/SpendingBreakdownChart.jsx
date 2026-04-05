import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFinanceContext } from '../../context/FinanceContext';
import { useMemo } from 'react';

const COLORS = ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)', 'var(--color-chart-4)', 'var(--color-chart-5)', 'var(--color-chart-6)'];

export const SpendingBreakdownChart = () => {
    const { transactions } = useFinanceContext();

    const data = useMemo(() => {
        const expenses = transactions.filter(t => t.type === 'expense');
        const cats = expenses.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
            return acc;
        }, {});
        return Object.entries(cats).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
    }, [transactions]);

    if (data.length === 0) {
        return (
            <div className="bg-surface rounded-xl shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] p-6 flex flex-col" style={{ height: '420px' }}>
                <h3 className="text-xl font-bold font-display text-foreground mb-4">Spending Breakdown</h3>
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">No expense data available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-surface rounded-xl shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] p-6" style={{ height: '420px' }}>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Spending Breakdown</h3>
            <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                    <Pie data={data} cx="50%" cy="45%" innerRadius={70} outerRadius={105} paddingAngle={4} dataKey="value" strokeWidth={0}>
                        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', borderRadius: '12px', fontSize: '13px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                        itemStyle={{ color: '#111' }}
                        formatter={(v) => [`$${Number(v).toFixed(0)}`, 'Amount']}
                    />
                    <Legend verticalAlign="bottom" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
