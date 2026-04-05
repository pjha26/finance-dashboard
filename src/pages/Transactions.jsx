import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { AdminTransactionModal } from '../components/dashboard/AdminTransactionModal';

const Transactions = () => {
  const { role } = useAppContext();
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">

      {/* Title Section */}
      <header className="mb-12 relative">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-on-surface tracking-tight mb-4">The Sovereign Ledger: <span className="italic font-light">Vault Transactions</span></h1>
            <p className="font-label text-secondary uppercase tracking-[0.3em] text-sm">Protocol Sequence: ALPHA-9942-X</p>
          </div>
          {role === 'admin' && (
            <button onClick={() => setAddModalOpen(true)} className="ghost-border px-6 py-4 font-label text-xs tracking-widest flex items-center gap-2 hover:bg-primary/10 border-primary transition-colors uppercase text-primary">
              <span className="material-symbols-outlined text-sm" data-icon="add">add</span> New Entry
            </button>
          )}
        </div>
      </header>
      {/* Executive Summary Glass Panel */}
      <section className="glass-panel ghost-border p-10 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">Executive Narrative</span>
            <p className="font-headline text-2xl md:text-3xl text-on-surface leading-relaxed">
              Portfolio activity remains within <span className="text-tertiary">optimal governance parameters</span>. 12 Nodes reconciled in the last cycle. Aggregate risk exposure has decreased by <span className="text-tertiary">1.4%</span> since the previous epoch.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:text-right">
            <div className="flex justify-end gap-12">
              <div>
                <p className="font-label text-secondary text-xs uppercase tracking-widest mb-1">Active Nodes</p>
                <p className="font-headline text-3xl">442</p>
              </div>
              <div>
                <p className="font-label text-secondary text-xs uppercase tracking-widest mb-1">Vault Integrity</p>
                <p className="font-headline text-3xl text-tertiary">99.9%</p>
              </div>
            </div>
            <div className="w-full h-px bg-outline-variant/20"></div>
            <div className="flex justify-end items-center gap-4 font-label text-sm">
              <span className="material-symbols-outlined text-primary" data-icon="update">update</span>
              <span className="text-secondary opacity-60">Last verified: Today, 04:12 UTC</span>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
        <div className="relative flex-1 group w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary opacity-40 group-focus-within:text-primary transition-colors" data-icon="search">search</span>
          <input className="w-full bg-surface-container-low border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-12 py-4 font-label text-sm transition-all outline-none" placeholder="Filter by Node ID, Asset Class, or Verification Hash..." type="text" />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="ghost-border px-6 py-4 font-label text-xs tracking-widest flex items-center gap-2 hover:bg-surface-container-high transition-colors uppercase">
            <span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span> Period
          </button>
          <button className="ghost-border px-6 py-4 font-label text-xs tracking-widest flex items-center gap-2 hover:bg-surface-container-high transition-colors uppercase">
            <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span> Filters
          </button>
        </div>
      </div>
      {/* Transaction Groups */}
      <div className="space-y-16">
        {/* Group 1: Real Estate */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 bg-primary"></div>
            <h3 className="font-label text-secondary text-sm uppercase tracking-[0.4em]">Node 017-X: Real Estate Assets</h3>
          </div>
          <div className="space-y-px">
            {/* Transaction Row 1 */}
            <div className="grid grid-cols-12 gap-4 items-center p-6 bg-surface-container hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="col-span-1 flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center bg-background">
                  <span className="material-symbols-outlined text-primary" data-icon="apartment">apartment</span>
                </div>
              </div>
              <div className="col-span-3">
                <p className="font-body text-sm font-semibold text-on-surface">Capital Accretion: Unit 402</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">TX: 0x442...EF89</p>
              </div>
              <div className="col-span-2">
                <p className="font-label text-xs text-secondary opacity-60 mb-1">NODE ID</p>
                <p className="font-body text-sm">RE-ALPHA-42</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2 text-tertiary">
                  <span className="material-symbols-outlined text-sm" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">Verified</span>
                </div>
                <p className="font-label text-[10px] text-secondary opacity-40 uppercase">Conf: 12,442</p>
              </div>
              <div className="col-span-3 text-right">
                <p className="font-headline text-lg">+ 14,240.00 USD</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">OCT 14, 2023 | 14:22</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-secondary" data-icon="north_east">north_east</span>
                </button>
              </div>
            </div>
            {/* Transaction Row 2 */}
            <div className="grid grid-cols-12 gap-4 items-center p-6 bg-surface-container-low hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="col-span-1 flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center bg-background">
                  <span className="material-symbols-outlined text-primary" data-icon="domain">domain</span>
                </div>
              </div>
              <div className="col-span-3">
                <p className="font-body text-sm font-semibold text-on-surface">Governance Fee: Prop-MGT</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">TX: 0x881...AC21</p>
              </div>
              <div className="col-span-2">
                <p className="font-label text-xs text-secondary opacity-60 mb-1">NODE ID</p>
                <p className="font-body text-sm">RE-BETA-09</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2 text-tertiary">
                  <span className="material-symbols-outlined text-sm" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">Verified</span>
                </div>
                <p className="font-label text-[10px] text-secondary opacity-40 uppercase">Conf: 9,211</p>
              </div>
              <div className="col-span-3 text-right">
                <p className="font-headline text-lg">- 2,100.00 USD</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">OCT 12, 2023 | 09:15</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-secondary" data-icon="north_east">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Group 2: Equities */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 bg-primary"></div>
            <h3 className="font-label text-secondary text-sm uppercase tracking-[0.4em]">Node 044-Y: Sovereign Equities</h3>
          </div>
          <div className="space-y-px">
            {/* Transaction Row 3 */}
            <div className="grid grid-cols-12 gap-4 items-center p-6 bg-surface-container hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="col-span-1 flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center bg-background">
                  <span className="material-symbols-outlined text-primary" data-icon="monitoring">monitoring</span>
                </div>
              </div>
              <div className="col-span-3">
                <p className="font-body text-sm font-semibold text-on-surface">Divident Liquidation: NASDAQ:GOL</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">TX: 0x112...BD23</p>
              </div>
              <div className="col-span-2">
                <p className="font-label text-xs text-secondary opacity-60 mb-1">NODE ID</p>
                <p className="font-body text-sm">EQ-GOLD-01</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon="pending">pending</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">Pending</span>
                </div>
                <p className="font-label text-[10px] text-secondary opacity-40 uppercase">Conf: 2</p>
              </div>
              <div className="col-span-3 text-right">
                <p className="font-headline text-lg">+ 82,900.00 USD</p>
                <p className="font-label text-[10px] text-secondary opacity-50 uppercase tracking-tighter">OCT 14, 2023 | 16:45</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-secondary" data-icon="north_east">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Architectural Background Decoration */}
      <div className="fixed top-[20%] right-[-5%] w-[40vw] h-[40vw] border border-primary/5 rotate-45 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[10%] w-[30vw] h-[30vw] border border-primary/5 -rotate-12 pointer-events-none"></div>

      <AdminTransactionModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} />

    </div>
  );
};

export default Transactions;
