import { Star, ArrowRight, Activity, Grid, PieChart, Wallet, PlusSquare, Shield, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-sans selection:bg-[#D6FF38] selection:text-black">
            {/* Nav */}
            <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full border-b border-black/5">
                <div className="flex items-center gap-2">
                    <div className="bg-[#111111] p-1.5 rounded-lg text-[#D6FF38]">
                        <Compass className="size-5" />
                    </div>
                    <span className="font-black text-xl tracking-tighter font-display">FinDash</span>
                </div>

                <div className="hidden md:flex items-center gap-10 text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                    <a href="#" className="hover:text-black transition-colors">Features</a>
                    <a href="#" className="hover:text-black transition-colors">How it works</a>
                    <a href="#" className="hover:text-black transition-colors">Pricing</a>
                    <a href="#" className="hover:text-black transition-colors">Reviews</a>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/dashboard" className="hidden sm:block text-[13px] uppercase tracking-wide font-bold text-gray-500 hover:text-black transition-colors">Log in</Link>
                    <Link to="/dashboard" className="bg-[#F5F3EC] border border-black/10 text-black text-xs font-bold px-5 py-3 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-wide">Get started free</Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                {/* Hero Section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8 items-center">
                    <div className="max-w-xl mx-auto xl:mx-0">
                        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-[10px] font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
                            <Star className="size-3 text-[#D6FF38] fill-[#D6FF38]" />
                            <span>Over 10M+ users tracking smart</span>
                        </div>
                        <h1 className="text-7xl md:text-[6.5rem] leading-[0.85] font-black font-display tracking-tighter mb-8">
                            Your money, <br />finally <br />
                            <span className="bg-[#D6FF38] px-2 rounded-lg inline-block mt-2 text-black">clear.</span>
                        </h1>
                        <p className="text-[#5A5A58] text-lg font-medium mb-12 leading-relaxed max-w-md">
                            Stop guessing where your money goes. FinDash gives you a live view of your finances — spending, income, and savings — in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
                            <Link to="/dashboard" className="w-full sm:w-auto flex items-center justify-between gap-4 pl-8 pr-2 py-2 bg-[#111111] text-white rounded-full hover:bg-black/80 transition-all font-bold group">
                                <span className="text-[13px] uppercase tracking-wider">Get started free</span>
                                <div className="bg-[#D6FF38] text-black p-2.5 rounded-full group-hover:scale-105 transition-transform">
                                    <ArrowRight size={18} strokeWidth={3} />
                                </div>
                            </Link>
                            <a href="#" className="w-full sm:w-auto px-8 py-[18px] bg-[#FDFBF7] border border-black/10 rounded-full font-bold text-gray-700 hover:bg-white hover:text-black transition-colors text-center text-[13px] uppercase tracking-wider">
                                See how it works
                            </a>
                        </div>

                        <div className="flex items-center justify-center sm:justify-start gap-4 border-t border-black/10 pt-8 mt-8">
                            <div className="flex -space-x-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#FDFBF7] flex items-center justify-center text-[9px] font-black ${['bg-[#FFD166]', 'bg-[#EF476F]', 'bg-[#118AB2]', 'bg-[#06D6A0]'][i]} text-black shadow-sm`}>
                                        {['JD', 'SM', 'AK', 'RL'][i]}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest max-w-[140px] leading-tight">Joined by 10,000+ people this month</p>
                        </div>
                    </div>

                    {/* Dashboard Mockup - Dark Mode Style */}
                    <div className="relative w-full max-w-lg mx-auto xl:max-w-none xl:ml-auto">
                        <div className="absolute inset-0 bg-[#D6FF38] rounded-[3rem] blur-[120px] opacity-[0.15] transform translate-x-10 translate-y-10"></div>
                        <div className="bg-[#161616] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D6FF38]/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2"></div>

                            <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3">Total Balance</p>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-5xl md:text-6xl font-black font-display tracking-tighter shadow-sm">₹2,84,620</h2>
                            </div>
                            <div className="inline-block border border-[#D6FF38]/20 text-xs font-bold bg-[#1C2C1D]/50 text-[#D6FF38] px-3 py-1.5 rounded-full mb-12">
                                + 12.4% this month
                            </div>

                            <div className="flex items-end gap-2 h-20 mb-12 w-48 opacity-80 mix-blend-screen">
                                {[30, 45, 25, 60, 40].map((h, i) => (
                                    <div key={i} className="w-8 rounded-sm bg-white/10 relative" style={{ height: `${h}%` }}></div>
                                ))}
                                <div className="w-8 h-[80%] rounded-sm bg-[#D6FF38] relative shadow-[0_0_15px_rgba(214,255,56,0.3)]"></div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: 'Salary (Mar)', val: '+₹85,000', color: 'text-[#D6FF38]' },
                                    { label: 'Food & Dining', val: '-₹8,450', color: 'text-red-400' },
                                    { label: 'Investments', val: '+₹12,200', color: 'text-[#D6FF38]' },
                                    { label: 'Subscriptions', val: '-₹5,120', color: 'text-red-400' },
                                    { label: 'Not this month', val: '+₹1,000', color: 'text-[#D6FF38]' },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/[0.03] pb-4 last:border-0 last:pb-0">
                                        <span className="text-xs text-white/50 font-medium uppercase tracking-wider">{item.label}</span>
                                        <span className={`text-sm font-black tracking-tight ${item.color}`}>{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Black Stats Strip */}
            <div className="bg-[#111111] py-20 mt-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                    <div className="flex flex-col pt-8 md:pt-0">
                        <p className="text-6xl font-black font-display text-[#D6FF38] tracking-tighter mb-2">10M+</p>
                        <p className="text-[#5A5A58] text-[11px] uppercase tracking-widest font-bold">Active users<br />worldwide</p>
                    </div>
                    <div className="flex flex-col md:pl-16 pt-8 md:pt-0">
                        <p className="text-6xl font-black font-display text-[#D6FF38] tracking-tighter mb-2">₹4.2T</p>
                        <p className="text-[#5A5A58] text-[11px] uppercase tracking-widest font-bold">Transactions tracked</p>
                    </div>
                    <div className="flex flex-col md:pl-16 pt-8 md:pt-0">
                        <p className="text-6xl font-black font-display text-[#D6FF38] tracking-tighter mb-2">99.9%</p>
                        <p className="text-[#5A5A58] text-[11px] uppercase tracking-widest font-bold">Platform uptime</p>
                    </div>
                </div>
            </div>

            {/* Features Bento */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4">What you get</p>
                <h2 className="text-5xl md:text-[4.5rem] leading-[0.95] font-black font-display tracking-tighter mb-20 max-w-2xl">
                    Built around how you actually think about money
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Activity, title: 'Live spending tracker', desc: 'See every transaction the moment it happens. No more end-of-month surprises.' },
                        { icon: Grid, title: 'Smart categorization', desc: 'Transactions are sorted automatically — food, travel, and entertainment.' },
                        { icon: PieChart, title: 'Monthly insights', desc: 'Learn exactly what changed month-over-month and why your balance moved.' },
                        { icon: Wallet, title: 'Budget planning', desc: 'Set spending limits per category and get notified before you overshoot.' },
                        { icon: PlusSquare, title: 'Multi-account view', desc: 'Connect all your accounts and see your net worth in one number.' },
                        { icon: Shield, title: 'Bank-grade security', desc: '256-bit encryption and read-only access. Your data never leaves your device.' },
                    ].map((f, i) => (
                        <div key={i} className="bg-[#F5F3EC] p-10 rounded-[2rem] hover:bg-[#EAE7DF] transition-colors border border-black/[0.03]">
                            <div className="bg-[#1A1A1A] w-14 h-14 rounded-2xl flex items-center justify-center text-[#D6FF38] mb-8 shadow-inner">
                                <f.icon size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="font-bold text-xl mb-4 pr-10">{f.title}</h3>
                            <p className="text-[#5A5A58] text-sm leading-relaxed font-medium">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 max-w-7xl mx-auto px-6 border-t border-black/5">
                <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4">What people say</p>
                <h2 className="text-5xl md:text-[4.5rem] leading-[0.95] font-black font-display tracking-tighter mb-20 max-w-3xl">
                    People who stopped guessing
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { q: "I used to dread my bank app. It was a chore. FinDash just... solved that.", n: "Priya Menon", r: "Software Engineer", c: "bg-purple-100/50" },
                        { q: "The monthly comparison view is the first thing I open on the 1st of every month. Amazing.", n: "Rohan Sharma", r: "Product Manager", c: "bg-[#D6FF38]/20" },
                        { q: "Simple enough that I actually use it every day. That's the hard part, and FinDash nailed it.", n: "Alex Rivera", r: "Freelance Designer", c: "bg-orange-100/50" },
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-black/5 flex flex-col h-full">
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#D6FF38] text-[#D6FF38]" />)}
                            </div>
                            <p className="text-[15px] font-medium leading-relaxed mb-10 italic text-[#111] opacity-90 grow">"{t.q}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-10 h-10 rounded-full ${t.c} flex items-center justify-center font-bold text-xs text-black border border-black/5`}>
                                    {t.n.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-bold text-[13px]">{t.n}</p>
                                    <p className="text-[11px] text-[#5A5A58] uppercase tracking-wider mt-0.5">{t.r}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Neo-Green Footer CTA */}
            <section className="bg-[#D6FF38] py-32 text-center px-6">
                <h2 className="text-5xl md:text-[5.5rem] leading-[0.9] font-black font-display tracking-tighter mb-8 max-w-3xl mx-auto">
                    Start knowing your money.
                </h2>
                <p className="text-black/80 font-semibold mb-12 max-w-xl mx-auto text-sm md:text-base">
                    Free forever on the basics. No credit card needed. Takes 2 minutes to set up.
                </p>
                <div className="flex justify-center">
                    <Link to="/dashboard" className="text-xs uppercase tracking-widest text-[#111111] font-black border-b-2 border-black/20 pb-1 hover:border-black transition-colors">
                        Create your free account →
                    </Link>
                </div>
            </section>

            {/* Deep Footer */}
            <footer className="bg-[#111111] text-[#A1A1AA] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                        <span className="font-black text-white text-xl tracking-tighter font-display">FinDash</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#5A5A58]">
                        <a href="#" className="hover:text-[#D6FF38] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#D6FF38] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#D6FF38] transition-colors">Security</a>
                        <a href="#" className="hover:text-[#D6FF38] transition-colors">Support</a>
                    </div>
                    <p className="text-[10px] text-[#5A5A58] font-bold uppercase tracking-widest">© 2026 FinDash</p>
                </div>
            </footer>
        </div>
    );
}
