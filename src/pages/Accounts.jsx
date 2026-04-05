import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Accounts = () => {
  const [frozen, setFrozen] = useState(false);
  const [digitalPayments, setDigitalPayments] = useState(true);
  const [activeAccountTab, setActiveAccountTab] = useState('Fiat');
  return (
    <div className="animate-in fade-in duration-500">

      {/* Header Section */}
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="font-headline text-6xl font-bold tracking-tighter text-on-surface leading-none">Accounts &amp; Wallets</h1>
          <p className="font-label text-on-surface-variant uppercase tracking-[0.3em] text-[10px] mt-4">Estate Governance Cluster • Sovereign Node 017-X</p>
        </div>
        <button onClick={() => toast('Link New Institution Wizard opened', { icon: '🏦' })} className="px-8 py-4 architectural-border text-primary font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary/5 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">add_card</span>
          Add New Account
        </button>
      </header>
      {/* Top Grid: Global Summary & Primary Cards */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Asset Summary Card */}
        <div className="col-span-12 lg:col-span-4 architectural-border bg-[#1c1b1b] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10">
            <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/60 mb-1">Total Assets Portfolio</p>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-5xl font-bold text-on-surface">$2,482,901</span>
              <span className="font-label text-on-surface-variant text-xl">.44</span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-tertiary font-label text-xs tracking-widest border border-tertiary/20 px-2 py-0.5">+12.4%</span>
              <span className="text-on-surface-variant font-label text-[9px] uppercase tracking-widest">vs last month</span>
            </div>
          </div>
          <div className="mt-16 relative z-10">
            <div className="flex justify-between items-end mb-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Liquidity Health Index</span>
              <span className="font-label text-xs font-bold text-tertiary">94/100</span>
            </div>
            <div className="w-full bg-outline-variant/10 h-px">
              <div className="bg-tertiary h-px w-[94%] shadow-[0_0_8px_#4edea3]"></div>
            </div>
          </div>
        </div>
        {/* Cards Display Area */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
          {/* Obsidian Card */}
          <div className="architectural-border bg-[#0e0e0e] p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-[#131313] transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/60 mb-2">Obsidian Reserve</p>
                <p className="font-label text-xl tracking-[0.3em] font-medium text-on-surface">•••• 8821</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 text-3xl">contactless</span>
            </div>
            <div className="flex justify-between items-end mt-12">
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60">Balance</p>
                <p className="font-headline text-3xl text-on-surface">$42,012.00</p>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <span className="text-[10px] font-label uppercase tracking-widest">Visa</span>
                <div className="w-6 h-4 border border-on-surface/20"></div>
              </div>
            </div>
          </div>
          {/* Digital Card */}
          <div className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-primary/60 mb-2">Digital Expense</p>
                <p className="font-label text-xl tracking-[0.3em] font-medium text-on-surface">•••• 4490</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 text-3xl">digital_wellbeing</span>
            </div>
            <div className="flex justify-between items-end mt-12 relative z-10">
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60">Balance</p>
                <p className="font-headline text-3xl text-on-surface">$8,450.90</p>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <span className="text-[10px] font-label uppercase tracking-widest">MC</span>
                <div className="w-6 h-4 border border-on-surface/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section: Accounts & Security */}
      <div className="grid grid-cols-12 gap-8">
        {/* Account List */}
        <div className="col-span-12 lg:col-span-8 glass-card p-10">
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-headline text-3xl text-on-surface">Sovereign Accounts</h3>
            <div className="flex gap-4">
              {['Fiat', 'Crypto', 'Investments'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveAccountTab(tab)}
                  className={activeAccountTab === tab
                    ? "font-label text-[9px] uppercase tracking-widest text-primary border-b border-primary/40 pb-1"
                    : "font-label text-[9px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-1"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {/* Account 1 */}
            <div onClick={() => toast('Account view panel invoked')} className="group flex items-center py-6 border-l border-outline-variant/10 hover:border-primary transition-all relative pl-8 hover:bg-primary/[0.02] cursor-pointer">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-outline-variant group-hover:bg-primary transition-colors"></div>
              <div className="flex-1">
                <p className="font-headline text-lg text-on-surface">Chase Checking (High Yield)</p>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">Active • Last synchronized 2h ago</span>
              </div>
              <div className="text-right">
                <p className="font-label text-lg font-medium text-on-surface">$182,490.12</p>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60">Current Balance</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/30 ml-8 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
            {/* Account 2 */}
            <div onClick={() => toast('Account view panel invoked')} className="group flex items-center py-6 border-l border-outline-variant/10 hover:border-primary transition-all relative pl-8 hover:bg-primary/[0.02] cursor-pointer">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-outline-variant group-hover:bg-primary transition-colors"></div>
              <div className="flex-1">
                <p className="font-headline text-lg text-on-surface">Cold Storage Wallet</p>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">Encrypted • 12.42 BTC</span>
              </div>
              <div className="text-right">
                <p className="font-label text-lg font-medium text-on-surface">$842,001.55</p>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60">Market Value</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/30 ml-8 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
            {/* Account 3 */}
            <div onClick={() => toast('Account view panel invoked')} className="group flex items-center py-6 border-l border-outline-variant/10 hover:border-primary transition-all relative pl-8 hover:bg-primary/[0.02] cursor-pointer">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-outline-variant group-hover:bg-primary transition-colors"></div>
              <div className="flex-1">
                <p className="font-headline text-lg text-on-surface">Vanguard Brokerage</p>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">Managed Portfolio • VTSAX</span>
              </div>
              <div className="text-right">
                <p className="font-label text-lg font-medium text-on-surface">$1,450,299.77</p>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60">Invested Equity</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/30 ml-8 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Controls Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Security Card */}
          <div className="architectural-border bg-[#0e0e0e] p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <h3 className="font-label uppercase tracking-widest text-[11px] text-on-surface">Card Security Protocol</h3>
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-label text-xs text-on-surface">Freeze All Nodes</p>
                  <p className="font-label text-[9px] text-on-surface-variant/60 uppercase tracking-widest mt-1">Instant global transaction kill-switch</p>
                </div>
                <div
                  onClick={() => {
                    setFrozen(!frozen);
                    if (!frozen) toast('Emergency Freeze Activated!', { style: { background: '#ef4444', color: '#fff' } });
                    else toast('Nodes Unfrozen', { icon: '✅' });
                  }}
                  className={`w-8 h-4 relative cursor-pointer transition-colors ${frozen ? 'bg-primary/20' : 'bg-outline-variant/20'}`}
                >
                  <div className={`absolute top-0 h-full w-4 transition-all ${frozen ? 'right-0 bg-primary shadow-[0_0_8px_#8B5CF6]' : 'left-0 bg-outline-variant'}`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-label text-xs text-on-surface">Digital Payments</p>
                  <p className="font-label text-[9px] text-on-surface-variant/60 uppercase tracking-widest mt-1">Allow web-based cipher transactions</p>
                </div>
                <div
                  onClick={() => {
                    setDigitalPayments(!digitalPayments);
                    toast(digitalPayments ? 'Digital Payments Disabled' : 'Digital Payments Enabled');
                  }}
                  className={`w-8 h-4 relative cursor-pointer transition-colors ${digitalPayments ? 'bg-primary/20' : 'bg-outline-variant/20'}`}
                >
                  <div className={`absolute top-0 h-full w-4 transition-all ${digitalPayments ? 'right-0 bg-primary shadow-[0_0_8px_#8B5CF6]' : 'left-0 bg-outline-variant'}`}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Spending Limits */}
          <div className="architectural-border bg-[#1c1b1b] p-8">
            <h3 className="font-headline text-xl text-on-surface mb-8">Spending Thresholds</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between font-label text-[9px] uppercase tracking-widest mb-3">
                  <span className="text-on-surface-variant">Daily Threshold ($10,000)</span>
                  <span className="text-on-surface">$2,100 utilized</span>
                </div>
                <div className="w-full bg-outline-variant/10 h-px">
                  <div className="bg-primary h-px w-[21%] shadow-[0_0_8px_#8B5CF6]"></div>
                </div>
              </div>
              <button onClick={() => toast('Risk settings opened', { icon: '⚙️' })} className="font-label text-[9px] uppercase tracking-widest text-primary hover:text-on-surface transition-colors">Adjust Risk Parameters →</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Accounts;
