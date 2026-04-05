import { Target, AlertCircle } from 'lucide-react';

const Budgets = () => {
    const budgets = [
        { name: 'Food & Dining', spent: 450, total: 600, color: 'bg-brand' },
        { name: 'Software Subs', spent: 120, total: 100, color: 'bg-warning' },
        { name: 'Transport', spent: 85, total: 200, color: 'bg-success' },
    ];

    return (
        <div className="flex flex-col gap-8 pb-16 animate-in fade-in duration-500">
            <header>
                <h1 className="text-4xl lg:text-[2.5rem] leading-none font-black tracking-tight font-display text-foreground">Budgets & Goals</h1>
                <p className="text-muted-foreground mt-2 text-sm max-w-sm">Strict limits for disciplined growth.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {budgets.map((b, i) => {
                    const percent = (b.spent / b.total) * 100;
                    const isOver = percent > 100;
                    return (
                        <div key={i} className="bg-surface rounded-xl p-6 shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] border border-transparent hover:border-brand/5 transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg font-display text-foreground">{b.name}</h3>
                                {isOver && <AlertCircle size={18} className="text-warning" />}
                            </div>
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-3xl font-black font-display text-foreground">${b.spent}</p>
                                <p className="text-sm font-medium text-muted-foreground">of ${b.total}</p>
                            </div>
                            <div className="h-2 w-full bg-surface-alt rounded-full overflow-hidden">
                                <div className={`h-full ${isOver ? 'bg-warning' : b.color} transition-all duration-1000`} style={{ width: `${Math.min(percent, 100)}%` }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Budgets;
