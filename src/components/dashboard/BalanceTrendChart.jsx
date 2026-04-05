import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', balance: 3500 },
    { name: 'Week 2', balance: 3200 },
    { name: 'Week 3', balance: 4800 },
    { name: 'Week 4', balance: 6400 },
];

export const BalanceTrendChart = () => {
    return (
        /* Same concrete height as the PieChart card */
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6" style={{ height: '420px' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Balance Trend (This Month)</h3>

            {/* Explicit pixel height for the chart body */}
            <div style={{ height: '320px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="gradBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                            dy={8}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                            tickFormatter={(v) => `$${v.toLocaleString()}`}
                            domain={['dataMin - 800', 'dataMax + 800']}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--color-card)',
                                borderColor: 'var(--color-border)',
                                borderRadius: '8px',
                                fontSize: '13px',
                            }}
                            itemStyle={{ color: 'var(--color-foreground)' }}
                            formatter={(v) => [`$${v.toLocaleString()}`, 'Balance']}
                        />
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fill="url(#gradBalance)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
