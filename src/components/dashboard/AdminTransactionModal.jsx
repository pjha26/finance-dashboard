import React, { useState } from 'react';
import { useFinanceContext } from '../../context/FinanceContext';
import { format } from 'date-fns';

export const AdminTransactionModal = ({ isOpen, onClose }) => {
    const { addTransaction } = useFinanceContext();
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [category, setCategory] = useState('EQUITIES');
    const [node, setNode] = useState('Mainframe A');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || isNaN(amount)) return;
        addTransaction({
            date,
            amount: Number(amount),
            category,
            type: category === 'EQUITIES' || category === 'REAL ESTATE' ? 'expense' : 'income',
            description: `Admin Entry: ${category}`,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
            {/* Backdrop Blur Layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>

            {/* The Architectural Form Card */}
            <div className="relative w-full max-w-4xl bg-[#2a2a2b]/60 backdrop-blur-2xl border border-[#494454]/50 shadow-[0_0_30px_rgba(208,188,255,0.15)] flex flex-col md:flex-row overflow-hidden rounded-sm animate-in slide-in-from-bottom-4 duration-500">

                {/* Left Column: Context & Metadata */}
                <div className="w-full md:w-1/3 bg-[#0e0e0f]/80 p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 border-[#494454]/30 md:border-r">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#d0bcff] animate-pulse"></div>
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#d0bcff]">Secure Entry Session</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#e5e2e3] leading-tight -tracking-[0.02em]">Institutional<br />Add-Transaction</h2>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            All entries are cryptographically hashed and mirrored across three verification nodes. Manual overrides require multi-sig approval.
                        </p>
                    </div>
                    <div className="space-y-8 pt-12">
                        <div className="flex flex-col gap-1">
                            <label className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">Operator ID</label>
                            <span className="text-xs font-mono text-slate-300">ADMIN_SR_0492</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">Status</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-[#e5e2e3] bg-[#353436]/40 px-3 py-1 border border-[#494454]/30 rounded-sm">Verification Pending</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form */}
                <div className="flex-1 p-8 sm:p-10 bg-transparent flex flex-col justify-center">
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        {/* Amount Entry */}
                        <div className="relative group">
                            <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-2">Principal Amount (USD)</label>
                            <div className="relative overflow-hidden w-full group">
                                <span className="absolute left-0 bottom-4 text-3xl font-serif text-slate-500 opacity-50">$</span>
                                <input
                                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#494454] text-5xl font-serif py-4 pl-10 focus:ring-0 focus:border-[#d0bcff] transition-colors focus:outline-none text-[#e5e2e3]"
                                    placeholder="0.00"
                                    type="number"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    autoFocus
                                />
                                <div className={`absolute bottom-0 left-0 right-0 h-px bg-[#d0bcff] transition-all duration-300 origin-left ${amount ? 'scale-x-100' : 'scale-x-0 group-focus-within:scale-x-100'}`}></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {/* Transaction Date */}
                            <div className="relative group">
                                <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-2">Effective Date</label>
                                <div className="relative group">
                                    <input
                                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#494454] py-3 text-sm tracking-wider focus:ring-0 focus:border-[#d0bcff] transition-colors uppercase text-[#e5e2e3] focus:outline-none"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d0bcff] transition-all duration-300 origin-left scale-x-0 group-focus-within:scale-x-100"></div>
                                </div>
                            </div>

                            {/* Asset Category */}
                            <div className="relative group">
                                <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-2">Category</label>
                                <div className="relative group">
                                    <select
                                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#494454] py-3 text-sm tracking-wider focus:ring-0 focus:border-[#d0bcff] transition-colors appearance-none text-[#e5e2e3] focus:outline-none"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option className="bg-[#131314]">EQUITIES</option>
                                        <option className="bg-[#131314]">REAL ESTATE</option>
                                        <option className="bg-[#131314]">ALTERNATIVES</option>
                                        <option className="bg-[#131314]">FIXED INCOME</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-0 bottom-3 text-slate-500 pointer-events-none" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>expand_more</span>
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d0bcff] transition-all duration-300 origin-left scale-x-0 group-focus-within:scale-x-100"></div>
                                </div>
                            </div>
                        </div>

                        {/* Node Selection */}
                        <div>
                            <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-4">Verification Node Selection</label>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setNode('Mainframe A')}
                                    className={`p-4 flex flex-col items-center gap-2 transition-all ${node === 'Mainframe A' ? 'border border-[#d0bcff] bg-[#d0bcff]/10 text-[#d0bcff]' : 'border border-[#494454]/30 hover:bg-white/5 text-slate-500'}`}
                                >
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>hub</span>
                                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Mainframe A</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setNode('Backup Zeta')}
                                    className={`p-4 flex flex-col items-center gap-2 transition-all ${node === 'Backup Zeta' ? 'border border-[#d0bcff] bg-[#d0bcff]/10 text-[#d0bcff]' : 'border border-[#494454]/30 hover:bg-white/5 text-slate-500'}`}
                                >
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>dns</span>
                                    <span className="text-[0.6rem] uppercase tracking-widest font-medium">Backup Zeta</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setNode('Global Cloud')}
                                    className={`p-4 flex flex-col items-center gap-2 transition-all ${node === 'Global Cloud' ? 'border border-[#d0bcff] bg-[#d0bcff]/10 text-[#d0bcff]' : 'border border-[#494454]/30 hover:bg-white/5 text-slate-500'}`}
                                >
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>cloud_done</span>
                                    <span className="text-[0.6rem] uppercase tracking-widest font-medium">Global Cloud</span>
                                </button>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                            <button onClick={onClose} className="text-slate-500 text-[0.7rem] uppercase tracking-[0.2em] hover:text-[#e5e2e3] transition-colors" type="button">Discard Draft</button>
                            <div className="flex gap-4">
                                <button type="button" className="hidden sm:block border border-white/10 px-8 py-3 text-[0.7rem] uppercase tracking-[0.2em] hover:bg-[#353436] transition-colors text-slate-300">Schedule Ledger</button>
                                <button type="submit" className="bg-gradient-to-br from-[#d0bcff] to-[#a078ff] text-[#23005c] px-8 sm:px-10 py-3 font-bold text-[0.7rem] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(208,188,255,0.15)] transition-transform active:scale-95">Commit Entry</button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-50">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>close</span>
                </button>
            </div>
        </div>
    );
};
