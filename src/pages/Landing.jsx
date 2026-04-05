import { Link } from 'react-router-dom';
import {
    DollarSign, TrendingUp, CreditCard, ShieldCheck,
    BellRing, BarChart3, Star, ArrowRight,
    Target, Check, Wallet, BadgeDollarSign, Sun, Moon
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

/* ─── Helpers ─────────────────────────────── */
const formatCurrency = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

/* ─── Abstract UI card — spending preview ─── */
const SpendingMockCard = () => (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 p-6 w-full max-w-sm mx-auto">
        <p className="text-xs text-gray-400 font-medium mb-1">Total balance</p>
        <p className="text-3xl font-black text-gray-900 font-display">$6,248.50</p>

        <div className="mt-5 space-y-3">
            {[
                { cat: 'Subscriptions', amount: -142, pct: 20, color: 'bg-brand' },
                { cat: 'Dining', amount: -387, pct: 55, color: 'bg-warning' },
                { cat: 'Rent', amount: -1500, pct: 100, color: 'bg-gray-200' },
            ].map(({ cat, amount, pct, color }) => (
                <div key={cat}>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">{cat}</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(amount)}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">💡 3 subscriptions to review</span>
            <span className="text-xs font-semibold text-brand cursor-pointer">Review →</span>
        </div>
    </div>
);

/* ─── Feature row (Z-pattern) ────────────── */
const FeatureRow = ({ icon: Icon, eyebrow, title, description, cta, ctaHref, reverse, children }) => (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest">{eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 leading-tight">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
            <a href={ctaHref || '#'} className="flex items-center gap-1.5 text-brand font-semibold text-sm hover:underline w-fit">
                {cta} <ArrowRight size={15} />
            </a>
        </div>
        {/* Graphic */}
        <div className="flex-1 flex items-center justify-center w-full">
            {children}
        </div>
    </div>
);

/* ─── Credit score mock ──────────────────── */
const CreditMockCard = () => (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 p-8 w-full max-w-sm mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500 font-medium">Your credit score</p>
        <div className="relative w-36 h-36">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#f0f0f0" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#EE3124" strokeWidth="12"
                    strokeDasharray="314" strokeDashoffset="80" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-gray-900">748</span>
                <span className="text-xs text-success font-semibold">Good</span>
            </div>
        </div>
        <p className="text-xs text-gray-400 text-center">Updated today · No impact to score</p>
    </div>
);

/* ─── Savings mock ───────────────────────── */
const SavingsMockCard = () => (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 p-6 w-full max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500 font-medium">Emergency Fund</p>
            <span className="text-xs bg-success-light text-success font-semibold px-2.5 py-1 rounded-full">On track</span>
        </div>
        <p className="text-3xl font-black text-gray-900 font-display">$3,200</p>
        <p className="text-sm text-gray-400 mt-1">Goal: $5,000</p>
        <div className="mt-4 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand rounded-full" style={{ width: '64%' }} />
        </div>
        <p className="text-xs text-gray-400 mt-2">64% complete · 3 months to goal</p>
        <button className="mt-5 w-full bg-gray-900 text-white text-sm font-bold py-3 rounded-2xl hover:bg-gray-800 transition-colors">
            Add money
        </button>
    </div>
);

/* ─── Testimonial ────────────────────────── */
const Testimonial = ({ name, handle, text }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">"{text}"</p>
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
                {name[0]}
            </div>
            <div>
                <p className="text-gray-900 font-semibold text-sm">{name}</p>
                <p className="text-gray-400 text-xs">{handle}</p>
            </div>
        </div>
    </div>
);

/* ─── Pricing check ──────────────────────── */
const CheckItem = ({ text, subtle }) => (
    <li className={`flex items-start gap-3 text-sm ${subtle ? 'text-gray-400' : 'text-gray-700'}`}>
        <Check size={15} className={`mt-0.5 shrink-0 ${subtle ? 'text-gray-300' : 'text-brand'}`} />
        {text}
    </li>
);

/* ════════════════════════════════════════════ */
/*  LANDING PAGE                               */
/* ════════════════════════════════════════════ */
const Landing = () => {
    const { theme, toggleTheme } = useAppContext();
    return (
        <div className="min-h-screen font-display overflow-x-hidden" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>

            {/* ══ NAV ════════════════════════════════ */}
            <nav className="sticky top-0 z-50 border-b shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-brand p-1.5 rounded-lg text-white">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-xl font-black tracking-tight" style={{ color: 'var(--color-foreground)' }}>FinDash</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
                        <a href="#features" className="hover:text-brand transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-brand transition-colors">How it works</a>
                        <a href="#pricing" className="hover:text-brand transition-colors">Pricing</a>
                        <a href="#reviews" className="hover:text-brand transition-colors">Reviews</a>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg transition-colors hover:bg-brand/10 hover:text-brand"
                            style={{ color: 'var(--color-muted-foreground)' }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <Link
                            to="/dashboard"
                            className="hidden md:block text-sm font-semibold border px-4 py-2 rounded-lg transition-all hover:border-brand hover:text-brand"
                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-foreground)' }}
                        >
                            Log in
                        </Link>
                        <Link
                            to="/dashboard"
                            className="bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors shadow-sm dark:bg-brand dark:hover:bg-brand-hover"
                        >
                            Sign up free
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ══ HERO ═══════════════════════════════ */}
            <section className="pt-20 pb-28 px-6 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
                {/* Subtle red glow behind */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]"
                    style={{ background: 'radial-gradient(ellipse at center, #EE3124 0%, transparent 70%)' }}
                />

                <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold px-4 py-2 rounded-full">
                        ★ Rated #1 personal finance app — join 10M+ members
                    </div>

                    {/* Headline */}
                    <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.04] tracking-tight" style={{ color: 'var(--color-foreground)' }}>
                        The money app<br />
                        <span className="text-brand">that works for you</span>
                    </h1>

                    <p className="text-xl max-w-xl leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                        Track spending, manage subscriptions, build a budget — all in one clean, powerful dashboard.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <Link
                            to="/dashboard"
                            className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-gray-700 transition-colors shadow-xl text-base"
                        >
                            Get started — it's free <ArrowRight size={18} />
                        </Link>
                        <a
                            href="#how-it-works"
                            className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-2xl hover:border-gray-400 transition-all text-base"
                        >
                            See how it works
                        </a>
                    </div>

                    {/* App mock */}
                    <div className="mt-12 w-full">
                        <SpendingMockCard />
                    </div>

                    {/* Trust logos bar */}
                    <div className="mt-12 flex flex-col items-center gap-4 w-full">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">As featured in</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
                            {['Forbes', 'WSJ', 'TechCrunch', 'TIME', 'Business Insider'].map(name => (
                                <span key={name} className="text-gray-500 font-bold text-base tracking-tight">{name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ STATS BAND ═════════════════════════ */}
            <section className="bg-brand py-10 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {[
                        { value: '$2.5B+', label: 'Saved for members' },
                        { value: '10M+', label: 'Active users' },
                        { value: '4.8 ★', label: 'App Store rating' },
                    ].map(({ value, label }) => (
                        <div key={label} className="py-4 md:py-0">
                            <p className="text-4xl font-black">{value}</p>
                            <p className="text-white/70 text-sm mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ FEATURES (Z-pattern) ═══════════════ */}
            <section id="features" className="py-28 px-6 max-w-6xl mx-auto space-y-28">
                <FeatureRow
                    eyebrow="Spending Insights"
                    title="See where your money actually goes"
                    description="Get an effortless, real-time breakdown of your finances. FinDash categorizes every transaction automatically so you're never caught off guard."
                    cta="Track my spending"
                >
                    <SpendingMockCard />
                </FeatureRow>

                <FeatureRow
                    reverse
                    eyebrow="Credit Score"
                    title="Understand and grow your credit score"
                    description="Access your complete credit report and history. Get alerted to important changes that could impact your score — all for free."
                    cta="Check my credit score"
                >
                    <CreditMockCard />
                </FeatureRow>

                <FeatureRow
                    eyebrow="Savings Autopilot"
                    title="Put your goals on autopilot"
                    description="Turn on autopilot savings and let FinDash save the right amount at the right time. Avoid overdraft fees and reach your goals faster."
                    cta="Automate my savings"
                >
                    <SavingsMockCard />
                </FeatureRow>
            </section>

            {/* ══ HOW IT WORKS ═══════════════════════ */}
            <section id="how-it-works" className="bg-surface-alt py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">How it works</p>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">Up and running in minutes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        {[
                            { n: '1', icon: Wallet, title: 'Connect your accounts', desc: 'Securely link your bank and credit cards. We support 10,000+ institutions with read-only access.' },
                            { n: '2', icon: BarChart3, title: 'Get your full picture', desc: 'FinDash automatically categorizes transactions and surfaces key insights about your finances.' },
                            { n: '3', icon: Target, title: 'Reach your goals', desc: 'Set budgets, track spending trends, and let FinDash guide you toward financial freedom.' },
                        ].map(({ n, icon: Icon, title, desc }) => (
                            <div key={n} className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/30">
                                    <Icon size={28} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-black flex items-center justify-center -mt-2">
                                    {n}
                                </div>
                                <h3 className="font-display text-xl font-black text-gray-900">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ FEATURES GRID ══════════════════════ */}
            <section className="py-28 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">More features</p>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">Everything you need</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: BarChart3, title: 'Spending Breakdown', desc: 'Visual charts that show you exactly where your money goes each month.' },
                        { icon: CreditCard, title: 'Transaction History', desc: 'Search, filter, and understand every transaction across all accounts.' },
                        { icon: Target, title: 'Budget Planner', desc: 'Create category budgets and get alerts before you overspend.' },
                        { icon: TrendingUp, title: 'Net Worth Tracker', desc: 'Full picture of assets and liabilities. Watch your net worth grow.' },
                        { icon: BellRing, title: 'Smart Alerts', desc: 'Unusual charges, bill reminders, and low balance warnings before they surprise you.' },
                        { icon: ShieldCheck, title: 'Bank-level Security', desc: '256-bit encryption and read-only bank connections. Always safe.' },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-surface-alt rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all group">
                            <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                                <Icon size={22} />
                            </div>
                            <h3 className="font-display text-lg font-black text-gray-900 mb-2 group-hover:text-brand transition-colors">{title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ PRICING ════════════════════════════ */}
            <section id="pricing" className="bg-surface-alt py-28 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">Pricing</p>
                        <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">Simple, honest pricing</h2>
                        <p className="text-gray-600 mt-4">Start free. Upgrade when you're ready.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Free */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col gap-6 shadow-sm">
                            <div>
                                <h3 className="font-display text-2xl font-black text-gray-900">Free</h3>
                                <p className="text-5xl font-black text-gray-900 mt-3">$0<span className="text-xl font-normal text-gray-400">/mo</span></p>
                            </div>
                            <ul className="space-y-3">
                                <CheckItem text="Account linking (up to 2)" />
                                <CheckItem text="Transaction history" />
                                <CheckItem text="Basic spending overview" />
                                <CheckItem text="Balance alerts" />
                                <CheckItem text="Credit score monitoring" subtle />
                                <CheckItem text="Subscription cancellation" subtle />
                            </ul>
                            <Link to="/dashboard" className="mt-auto flex justify-center border-2 border-gray-900 text-gray-900 font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-900 hover:text-white transition-all text-sm">
                                Get started free
                            </Link>
                        </div>

                        {/* Premium */}
                        <div className="bg-gray-900 rounded-3xl p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-5 right-5 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full">POPULAR</div>
                            <div>
                                <h3 className="font-display text-2xl font-black text-white">Premium</h3>
                                <p className="text-5xl font-black text-white mt-3">$12<span className="text-xl font-normal text-gray-400">/mo</span></p>
                            </div>
                            <ul className="space-y-3">
                                {['Everything in Free', 'Unlimited account linking', 'Budget automation', 'Subscription management', 'Bill negotiation assistant', 'Priority support'].map(t => (
                                    <li key={t} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check size={15} className="text-brand mt-0.5 shrink-0" />{t}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/dashboard" className="mt-auto flex justify-center bg-brand text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-brand-hover transition-all text-sm shadow-lg shadow-brand/30">
                                Start Premium free trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ REVIEWS ════════════════════════════ */}
            <section id="reviews" className="py-28 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">Reviews</p>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">Feel the love</h2>
                    <p className="text-gray-600 mt-4">No need to take our word for it — here are some of our thousands of 5-star reviews.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Testimonial
                        name="Sarah M."
                        handle="@sarahm_finance"
                        text="FinDash completely changed how I think about money. I canceled 4 forgotten subscriptions in the first week. Worth it just for that!"
                    />
                    <Testimonial
                        name="James K."
                        handle="@jkwealthcoach"
                        text="The spending breakdown chart is incredible. I finally see where my paycheck goes every month. Clean design, easy to use."
                    />
                    <Testimonial
                        name="Priya L."
                        handle="@priya.budgets"
                        text="Most finance apps are overwhelming — FinDash hits the perfect balance of simple and powerful. Best personal finance app out there."
                    />
                </div>
            </section>

            {/* ══ BOTTOM CTA ═════════════════════════ */}
            <section className="py-28 px-6 text-center bg-surface-alt">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/30">
                        <BadgeDollarSign size={32} />
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                        Start saving money today
                    </h2>
                    <p className="text-gray-600 text-xl">Free to join. No credit card required.</p>
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 bg-gray-900 text-white font-bold px-10 py-5 rounded-2xl hover:bg-gray-700 transition-colors shadow-xl text-base"
                    >
                        Open my dashboard <ArrowRight size={18} />
                    </Link>
                    <p className="text-gray-400 text-sm">Join 10 million+ members already using FinDash</p>
                </div>
            </section>

            {/* ══ FOOTER ═════════════════════════════ */}
            <footer className="border-t border-gray-100 bg-white py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-brand p-1.5 rounded-lg text-white">
                            <DollarSign size={16} />
                        </div>
                        <span className="font-black text-gray-900">FinDash</span>
                    </div>
                    <p className="text-gray-400 text-sm">© 2026 FinDash, Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        {['Privacy', 'Terms', 'Security', 'Contact'].map(l => (
                            <a key={l} href="#" className="hover:text-gray-900 transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
