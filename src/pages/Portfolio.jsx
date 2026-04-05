import { Briefcase, TrendingUp } from 'lucide-react';

const Portfolio = () => {
    const assets = [
        { ticker: 'AAPL', shares: 45.2, price: 175.50, trend: '+2.4%' },
        { ticker: 'TSLA', shares: 12.0, price: 195.20, trend: '-1.2%' },
        { ticker: 'VTI', shares: 154.3, price: 245.10, trend: '+0.8%' },
    ];

    return (
        <div className="flex flex-col gap-8 pb-16 animate-in fade-in duration-500">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl lg:text-[2.5rem] leading-none font-black tracking-tight font-display text-foreground">Investment Portfolio</h1>
                    <p className="text-muted-foreground mt-2 text-sm max-w-sm">Asset clusters and market tracking.</p>
                </div>
                <div className="bg-success-light px-4 py-2 rounded-lg border border-success/20 w-fit">
                    <p className="text-xs uppercase tracking-widest font-bold text-success">Total Value</p>
                    <p className="text-2xl font-black font-display text-success mt-0.5">$48,290.41 <span className="text-sm">+4.2%</span></p>
                </div>
            </header>

            <div className="bg-surface rounded-xl shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] overflow-hidden p-2">
                <table className="w-full text-sm text-left border-separate border-spacing-y-1">
                    <thead className="text-xs text-muted-foreground bg-surface-alt rounded-lg">
                        <tr>
                            <th className="px-6 py-4 font-medium whitespace-nowrap rounded-l-lg">Asset</th>
                            <th className="px-6 py-4 font-medium text-right">Shares</th>
                            <th className="px-6 py-4 font-medium text-right">Price</th>
                            <th className="px-6 py-4 font-medium text-right rounded-r-lg">Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((a, i) => (
                            <tr key={i} className="hover:bg-surface-alt transition-colors group rounded-xl overflow-hidden">
                                <td className="px-6 py-4 whitespace-nowrap text-foreground font-bold font-display rounded-l-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-brand-light text-brand rounded-lg"><Briefcase size={16} /></div>
                                        {a.ticker}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right text-muted-foreground">{a.shares}</td>
                                <td className="px-6 py-4 text-right font-bold text-foreground">${a.price.toFixed(2)}</td>
                                <td className={`px-6 py-4 text-right font-black font-display whitespace-nowrap rounded-r-xl ${a.trend.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                                    {a.trend}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Portfolio;
