import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const SummaryCard = ({ title, amount, type = 'neutral' }) => {
    const Icon = type === 'income' ? TrendingUp : type === 'expense' ? TrendingDown : DollarSign;

    const iconStyle =
        type === 'income' ? 'text-emerald-600 bg-emerald-50'
            : type === 'expense' ? 'text-rose-600 bg-rose-50'
                : 'text-brand bg-brand/10';

    const amountColor =
        type === 'income' ? 'text-emerald-600'
            : type === 'expense' ? 'text-gray-900'
                : 'text-brand';

    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }).format(Math.abs(amount));

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4 hover:border-brand/30 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <div className={`p-2 rounded-xl ${iconStyle}`}>
                    <Icon size={16} />
                </div>
            </div>
            <div>
                <p className={`text-3xl font-black tracking-tight ${amountColor}`}>{formatted}</p>
                <p className="text-xs text-gray-400 mt-2 font-medium">This month</p>
            </div>
        </div>
    );
};
