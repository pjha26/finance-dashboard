import React from 'react';

const Insights = () => {
    return (
        <section className="p-2 lg:p-4 space-y-12 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#494454]/15 pb-8">
                <div>
                    <span className="text-[#d0bcff] font-label text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">Analytical Intelligence</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[#e5e2e3]">Monthly Comparison Insights</h2>
                </div>
                <div className="flex items-center gap-4 text-right">
                    <div className="p-4 bg-[#1c1b1c] border border-[#494454]/15">
                        <p className="text-slate-500 text-[0.65rem] uppercase tracking-widest mb-1">Current Period</p>
                        <p className="text-xl font-body font-bold text-[#e5e2e3]">OCTOBER 2023</p>
                    </div>
                    <div className="p-4 bg-[#0e0e0f] border border-[#494454]/15">
                        <p className="text-slate-500 text-[0.65rem] uppercase tracking-widest mb-1">Previous Period</p>
                        <p className="text-xl font-body font-bold text-[#e5e2e3]">SEPTEMBER 2023</p>
                    </div>
                </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Architectural Bar Chart */}
                <div className="lg:col-span-8 bg-[#1c1b1c] border border-[#494454]/15 p-8 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h3 className="text-xl font-serif italic mb-1">The Sovereign Ledger</h3>
                            <p className="text-slate-500 text-sm">Cross-period liquidity and expense allocation.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#d0bcff]"></div>
                                <span className="text-[0.65rem] uppercase tracking-widest text-slate-400">Current</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#494454]"></div>
                                <span className="text-[0.65rem] uppercase tracking-widest text-slate-400">Previous</span>
                            </div>
                        </div>
                    </div>

                    {/* Chart Simulation */}
                    <div className="h-80 flex items-end justify-between gap-4 px-4 border-b border-[#494454]/20 pb-2">
                        {/* Group 1: Fixed Assets */}
                        <div className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                                <div className="w-full bg-[#494454]/30 h-[65%] transition-all"></div>
                                <div className="w-full bg-[#d0bcff] h-[58%] shadow-[0_0_30px_rgba(208,188,255,0.1)] transition-all"></div>
                            </div>
                            <span className="text-[0.6rem] uppercase tracking-tighter text-slate-500 mt-4 group-hover:text-[#d0bcff]">Fixed Assets</span>
                        </div>
                        {/* Group 2: Acquisitions */}
                        <div className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                                <div className="w-full bg-[#494454]/30 h-[40%] transition-all"></div>
                                <div className="w-full bg-[#d0bcff] h-[82%] shadow-[0_0_30px_rgba(208,188,255,0.1)] transition-all"></div>
                            </div>
                            <span className="text-[0.6rem] uppercase tracking-tighter text-slate-500 mt-4 group-hover:text-[#d0bcff]">Acquisitions</span>
                        </div>
                        {/* Group 3: Operations */}
                        <div className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                                <div className="w-full bg-[#494454]/30 h-[90%] transition-all"></div>
                                <div className="w-full bg-[#d0bcff] h-[75%] shadow-[0_0_30px_rgba(208,188,255,0.1)] transition-all"></div>
                            </div>
                            <span className="text-[0.6rem] uppercase tracking-tighter text-slate-500 mt-4 group-hover:text-[#d0bcff]">Operations</span>
                        </div>
                        {/* Group 4: Portfolio Rebal */}
                        <div className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                                <div className="w-full bg-[#494454]/30 h-[30%] transition-all"></div>
                                <div className="w-full bg-[#d0bcff] h-[35%] shadow-[0_0_30px_rgba(208,188,255,0.1)] transition-all"></div>
                            </div>
                            <span className="text-[0.6rem] uppercase tracking-tighter text-slate-500 mt-4 group-hover:text-[#d0bcff]">Rebalance</span>
                        </div>
                        {/* Group 5: Luxury Alts */}
                        <div className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                                <div className="w-full bg-[#494454]/30 h-[55%] transition-all"></div>
                                <div className="w-full bg-[#d0bcff] h-[43%] shadow-[0_0_30px_rgba(208,188,255,0.1)] transition-all"></div>
                            </div>
                            <span className="text-[0.6rem] uppercase tracking-tighter text-slate-500 mt-4 group-hover:text-[#d0bcff]">Luxury Alts</span>
                        </div>
                    </div>
                </div>

                {/* Executive Brief Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    {/* Highest Spending Category */}
                    <div className="bg-[#2a2a2b] border border-[#494454]/15 p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-4 bg-[#d0bcff]"></div>
                                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#d0bcff] font-bold">Highest Outflow</span>
                            </div>
                            <h4 className="text-3xl font-serif mb-2 text-[#e5e2e3]">Portfolio Acquisitions</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                Strategic allocation into long-term sovereign instruments has increased by 42% this month, reflecting the scheduled quarterly capital deployment strategy.
                            </p>
                        </div>
                        <div className="mt-8 border-t border-[#494454]/10 pt-4 flex justify-between items-end">
                            <span className="text-4xl font-body font-light tracking-tighter text-[#e5e2e3]">$1.42M</span>
                            <span className="text-[#d0bcff] text-xs font-label uppercase tracking-widest">+22.4% vs prev</span>
                        </div>
                    </div>

                    {/* Security Badge Observation */}
                    <div className="bg-[#2a2a2b]/60 backdrop-blur-[20px] border border-[#494454]/15 p-6 relative">
                        <div className="absolute top-4 right-4">
                            <div className="bg-[#353436]/40 backdrop-blur-md px-3 py-1 flex items-center gap-2 border border-[#494454]/15">
                                <div className="w-1.5 h-1.5 bg-[#d0bcff] rounded-full"></div>
                                <span className="text-[0.6rem] uppercase tracking-widest text-[#e5e2e3]">Secure Analysis</span>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-[#d0bcff] mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>trending_down</span>
                        <h5 className="text-lg font-serif italic mb-2 text-[#e5e2e3]">Efficiency Insight</h5>
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                            "A notable <span className="text-[#d0bcff] font-bold">12% decrease in Luxury Alternatives</span> suggests a successful transition toward defensive asset positioning as per the sovereign mandate."
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Observations Table */}
            <div className="bg-[#0e0e0f] border border-[#494454]/15 overflow-hidden">
                <div className="px-8 py-6 border-b border-[#494454]/15 bg-[#1c1b1c] flex justify-between items-center">
                    <h3 className="text-sm uppercase tracking-[0.2em] font-label font-bold text-slate-300">Detailed Structural Observations</h3>
                    <span className="text-[0.65rem] text-slate-500 uppercase tracking-widest">Last Audited: Today, 04:00 GMT</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[0.65rem] uppercase tracking-widest text-slate-500 border-b border-[#494454]/10">
                                <th className="px-8 py-4 font-normal">Classification</th>
                                <th className="px-8 py-4 font-normal">Oct 23 Value</th>
                                <th className="px-8 py-4 font-normal">Variance (%)</th>
                                <th className="px-8 py-4 font-normal">Risk Profile</th>
                                <th className="px-8 py-4 font-normal text-right">Narrative Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-[#e5e2e3]">
                            <tr className="border-b border-[#494454]/10 hover:bg-white/5 transition-colors">
                                <td className="px-8 py-6 font-medium text-[#e5e2e3]">Fixed Asset Maintenance</td>
                                <td className="px-8 py-6 font-body">$245,000.00</td>
                                <td className="px-8 py-6 text-danger">-2.4%</td>
                                <td className="px-8 py-6">
                                    <span className="px-2 py-0.5 bg-[#353436] text-[0.6rem] uppercase tracking-widest text-slate-300">Static</span>
                                </td>
                                <td className="px-8 py-6 text-right text-slate-400 italic font-serif">Expected cyclicality.</td>
                            </tr>
                            <tr className="border-b border-[#494454]/10 hover:bg-white/5 transition-colors">
                                <td className="px-8 py-6 font-medium text-[#e5e2e3]">Operational Overheads</td>
                                <td className="px-8 py-6 font-body">$812,400.00</td>
                                <td className="px-8 py-6 text-[#d0bcff]">+8.1%</td>
                                <td className="px-8 py-6">
                                    <span className="px-2 py-0.5 bg-[#d0bcff]/10 text-[0.6rem] uppercase tracking-widest text-[#d0bcff]">Monitoring</span>
                                </td>
                                <td className="px-8 py-6 text-right text-slate-400 italic font-serif">Scaling logistical infrastructure.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-8 py-6 font-medium text-[#e5e2e3]">Luxury Lifestyle Alts</td>
                                <td className="px-8 py-6 font-body">$120,000.00</td>
                                <td className="px-8 py-6 text-[#d0bcff]">-12.0%</td>
                                <td className="px-8 py-6">
                                    <span className="px-2 py-0.5 bg-[#353436] text-[0.6rem] uppercase tracking-widest text-slate-300">Optimized</span>
                                </td>
                                <td className="px-8 py-6 text-right text-slate-400 italic font-serif">Mandate compliance achieved.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Narrative Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                    <h5 className="text-[0.75rem] uppercase tracking-[0.2em] font-label text-[#d0bcff]">Chief Analyst Statement</h5>
                    <p className="text-xl font-serif leading-relaxed text-[#e5e2e3] italic">
                        The transition observed this month reinforces our commitment to long-term architectural stability. By reducing liquid outflows in luxury categories, the vault has increased its immediate deployment readiness by 14.5% heading into the next fiscal quarter.
                    </p>
                </div>
                <div className="flex items-center gap-8 justify-end">
                    <div className="text-right">
                        <p className="text-[0.65rem] uppercase tracking-widest text-slate-500 mb-2">Download Report</p>
                        <div className="flex gap-2">
                            <button className="p-4 border border-[#494454]/15 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[#e5e2e3]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>picture_as_pdf</span>
                            </button>
                            <button className="p-4 border border-[#494454]/15 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[#e5e2e3]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>table_chart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
