import { Link } from 'react-router-dom';
import {
    DollarSign, TrendingUp, CreditCard, ShieldCheck,
    BellRing, PieChart, ChevronRight, Star, ArrowRight,
    Zap, Target, BarChart3, Check
} from 'lucide-react';

/* ─── Stat badge ─────────────────────────── */
const Stat = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-extrabold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
);

/* ─── Feature card ───────────────────────── */
const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300 group">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{description}</p>
        </div>
        <span className="flex items-center gap-1 text-primary text-sm font-medium mt-auto">
            Learn more <ChevronRight size={15} />
        </span>
    </div>
);

/* ─── Testimonial card ───────────────────── */
const Testimonial = ({ name, handle, text, rating = 5 }) => (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
        </div>
        <p className="text-foreground/90 text-sm leading-relaxed">"{text}"</p>
        <div>
            <p className="text-foreground font-semibold text-sm">{name}</p>
            <p className="text-muted-foreground text-xs">{handle}</p>
        </div>
    </div>
);

/* ─── Pricing check item ─────────────────── */
const PricingItem = ({ text, premium }) => (
    <li className="flex items-center gap-3 text-sm">
        <Check size={16} className={premium ? 'text-primary' : 'text-muted-foreground'} />
        <span className={premium ? 'text-foreground' : 'text-muted-foreground'}>{text}</span>
    </li>
);

/* ════════════════════════════════════════════ */
/*  LANDING PAGE                               */
/* ════════════════════════════════════════════ */
const Landing = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* ── NAV ─────────────────────────────── */}
            <nav className="sticky top-0 z-50 glass border-b border-border/60">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-2.5">
                        <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">FinDash</span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
                        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                        <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/dashboard"
                            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/dashboard"
                            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                        >
                            Get started free
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── HERO ────────────────────────────── */}
            <section className="hero-gradient relative overflow-hidden py-24 md:py-36 px-6">
                {/* decorative rings */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-[900px] h-[900px] rounded-full border border-primary/5 absolute" />
                    <div className="w-[650px] h-[650px] rounded-full border border-primary/8 absolute" />
                    <div className="w-[400px] h-[400px] rounded-full border border-primary/10 absolute" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
                    {/* pill badge */}
                    <div className="flex items-center gap-2 bg-surface-2 border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
                        <Zap size={12} className="text-primary" />
                        Trusted by 10 million+ users worldwide
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                        The money app<br />
                        <span className="text-primary">that works for you</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Track spending, manage subscriptions, build a budget, and grow your wealth — all in one beautifully simple dashboard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/dashboard"
                            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-2xl shadow-primary/30 text-base"
                        >
                            Get started — it's free
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href="#how-it-works"
                            className="flex items-center justify-center gap-2 glass text-foreground font-semibold px-8 py-4 rounded-xl hover:border-primary/40 transition-all duration-200 text-base"
                        >
                            See how it works
                        </a>
                    </div>

                    {/* stats row */}
                    <div className="mt-6 grid grid-cols-3 gap-10 divide-x divide-border pt-6 border-t border-border w-full max-w-xl">
                        <Stat value="$2.5B+" label="Saved for users" />
                        <Stat value="10M+" label="Active members" />
                        <Stat value="4.8★" label="App store rating" />
                    </div>
                </div>
            </section>

            {/* ── FEATURES ────────────────────────── */}
            <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">Everything your finances need</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        From tracking transactions to understanding your net worth, FinDash brings it all together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={BarChart3}
                        title="Spending Insights"
                        description="Get an effortless breakdown of your finances to see categories, trends, and areas to improve."
                        color="bg-primary/10 text-primary"
                    />
                    <FeatureCard
                        icon={CreditCard}
                        title="Transaction Tracker"
                        description="All your transactions in one place. Filter, search, and understand exactly where your money goes."
                        color="bg-amber-500/10 text-amber-400"
                    />
                    <FeatureCard
                        icon={Target}
                        title="Budget Planner"
                        description="Set realistic budgets by category. We'll alert you before you overspend so you stay on track."
                        color="bg-violet-500/10 text-violet-400"
                    />
                    <FeatureCard
                        icon={TrendingUp}
                        title="Net Worth Tracking"
                        description="See the full picture of your assets and liabilities. Watch your net worth grow over time."
                        color="bg-sky-500/10 text-sky-400"
                    />
                    <FeatureCard
                        icon={BellRing}
                        title="Smart Alerts"
                        description="We notify you of unusual charges, low balances, and bill due dates before they catch you off guard."
                        color="bg-rose-500/10 text-rose-400"
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Bank-level Security"
                        description="256-bit encryption and read-only bank connections. Your data is always safe and private."
                        color="bg-emerald-500/10 text-emerald-400"
                    />
                </div>
            </section>

            {/* ── HOW IT WORKS ────────────────────── */}
            <section id="how-it-works" className="py-24 px-6 bg-surface/40">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Up and running in minutes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Connect your accounts', desc: 'Securely link your bank and credit card accounts. We support 10,000+ institutions.' },
                            { step: '02', title: 'Get your full picture', desc: 'FinDash automatically categorizes transactions and surfaces your key financial insights.' },
                            { step: '03', title: 'Reach your goals', desc: 'Set budgets, track spending trends, and let FinDash guide you to financial freedom.' },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="flex flex-col gap-4 text-center items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                                    {step}
                                </div>
                                <h3 className="text-foreground font-semibold text-xl">{title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRICING ─────────────────────────── */}
            <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Simple, honest pricing</h2>
                    <p className="text-muted-foreground mt-4">Start free. Upgrade when you're ready.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Free */}
                    <div className="glass rounded-2xl p-8 flex flex-col gap-6">
                        <div>
                            <h3 className="text-foreground font-bold text-xl">Free</h3>
                            <p className="text-4xl font-extrabold text-foreground mt-2">$0<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                        </div>
                        <ul className="space-y-3">
                            <PricingItem text="Account linking (up to 2)" />
                            <PricingItem text="Transaction history" />
                            <PricingItem text="Basic spending overview" />
                            <PricingItem text="Balance alerts" />
                        </ul>
                        <Link to="/dashboard" className="mt-auto flex justify-center glass border-border text-foreground font-semibold px-6 py-3 rounded-xl hover:border-primary/40 transition-all text-sm">
                            Get started free
                        </Link>
                    </div>

                    {/* Premium */}
                    <div className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #1a6b45 0%, #134f33 100%)', border: '1px solid #22c55e40' }}>
                        <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                        <div>
                            <h3 className="text-white font-bold text-xl">Premium</h3>
                            <p className="text-4xl font-extrabold text-white mt-2">$12<span className="text-base font-normal text-green-200">/mo</span></p>
                        </div>
                        <ul className="space-y-3">
                            <PricingItem premium text="Everything in Free" />
                            <PricingItem premium text="Unlimited account linking" />
                            <PricingItem premium text="Budget automation" />
                            <PricingItem premium text="Subscription management" />
                            <PricingItem premium text="Bill negotiation assistant" />
                            <PricingItem premium text="Priority support" />
                        </ul>
                        <Link to="/dashboard" className="mt-auto flex justify-center bg-white text-brand font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-all text-sm shadow-lg">
                            Start Premium trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── REVIEWS ─────────────────────────── */}
            <section id="reviews" className="py-24 px-6 bg-surface/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Reviews</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Loved by millions</h2>
                        <p className="text-muted-foreground mt-4">No need to take our word for it.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Testimonial
                            name="Sarah M."
                            handle="@sarahm_finance"
                            text="FinDash completely changed how I think about money. I canceled 4 subscriptions I forgot about in the first week alone!"
                        />
                        <Testimonial
                            name="James K."
                            handle="@jkwealthcoach"
                            text="The spending breakdown chart is incredible. I finally understand where my paycheck goes every month. Highly recommend."
                        />
                        <Testimonial
                            name="Priya L."
                            handle="@priya.budgets"
                            text="Clean, fast, and actually useful. Most finance apps are overwhelming — FinDash hits the perfect balance of simple and powerful."
                        />
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ──────────────────────── */}
            <section className="py-28 px-6 text-center">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 hero-gradient rounded-3xl border border-border p-12">
                    <div className="w-16 h-16 bg-primary/15 border border-primary/25 rounded-2xl flex items-center justify-center text-primary">
                        <PieChart size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">Start your financial journey today</h2>
                    <p className="text-muted-foreground text-lg">Free to join. No credit card required.</p>
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 text-base"
                    >
                        Open my dashboard <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* ── FOOTER ──────────────────────────── */}
            <footer className="border-t border-border py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                            <DollarSign size={16} />
                        </div>
                        <span className="font-bold text-foreground">FinDash</span>
                    </div>
                    <p className="text-muted-foreground text-sm">© 2026 FinDash. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
