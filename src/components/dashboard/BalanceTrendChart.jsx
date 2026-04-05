import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', balance: 3500 },
    { name: 'Week 2', balance: 3200 },
    { name: 'Week 3', balance: 4800 },
    { name: 'Week 4', balance: 6400 },
];

export const BalanceTrendChart = () => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6" style={{ height: '420px' }}>
        <h3 className="text-lg font-black text-gray-900 mb-4">Balance Trend (This Month)</h3>
        <div style={{ height: '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="gradBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EE3124" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#EE3124" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={8} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={(v) => `$${v.toLocaleString()}`} domain={['dataMin - 800', 'dataMax + 800']} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', borderRadius: '12px', fontSize: '13px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                        itemStyle={{ color: '#111' }}
                        formatter={(v) => [`$${v.toLocaleString()}`, 'Balance']}
                    />
                    <Area type="monotone" dataKey="balance" stroke="#EE3124" strokeWidth={3} fill="url(#gradBalance)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);
