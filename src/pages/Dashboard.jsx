import { useFinanceContext } from '../context/FinanceContext';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { BalanceTrendChart } from '../components/dashboard/BalanceTrendChart';
import { SpendingBreakdownChart } from '../components/dashboard/SpendingBreakdownChart';
import { InsightsSection } from '../components/dashboard/InsightsSection';

const Dashboard = () => {
    const { summary } = useFinanceContext();

    return (
        <div className="h-full flex flex-col gap-8 animate-in fade-in duration-500 pb-16">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">Here is your financial summary for the month.</p>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Total Balance" amount={summary.balance} type="neutral" />
                <SummaryCard title="Total Income" amount={summary.income} type="income" />
                <SummaryCard title="Total Expenses" amount={summary.expenses} type="expense" />
            </div>

            {/* Charts Array */}
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
