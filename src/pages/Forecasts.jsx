import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { year: '2026', portfolio: 4500000, inflation: 4500000 },
    { year: '2027', portfolio: 4850000, inflation: 4635000 },
    { year: '2028', portfolio: 5200000, inflation: 4774000 },
    { year: '2029', portfolio: 5650000, inflation: 4917000 },
    { year: '2030', portfolio: 6150000, inflation: 5064000 },
    { year: '2031', portfolio: 6800000, inflation: 5216000 },
    { year: '2032', portfolio: 7500000, inflation: 5373000 },
    { year: '2033', portfolio: 8350000, inflation: 5534000 },
    { year: '2034', portfolio: 9400000, inflation: 5700000 },
    { year: '2035', portfolio: 10600000, inflation: 5871000 },
    { year: '2036', portfolio: 12000000, inflation: 6047000 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-surface-container border border-primary/20 p-4 rounded-none shadow-2xl">
                <p className="font-label text-xs mb-2 text-on-surface-variant uppercase tracking-widest">Year {label}</p>
                <p className="font-headline text-primary mb-1">
                    <span className="opacity-60 text-xs mr-2">PORTFOLIO</span>
                    ${(payload[0].value).toLocaleString()}
                </p>
                <p className="font-headline text-error">
                    <span className="opacity-60 text-xs mr-2">DECAY</span>
                    ${(payload[1].value).toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const Forecasts = () => {
    return (
        <div className="animate-in fade-in duration-500 min-h-screen py-12 pr-12 h-screen flex flex-col">
            <div className="mb-8 pl-12 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-primary"></div>
                <h1 className="font-headline text-6xl font-bold tracking-tighter text-on-surface leading-none">Fiscal Terminal</h1>
                <p className="font-label text-on-surface-variant uppercase tracking-[0.3em] text-[10px] mt-4">Node 017-X • 10-Year Probability Forecast</p>
            </div>

            <div className="grid grid-cols-12 gap-12 flex-1 pl-12 h-[calc(100vh-200px)]">
                {/* Control Panel Grid */}
                <div className="col-span-3 flex flex-col gap-8 h-full bg-surface-container-low border-r border-outline-variant/10 p-8 shadow-[inset_-20px_0_40px_rgba(0,0,0,0.2)]">
                    <div>
                        <h3 className="font-label text-[10px] text-primary uppercase tracking-[0.3em] mb-6">Variables</h3>

                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <div className="flex justify-between mb-2">
                                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Target CAGR</span>
                                    <span className="font-body text-xs text-on-surface">12.5%</span>
                                </div>
                                <div className="h-1 bg-outline-variant/20 relative">
                                    <div className="absolute top-0 left-0 h-full w-[65%] bg-primary shadow-[0_0_8px_#8B5CF6]"></div>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex justify-between mb-2">
                                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-error transition-colors">Inflation Decay</span>
                                    <span className="font-body text-xs text-error">3.0%</span>
                                </div>
                                <div className="h-1 bg-outline-variant/20 relative">
                                    <div className="absolute top-0 left-0 h-full w-[30%] bg-error shadow-[0_0_8px_#ef4444]"></div>
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex justify-between mb-2">
                                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors">Tax Drag</span>
                                    <span className="font-body text-xs text-on-surface">1.2%</span>
                                </div>
                                <div className="h-1 bg-outline-variant/20 relative">
                                    <div className="absolute top-0 left-0 h-full w-[15%] bg-secondary shadow-[0_0_8px_#059669]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-outline-variant/10 pt-8">
                        <h3 className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-[0.3em] mb-4">Diagnostics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">Terminal Val</p>
                                <p className="font-headline text-lg text-primary">$12.0M</p>
                            </div>
                            <div>
                                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">Purchasing Pwr</p>
                                <p className="font-headline text-lg text-error">$6.04M</p>
                            </div>
                            <div className="col-span-2 mt-4 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Model Synchronized</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Terminal Area */}
                <div className="col-span-9 h-full flex flex-col relative pb-8">
                    <div className="flex items-center gap-6 mb-8 justify-end">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-px bg-primary"></div>
                            <span className="font-label text-[10px] uppercase tracking-widest text-primary">Nominal Portfolio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-px bg-error"></div>
                            <span className="font-label text-[10px] uppercase tracking-widest text-error">Inflation Drag</span>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 w-full relative group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen mix-blend-plus-lighter z-0"></div>
                        <ResponsiveContainer width="100%" height="100%" className="relative z-10">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorInflation" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
                                <XAxis
                                    dataKey="year"
                                    stroke="#ffffff33"
                                    tick={{ fill: '#ffffff66', fontSize: 10, fontFamily: 'Space Grotesk' }}
                                    tickLine={false}
                                    axisLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke="#ffffff33"
                                    tick={{ fill: '#ffffff66', fontSize: 10, fontFamily: 'Space Grotesk' }}
                                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                                    tickLine={false}
                                    axisLine={false}
                                    dx={-10}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="inflation" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorInflation)" />
                                <Area type="monotone" dataKey="portfolio" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorPortfolio)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="fixed -bottom-64 -right-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
    );
};

export default Forecasts;
