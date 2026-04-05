import { useFinanceContext } from '../../context/FinanceContext';
import { useMemo } from 'react';
import { TrendingUp, AlertCircle, Compass } from 'lucide-react';

export const InsightsSection = () => {
    const { transactions, summary } = useFinanceContext();

    const insights = useMemo(() => {
        if (transactions.length === 0) return [];

        let res = [];
        const expenses = transactions.filter(t => t.type === 'expense');

        if (expenses.length > 0) {
            const categories = expenses.reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
                return acc;
            }, {});
            const topCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];
            res.push({
                title: "Top Expense Category",
                desc: `You spent the most on ${topCategory[0]} ($${topCategory[1].toFixed(0)}). Consider setting a budget here.`,
                icon: AlertCircle,
                color: "text-rose-500 bg-rose-500/10"
            });
        }

        if (summary.balance > 0) {
            res.push({
                title: "Positive Cashflow",
                desc: `Great job! Your income is outpacing your expenses by $${summary.balance.toFixed(0)}.`,
                icon: TrendingUp,
                color: "text-emerald-500 bg-emerald-500/10"
            });
        } else {
            res.push({
                title: "Negative Cashflow",
                desc: `You are spending more than you earn. Try to reduce discretionary expenses.`,
                icon: Compass,
                color: "text-amber-500 bg-amber-500/10"
            });
        }

        return res;
    }, [transactions, summary]);

    return (
        <div className="bg-card w-full mt-6 shadow-none">
            <h3 className="text-lg font-semibold mb-4 text-foreground">AI Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {insights.length === 0 ? (
                    <p className="text-muted-foreground text-sm col-span-2">Add more transactions to generate insights.</p>
                ) : (
                    insights.map((insight, idx) => (
                        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-secondary/10 border border-border shadow-sm hover:bg-secondary/20 transition-colors">
                            <div className={`p-3 rounded-xl h-fit ${insight.color}`}>
                                <insight.icon size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">{insight.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{insight.desc}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
