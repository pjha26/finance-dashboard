import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, User, Moon, Sun, DollarSign } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();

    return (
        <div className="w-64 bg-card text-card-foreground border-r border-border h-full flex flex-col pt-6 hidden md:flex shrink-0">
            {/* Brand */}
            <div className="flex items-center px-6 gap-3 mb-8">
                <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
                    <DollarSign size={24} />
                </div>
                <h1 className="text-xl font-bold tracking-tight">FinDash</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 text-sm font-medium">
                <NavLink
                    to="/"
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/transactions"
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}`}
                >
                    <Receipt size={20} />
                    Transactions
                </NavLink>
            </nav>

            {/* Role and Theme Toggles */}
            <div className="p-4 border-t border-border space-y-4">
                {/* Simulated Role View */}
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg outline outline-1 outline-border">
                    <div className="flex items-center gap-3 text-sm">
                        <User size={18} className="text-muted-foreground" />
                        <span className="capitalize text-muted-foreground font-medium">{role}</span>
                    </div>
                    <button
                        onClick={toggleRole}
                        className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1.5 rounded-md hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        Switch
                    </button>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 w-full p-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
