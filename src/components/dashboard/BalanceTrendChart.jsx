import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data showing a balance over time for this month
const data = [
    { name: 'Week 1', balance: 3500 },
    { name: 'Week 2', balance: 3200 },
    { name: 'Week 3', balance: 4800 },
    { name: 'Week 4', balance: 6400 } // Derived abstractly from mock data
];

export const BalanceTrendChart = () => {
    return (
        <div className="bg-card p-6 rounded-2xl border border-border w-full min-h-[420px] shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Balance Trend (This Month)</h3>
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                            tickFormatter={(value) => `$${value}`}
                            domain={['dataMin - 1000', 'dataMax + 1000']}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                            itemStyle={{ color: 'var(--color-foreground)' }}
                        />
                        <Area type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
