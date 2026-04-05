import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="bg-[#131314] text-[#e5e2e3] font-sans selection:bg-[#d0bcff]/30 min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                .font-serif, .font-headline { font-family: 'Newsreader', serif; }
                .font-body, .font-label { font-family: 'Manrope', sans-serif; }
                
                .glass-panel { backdrop-filter: blur(20px); }
                .ghost-border { outline: 1px solid rgba(73, 68, 84, 0.15); }
                .violet-gradient { background: linear-gradient(45deg, #d0bcff, #a078ff); }
                .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24; }
            `}</style>

            <header className="fixed top-0 w-full z-50 bg-[#131314]/80 backdrop-blur-xl border-b border-[#494454]/15">
                <nav className="flex justify-between items-center w-full px-8 h-20 max-w-[1440px] mx-auto">
                    <div className="text-xl font-serif font-bold text-[#e5e2e3] tracking-tight">The Sovereign Ledger</div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/dashboard" className="text-[#e5e2e3]/60 font-medium hover:text-[#e5e2e3] transition-colors duration-300">Dashboard</Link>
                        <Link to="/transactions" className="text-[#e5e2e3]/60 font-medium hover:text-[#e5e2e3] transition-colors duration-300">Transactions</Link>
                        <Link to="/insights" className="text-[#e5e2e3]/60 font-medium hover:text-[#e5e2e3] transition-colors duration-300">Insights</Link>
                        <Link to="/accounts" className="text-[#e5e2e3]/60 font-medium hover:text-[#e5e2e3] transition-colors duration-300">Security</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/dashboard" className="text-[#e5e2e3]/60 font-medium hover:text-[#e5e2e3] transition-colors duration-300">Login</Link>
                        <Link to="/dashboard" className="violet-gradient text-[#23005c] px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform duration-200">Open Vault</Link>
                    </div>
                </nav>
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[921px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0bcff]/20 blur-[120px] rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a078ff]/10 blur-[150px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl">
                        <span className="inline-block px-4 py-1 mb-6 border border-[#494454]/20 bg-[#353436]/40 backdrop-blur-md text-[10px] tracking-[0.2em] uppercase font-bold text-[#d0bcff]">Zurich Institutional Grade</span>
                        <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">Architectural Wealth <br /> Management.</h1>
                        <p className="text-lg md:text-xl text-[#cbc3d7] max-w-2xl mx-auto mb-12 font-body leading-relaxed">Experience a finance terminal designed for permanence. The Sovereign Ledger provides bespoke asset surveillance with cryptographic precision.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link to="/dashboard" className="violet-gradient text-[#23005c] px-10 py-4 font-bold text-lg w-full md:w-auto">Start Your Ledger</Link>
                            <Link to="/dashboard" className="ghost-border hover:bg-[#353436] px-10 py-4 font-bold text-lg w-full md:w-auto transition-colors">Explore the Terminal</Link>
                        </div>
                    </div>
                </section>

                {/* Dashboard Preview (Asymmetric Bento) */}
                <section className="px-8 pb-32 max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Large Terminal View */}
                        <div className="col-span-12 lg:col-span-8 bg-[#0e0e0f] ghost-border p-1 relative overflow-hidden group">
                            <div className="bg-[#2a2a2b]/60 backdrop-blur-xl p-8 h-full">
                                <div className="flex justify-between items-end mb-12">
                                    <div>
                                        <h3 className="font-serif text-3xl mb-2">Sovereign Dashboard Overview</h3>
                                        <p className="text-[#cbc3d7] text-sm font-label uppercase tracking-widest">Global Asset Distribution</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[#d0bcff] text-4xl font-serif">$2,840,192.42</span>
                                        <div className="flex items-center justify-end gap-2 text-xs text-[#cbc3d7] mt-2">
                                            <span className="w-2 h-2 rounded-full bg-[#d0bcff] animate-pulse"></span>
                                            LIVE FEED SYNCED
                                        </div>
                                    </div>
                                </div>

                                <div className="h-64 flex items-end gap-2 mb-8">
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[40%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[60%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[55%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[75%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[90%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[85%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                    <div className="flex-1 bg-[#d0bcff]/20 h-[100%] hover:bg-[#d0bcff]/40 transition-all duration-500"></div>
                                </div>

                                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#494454]/10">
                                    <div>
                                        <span className="block text-[10px] text-[#958ea0] tracking-widest uppercase mb-1">Monthly Yield</span>
                                        <span className="text-xl font-medium text-[#e5e2e3]">+12.4%</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-[#958ea0] tracking-widest uppercase mb-1">Exposure Index</span>
                                        <span className="text-xl font-medium text-[#e5e2e3]">Low Risk</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-[#958ea0] tracking-widest uppercase mb-1">Last Audit</span>
                                        <span className="text-xl font-medium text-[#e5e2e3]">04.24.24</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Transaction Ledger Side */}
                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                            <div className="flex-1 bg-[#0e0e0f] ghost-border p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-serif text-xl">Secure Transaction Ledger</h4>
                                    <span className="material-symbols-outlined text-[#958ea0]">filter_list</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center group cursor-pointer">
                                        <div>
                                            <p className="text-sm font-bold text-[#e5e2e3]">Zurich Equity Fund</p>
                                            <p className="text-[10px] text-[#958ea0] uppercase tracking-wider">Asset Purchase • 14:02</p>
                                        </div>
                                        <span className="text-[#d0bcff] font-medium">-$12,400.00</span>
                                    </div>
                                    <div className="flex justify-between items-center group cursor-pointer">
                                        <div>
                                            <p className="text-sm font-bold text-[#e5e2e3]">Stripe Settlement</p>
                                            <p className="text-[10px] text-[#958ea0] uppercase tracking-wider">Revenue • 09:15</p>
                                        </div>
                                        <span className="text-[#d0bcff] font-medium">+$45,210.50</span>
                                    </div>
                                    <div className="flex justify-between items-center group cursor-pointer">
                                        <div>
                                            <p className="text-sm font-bold text-[#e5e2e3]">London Real Estate</p>
                                            <p className="text-[10px] text-[#958ea0] uppercase tracking-wider">Dividend • Yesterday</p>
                                        </div>
                                        <span className="text-[#d0bcff] font-medium">+$8,900.00</span>
                                    </div>
                                </div>
                                <button className="mt-8 text-[10px] font-bold text-[#d0bcff] tracking-widest uppercase hover:underline">View All Records</button>
                            </div>

                            <div className="h-48 bg-[#201f20] ghost-border relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                                    alt="Abstract obsidian texture" />
                                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                                    <h5 className="text-xs font-bold uppercase tracking-widest mb-1">Intelligent Insights</h5>
                                    <p className="text-[#cbc3d7] text-sm">Monthly expenditure is down 14% compared to Q1 projections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Matrix */}
                <section className="bg-[#0e0e0f] py-32">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="font-serif text-5xl mb-6">Absolute Control through Cryptographic Design.</h2>
                                <p className="text-[#cbc3d7] font-body">Our ledger architecture is built on the principles of Swiss neutrality and sovereign data ownership.</p>
                            </div>
                            <div className="pb-2">
                                <span className="material-symbols-outlined text-6xl text-[#494454]/30">shield_lock</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#494454]/10 border-y border-[#494454]/10">
                            <div className="p-12 hover:bg-[#353436]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#d0bcff] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                                <h4 className="font-serif text-2xl mb-4">Balance Trends</h4>
                                <p className="text-sm text-[#cbc3d7] leading-relaxed">Algorithmic projection of asset growth using institutional-grade data modeling.</p>
                            </div>
                            <div className="p-12 hover:bg-[#353436]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#d0bcff] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                <h4 className="font-serif text-2xl mb-4">Role-Based Access</h4>
                                <p className="text-sm text-[#cbc3d7] leading-relaxed">Distinguish between Viewer and Admin modes with granular hardware-key verification.</p>
                            </div>
                            <div className="p-12 hover:bg-[#353436]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#d0bcff] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>search_insights</span>
                                <h4 className="font-serif text-2xl mb-4">Advanced Filtering</h4>
                                <p className="text-sm text-[#cbc3d7] leading-relaxed">Deep-search decades of transaction history with millisecond latency.</p>
                            </div>
                            <div className="p-12 hover:bg-[#353436]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#d0bcff] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                                <h4 className="font-serif text-2xl mb-4">Category Insights</h4>
                                <p className="text-sm text-[#cbc3d7] leading-relaxed">Machine-learning analysis of spending velocity and category drift patterns.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-12 text-center max-w-4xl mx-auto">
                    <h3 className="font-serif text-5xl mb-12">The vault is open. Your sovereignty awaits.</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#d0bcff]/10 blur-xl"></div>
                            <Link to="/dashboard" className="relative violet-gradient text-[#23005c] px-12 py-5 font-bold text-xl uppercase tracking-widest text-center inline-block">Establish Connection</Link>
                        </div>
                    </div>
                    <p className="mt-8 text-[10px] text-[#958ea0] tracking-[0.3em] uppercase">No cloud storage. No data harvesting. Complete Isolation.</p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#0e0e0f] w-full py-12 border-t border-[#494454]/10">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 w-full max-w-[1440px] mx-auto">
                    <div className="text-[#e5e2e3]/40 font-sans text-[10px] tracking-widest uppercase text-center md:text-left">
                        © 2024 The Sovereign Ledger. All Rights Reserved. Zurich Institutional Grade.
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#" className="text-[#e5e2e3]/40 font-sans text-[10px] tracking-widest uppercase hover:text-[#8B5CF6] transition-opacity">Terms of Sovereignty</a>
                        <a href="#" className="text-[#e5e2e3]/40 font-sans text-[10px] tracking-widest uppercase hover:text-[#8B5CF6] transition-opacity">Privacy Protocol</a>
                        <a href="#" className="text-[#e5e2e3]/40 font-sans text-[10px] tracking-widest uppercase hover:text-[#8B5CF6] transition-opacity">Institutional Disclosure</a>
                        <a href="#" className="text-[#e5e2e3]/40 font-sans text-[10px] tracking-widest uppercase hover:text-[#8B5CF6] transition-opacity">Contact Vault</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
