import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const SummaryCard = ({ title, amount, type = "neutral" }) => {
    const isPositive = type === "income" || (type === "neutral" && amount >= 0);
    const Icon = type === "income" ? TrendingUp : type === "expense" ? TrendingDown : DollarSign;
    const iconColor = type === "income" ? "text-emerald-500 bg-emerald-500/10"
        : type === "expense" ? "text-rose-500 bg-rose-500/10"
            : "text-primary bg-primary/10";

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);

    return (
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="text-muted-foreground font-medium text-sm">{title}</h3>
                <div className={`p-2 rounded-lg ${iconColor}`}>
                    <Icon size={18} />
                </div>
            </div>
            <div>
                <p className="text-3xl font-bold tracking-tight text-foreground">{formattedAmount}</p>
                <p className="text-xs text-muted-foreground mt-2">
                    {isPositive ? "+2.5% from last month" : "-1.2% from last month"}
                </p>
            </div>
        </div>
    );
};
