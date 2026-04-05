import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, User, Moon, Sun, DollarSign } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();

    return (
        <div className="w-64 bg-surface text-foreground border-r border-border h-full flex-col pt-6 hidden md:flex shrink-0">
            {/* Brand */}
            <div className="flex items-center px-6 gap-3 mb-8">
                <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
                    <DollarSign size={22} />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-foreground">FinDash</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1.5 text-sm font-medium">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-primary/15 text-primary font-semibold border border-primary/20'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-primary/15 text-primary font-semibold border border-primary/20'
                            : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground'
                        }`
                    }
                >
                    <Receipt size={20} />
                    Transactions
                </NavLink>
            </nav>

            {/* Role & Theme */}
            <div className="p-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between p-3 bg-surface-2 rounded-xl border border-border">
                    <div className="flex items-center gap-3 text-sm">
                        <User size={16} className="text-muted-foreground" />
                        <span className="capitalize text-muted-foreground font-medium">{role}</span>
                    </div>
                    <button
                        onClick={toggleRole}
                        className="text-xs font-semibold bg-primary/15 text-primary px-2.5 py-1.5 rounded-lg hover:bg-primary/25 transition-colors"
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
