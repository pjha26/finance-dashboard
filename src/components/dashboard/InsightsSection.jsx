import { useFinanceContext } from '../../context/FinanceContext';
import { useMemo } from 'react';
import { TrendingUp, AlertCircle, Compass } from 'lucide-react';

export const InsightsSection = () => {
    const { transactions, summary } = useFinanceContext();

    const insights = useMemo(() => {
        if (transactions.length === 0) return [];
        const results = [];

        const expenses = transactions.filter(t => t.type === 'expense');
        if (expenses.length > 0) {
            const cats = expenses.reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
                return acc;
            }, {});
            const top = Object.entries(cats).sort((a, b) => b[1] - a[1])[0];
            results.push({
                icon: AlertCircle,
                color: 'text-rose-600 bg-rose-50',
                title: 'Top Expense Category',
                desc: `You spent the most on ${top[0]} ($${top[1].toFixed(0)}). Consider reviewing this budget.`,
            });
        }

        results.push(
            summary.balance >= 0
                ? { icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50', title: 'Positive Cashflow', desc: `Great! Your income exceeds expenses by $${summary.balance.toFixed(0)} this month.` }
                : { icon: Compass, color: 'text-amber-600 bg-amber-50', title: 'Expenses Exceed Income', desc: `You're spending $${Math.abs(summary.balance).toFixed(0)} more than you earn. Try cutting back.` }
        );

        return results;
    }, [transactions, summary]);

    return (
        <section>
            <h2 className="text-lg font-black text-gray-900 mb-4">AI Insights</h2>
            {insights.length === 0 ? (
                <p className="text-gray-400 text-sm">Add transactions to generate insights.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {insights.map((ins, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-brand/30 hover:shadow-md transition-all">
                            <div className={`p-3 rounded-xl h-fit shrink-0 ${ins.color}`}>
                                <ins.icon size={20} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900">{ins.title}</p>
                                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{ins.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
