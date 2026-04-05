import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const SummaryCard = ({ title, amount, type = 'neutral' }) => {
    const Icon = type === 'income' ? TrendingUp : type === 'expense' ? TrendingDown : DollarSign;

    const iconStyle =
        type === 'income' ? 'text-success bg-success-light'
            : type === 'expense' ? 'text-danger bg-danger-light'
                : 'text-brand bg-brand-light';

    const amountColor =
        type === 'income' ? 'text-success'
            : type === 'expense' ? 'text-danger'
                : 'text-brand';

    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }).format(Math.abs(amount));

    return (
        <div className="bg-surface rounded-xl p-6 flex flex-col gap-6 shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] hover:shadow-[0_8px_32px_-4px_rgba(11,28,48,0.06)] transition-all duration-300">
            <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{title}</p>
                <div className={`p-2 rounded-xl ${iconStyle}`}>
                    <Icon size={16} />
                </div>
            </div>
            <div>
                <p className={`text-[2.5rem] leading-none font-black tracking-tight font-display mb-2 ${amountColor}`}>{formatted}</p>
                <p className="text-xs text-muted-foreground font-medium">This month</p>
            </div>
        </div>
    );
};
