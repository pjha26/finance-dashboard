import { useFinanceContext } from '../context/FinanceContext';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { BalanceTrendChart } from '../components/dashboard/BalanceTrendChart';
import { SpendingBreakdownChart } from '../components/dashboard/SpendingBreakdownChart';
import { InsightsSection } from '../components/dashboard/InsightsSection';
import { DashboardSkeleton } from '../components/common/Skeleton';

const Dashboard = () => {
    const { summary, isLoading } = useFinanceContext();

    if (isLoading) return <DashboardSkeleton />;

    return (
        <div className="flex flex-col gap-8 pb-16 animate-in fade-in duration-500">
            <header>
                <h1 className="text-4xl lg:text-[2.5rem] leading-none font-black tracking-tight font-display text-foreground">Overview</h1>
                <p className="text-muted-foreground mt-2 text-sm max-w-sm">Your financial narrative for the current period, organized.</p>
            </header>

            {/* Summary Cards — natural height, not flex-1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Total Balance" amount={summary.balance} type="neutral" />
                <SummaryCard title="Total Income" amount={summary.income} type="income" />
                <SummaryCard title="Total Expenses" amount={summary.expenses} type="expense" />
            </div>

            {/* Charts — both given explicit height via className on the card itself */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BalanceTrendChart />
                </div>
                <div className="lg:col-span-1">
                    <SpendingBreakdownChart />
                </div>
            </div>

            {/* Insights */}
            <InsightsSection />
        </div>
    );
};

export default Dashboard;
