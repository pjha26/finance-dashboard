import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Receipt, User, DollarSign, Sun, Moon, Target, Briefcase, Wallet, LineChart } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();

    return (
        <div className="w-64 bg-surface-alt text-foreground h-full flex-col pt-6 hidden md:flex shrink-0">
            {/* Brand — click to navigate to landing page */}
            <Link to="/" className="flex items-center px-6 gap-2.5 mb-8 group">
                <div className="bg-brand p-1.5 rounded-xl text-surface shadow-lg shadow-brand/20 group-hover:bg-brand-hover transition-colors">
                    <DollarSign size={22} />
                </div>
                <h1 className="text-xl font-black tracking-tight font-display text-foreground group-hover:text-brand transition-colors">FinDash</h1>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1.5 text-sm font-semibold">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <LayoutDashboard size={19} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <Receipt size={19} />
                    Transactions
                </NavLink>
                <NavLink
                    to="/insights"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <LineChart size={19} />
                    Insights
                </NavLink>
                <NavLink
                    to="/budgets"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <Target size={19} />
                    Budgets & Goals
                </NavLink>
                <NavLink
                    to="/accounts"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <Wallet size={19} />
                    Accounts & Vaults
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-surface shadow-[0_4px_24px_-4px_rgba(19,27,46,0.3)]'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <Briefcase size={19} />
                    Investment Portfolio
                </NavLink>
            </nav>

            {/* Role & Theme */}
            <div className="p-4 space-y-3 mt-auto mb-2 relative before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-brand/10 before:to-transparent">
                <div className="flex items-center justify-between p-3 bg-surface rounded-xl">
                    <div className="flex items-center gap-2 text-sm">
                        <User size={16} className="text-muted-foreground" />
                        <span className="capitalize text-foreground font-medium">{role}</span>
                    </div>
                    <button
                        onClick={toggleRole}
                        className="text-xs font-bold bg-brand/10 text-brand px-2.5 py-1.5 rounded-lg hover:bg-brand/20 transition-colors"
                    >
                        Switch
                    </button>
                </div>

                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 w-full p-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
