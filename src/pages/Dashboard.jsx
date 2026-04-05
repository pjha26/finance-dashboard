import React from 'react';

const Dashboard = () => {
  return (
    <div className="animate-in fade-in duration-500">

<div className="p-8 max-w-[1600px] mx-auto">
{/* Executive Brief Header */}
<header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/10 pb-8">
<div>
<h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-2 tracking-tight">Executive Brief</h1>
<p className="font-body text-secondary max-w-2xl leading-relaxed">Structural analysis of fiscal velocity and liquidity exposure. Your current vault status indicates a <span className="text-tertiary">0.84% optimized growth</span> vector across all nodes.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container p-4 min-w-[180px]">
<span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-1">Net Exposure</span>
<span className="font-headline text-2xl text-on-surface">$12,482,000.00</span>
</div>
<div className="bg-surface-container p-4 min-w-[180px]">
<span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-1">Liquidity Ratio</span>
<span className="font-headline text-2xl text-tertiary">4.2 : 1</span>
</div>
</div>
</header>
{/* Top Grid: Structural Expense & Heatmap */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
{/* Structural Expense Flow (Sankey-style) */}
<div className="lg:col-span-2 glass-panel p-8 relative overflow-hidden">
<div className="flex justify-between items-center mb-10">
<h2 className="font-headline text-2xl">Structural Expense Flow</h2>
<span className="font-label text-[10px] text-primary uppercase tracking-[0.2em]">Real-time Routing</span>
</div>
<div className="relative h-64 flex justify-between items-center">
{/* Source Nodes */}
<div className="flex flex-col justify-between h-full z-10">
<div className="text-right">
<span className="font-label text-[10px] text-outline block">NODE_ALPHA</span>
<span className="font-body text-sm">$4.2M</span>
<div className="sankey-node mt-1 ml-auto"></div>
</div>
<div className="text-right">
<span className="font-label text-[10px] text-outline block">NODE_BETA</span>
<span className="font-body text-sm">$1.8M</span>
<div className="sankey-node mt-1 ml-auto"></div>
</div>
<div className="text-right">
<span className="font-label text-[10px] text-outline block">RESERVE_C</span>
<span className="font-body text-sm">$6.4M</span>
<div className="sankey-node mt-1 ml-auto"></div>
</div>
</div>
{/* Links (Abstracted) */}
<div className="absolute inset-x-12 inset-y-0 overflow-hidden pointer-events-none opacity-40">
<div className="sankey-link absolute top-6 left-0 right-0 h-8 skew-y-6"></div>
<div className="sankey-link absolute top-24 left-0 right-0 h-12 -skew-y-3"></div>
<div className="sankey-link absolute bottom-12 left-0 right-0 h-10 skew-y-2"></div>
<div className="sankey-link absolute bottom-4 left-0 right-0 h-4 -skew-y-6"></div>
</div>
{/* Category Destination Nodes */}
<div className="flex flex-col justify-between h-full z-10">
<div>
<div className="sankey-node mb-1 bg-tertiary"></div>
<span className="font-label text-[10px] text-outline block uppercase">Operations</span>
<span className="font-body text-sm">$3.1M</span>
</div>
<div>
<div className="sankey-node mb-1 bg-tertiary"></div>
<span className="font-label text-[10px] text-outline block uppercase">Acquisitions</span>
<span className="font-body text-sm">$5.9M</span>
</div>
<div>
<div className="sankey-node mb-1 bg-tertiary"></div>
<span className="font-label text-[10px] text-outline block uppercase">Yield_Lock</span>
<span className="font-body text-sm">$3.4M</span>
</div>
</div>
</div>
</div>
{/* Node Performance Heatmap */}
<div className="glass-panel p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline text-2xl">Node Heatmap</h2>
<span className="material-symbols-outlined text-outline">grid_view</span>
</div>
<div className="grid grid-cols-4 gap-2 aspect-square">
{/* Simulated Heatmap Grid */}
<div className="bg-tertiary/20 border border-tertiary/40"></div>
<div className="bg-tertiary/40 border border-tertiary/60"></div>
<div className="bg-tertiary/10 border border-tertiary/20"></div>
<div className="bg-tertiary/60 border border-tertiary/80"></div>
<div className="bg-primary/10 border border-primary/20"></div>
<div className="bg-tertiary/30 border border-tertiary/50"></div>
<div className="bg-tertiary/50 border border-tertiary/70"></div>
<div className="bg-tertiary/5 border border-tertiary/10"></div>
<div className="bg-tertiary/70 border border-tertiary/90"></div>
<div className="bg-tertiary/20 border border-tertiary/40"></div>
<div className="bg-primary/20 border border-primary/40"></div>
<div className="bg-tertiary/40 border border-tertiary/60"></div>
<div className="bg-tertiary/15 border border-tertiary/25"></div>
<div className="bg-tertiary/60 border border-tertiary/80"></div>
<div className="bg-tertiary/40 border border-tertiary/60"></div>
<div className="bg-tertiary/90 border border-tertiary/100"></div>
</div>
<div className="mt-6 flex justify-between font-label text-[9px] uppercase tracking-widest text-outline">
<span>Low Velocity</span>
<span>Peak Intensity</span>
</div>
</div>
</div>
{/* Middle Row: Interactive Scatter Plot & Vault Feed */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
{/* Liquidity vs Exposure Scatter Plot */}
<div className="lg:col-span-3 glass-panel p-8 h-[500px] flex flex-col">
<div className="flex justify-between items-center mb-12">
<div>
<h2 className="font-headline text-3xl">Liquidity vs. Exposure</h2>
<p className="font-label text-[10px] text-outline uppercase tracking-widest mt-1">Cross-Asset Risk Distribution</p>
</div>
<div className="flex gap-4">
<span className="flex items-center gap-2 font-label text-[10px] text-on-surface uppercase"><div className="w-2 h-2 bg-primary"></div> Primary Holdings</span>
<span className="flex items-center gap-2 font-label text-[10px] text-on-surface uppercase"><div className="w-2 h-2 bg-tertiary"></div> Hedge Vectors</span>
</div>
</div>
<div className="flex-1 relative border-l border-b border-outline-variant/30 ml-8 mb-8">
{/* Y-Axis Labels */}
<div className="absolute -left-10 top-0 h-full flex flex-col justify-between font-label text-[10px] text-outline py-2">
<span>100%</span>
<span>75%</span>
<span>50%</span>
<span>25%</span>
<span>0%</span>
</div>
{/* X-Axis Labels */}
<div className="absolute -bottom-8 left-0 w-full flex justify-between font-label text-[10px] text-outline px-2">
<span>ALPHA</span>
<span>BETA</span>
<span>GAMMA</span>
<span>DELTA</span>
<span>EPSILON</span>
</div>
{/* Simulated Data Points */}
<div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary ring-8 ring-primary/10 shadow-[0_0_20px_rgba(208,188,255,0.4)]"></div>
<div className="absolute top-1/2 left-2/3 w-3 h-3 bg-tertiary ring-4 ring-tertiary/10"></div>
<div className="absolute top-2/3 left-1/3 w-6 h-6 bg-primary ring-12 ring-primary/5 opacity-80"></div>
<div className="absolute top-1/5 left-1/2 w-4 h-4 bg-tertiary/60"></div>
<div className="absolute bottom-1/4 right-1/4 w-3 h-3 border border-primary bg-primary/20"></div>
<div className="absolute top-1/3 right-1/10 w-2 h-2 bg-on-surface"></div>
{/* Connecting Grid Lines */}
<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
<div className="border-r border-t border-outline-variant/5"></div>
</div>
</div>
</div>
{/* Vault Verification Feed */}
<div className="glass-panel p-8 flex flex-col">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary" data-weight="fill">shield_person</span>
<h2 className="font-headline text-2xl">Vault Feed</h2>
</div>
<div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
<div className="border-l border-primary/40 pl-4 py-1">
<span className="font-label text-[9px] text-outline uppercase tracking-widest block">14:02 UTC // AUTH_SUCCESS</span>
<p className="font-body text-xs mt-1 text-on-surface">Client Terminal accessed via encrypted node [82.1.XX]</p>
</div>
<div className="border-l border-tertiary/40 pl-4 py-1">
<span className="font-label text-[9px] text-outline uppercase tracking-widest block">13:45 UTC // TX_VERIFIED</span>
<p className="font-body text-xs mt-1 text-on-surface">Acquisition of 'Asset_Group_IV' completed. +1.2M USD.</p>
</div>
<div className="border-l border-outline/40 pl-4 py-1">
<span className="font-label text-[9px] text-outline uppercase tracking-widest block">12:10 UTC // YIELD_REBALANCE</span>
<p className="font-body text-xs mt-1 text-on-surface">Reserve C automatically rebalanced for high-volatility window.</p>
</div>
<div className="border-l border-primary/40 pl-4 py-1">
<span className="font-label text-[9px] text-outline uppercase tracking-widest block">09:30 UTC // SECURITY_HEARTBEAT</span>
<p className="font-body text-xs mt-1 text-on-surface">Global surveillance protocols synchronized. Integrity 100%.</p>
</div>
</div>
<button className="mt-auto w-full py-3 bg-surface-container-highest font-label text-[10px] uppercase tracking-widest border border-outline-variant/20 hover:border-primary/50 transition-all">
                        Full Audit Log
                    </button>
</div>
</div>
{/* Bottom Row: Spending Velocity */}
<div className="glass-panel p-8 overflow-hidden">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline text-3xl">Spending Velocity</h2>
<p className="font-label text-[10px] text-outline uppercase tracking-widest mt-1">Rolling 30-Day Outflow Momentum</p>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl text-on-surface">1.24x</span>
<span className="font-label text-xs text-tertiary uppercase">↑ 12% vs LY</span>
</div>
</div>
<div className="h-64 w-full relative">
{/* SVG Area Chart */}
<svg className="w-full h-full opacity-80" preserveAspectRatio="none" viewBox="0 0 1000 200">
<defs>
<linearGradient id="gradient-area" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#d0bcff" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#d0bcff" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,200 L0,150 C100,120 200,180 300,140 C400,100 500,160 600,130 C700,100 800,80 900,110 L1000,90 L1000,200 Z" fill="url(#gradient-area)"></path>
<path d="M0,150 C100,120 200,180 300,140 C400,100 500,160 600,130 C700,100 800,80 900,110 L1000,90" fill="none" stroke="#d0bcff" strokeWidth="2"></path>
{/* Threshold Line */}
<line opacity="0.5" stroke="#4edea3" strokeDasharray="10,10" strokeWidth="1" x1="0" x2="1000" y1="120" y2="120"></line>
</svg>
<div className="absolute bottom-0 w-full flex justify-between px-4 font-label text-[10px] text-outline mt-4">
<span>MAY 01</span>
<span>MAY 07</span>
<span>MAY 14</span>
<span>MAY 21</span>
<span>MAY 31</span>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default Dashboard;
