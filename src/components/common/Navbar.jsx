import { Menu, User, DollarSign, Sun, Moon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();
    const [open, setOpen] = useState(false);

    return (
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3.5 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-brand p-1.5 rounded-lg text-white">
                        <DollarSign size={18} />
                    </div>
                    <span className="text-lg font-black text-gray-900">FinDash</span>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Menu size={22} />
                </button>
            </div>

            {open && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl p-4 flex flex-col gap-2 z-50">
                    <NavLink to="/dashboard" onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `p-3 rounded-xl font-semibold text-sm transition-colors ${isActive ? 'bg-brand text-white' : 'text-gray-600 hover:bg-gray-50'}`
                        }
                    >Dashboard</NavLink>
                    <NavLink to="/transactions" onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `p-3 rounded-xl font-semibold text-sm transition-colors ${isActive ? 'bg-brand text-white' : 'text-gray-600 hover:bg-gray-50'}`
                        }
                    >Transactions</NavLink>

                    <div className="h-px bg-gray-100 my-1" />

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 text-sm">
                            <User size={16} className="text-gray-400" />
                            <span className="capitalize text-gray-600 font-medium">{role}</span>
                        </div>
                        <button onClick={toggleRole} className="text-xs font-bold bg-brand/10 text-brand px-3 py-1.5 rounded-lg hover:bg-brand/20 transition-colors">
                            Switch Role
                        </button>
                    </div>

                    <button onClick={() => { toggleTheme(); setOpen(false); }}
                        className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </div>
            )}
        </header>
    );
};
