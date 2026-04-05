import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Receipt, User, DollarSign, Sun, Moon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();

    return (
        <div className="w-64 bg-white text-gray-900 border-r border-gray-200 h-full flex-col pt-6 hidden md:flex shrink-0">
            {/* Brand — click to navigate to landing page */}
            <Link to="/" className="flex items-center px-6 gap-2.5 mb-8 group">
                <div className="bg-brand p-1.5 rounded-xl text-white shadow-lg shadow-brand/20 group-hover:bg-brand-hover transition-colors">
                    <DollarSign size={22} />
                </div>
                <h1 className="text-xl font-black tracking-tight text-gray-900 group-hover:text-brand transition-colors">FinDash</h1>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1.5 text-sm font-semibold">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                            ? 'bg-brand text-white shadow-md shadow-brand/25'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
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
                            ? 'bg-brand text-white shadow-md shadow-brand/25'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        }`
                    }
                >
                    <Receipt size={19} />
                    Transactions
                </NavLink>
            </nav>

            {/* Role & Theme */}
            <div className="p-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                        <User size={16} className="text-gray-400" />
                        <span className="capitalize text-gray-600 font-medium">{role}</span>
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
                    className="flex items-center gap-3 w-full p-3 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
