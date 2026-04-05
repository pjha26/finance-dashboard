import { Menu, Moon, Sun, User, DollarSign } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const { theme, toggleTheme, role, toggleRole } = useAppContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="md:hidden bg-card border-b border-border p-4 sticky top-0 z-50 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                        <DollarSign size={20} />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-foreground">FinDash</h1>
                </div>
                <button
                    className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors focus:ring-2 focus:ring-ring focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <Menu size={24} />
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-card border-b border-border shadow-2xl flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-2">
                        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `p-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary'}`}>Dashboard</NavLink>
                        <NavLink to="/transactions" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `p-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary'}`}>Transactions</NavLink>
                    </nav>

                    <div className="h-px bg-border w-full my-1"></div>

                    <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg outline outline-1 outline-border">
                        <div className="flex items-center gap-3 text-sm">
                            <User size={18} className="text-muted-foreground" />
                            <span className="capitalize text-muted-foreground font-medium">{role}</span>
                        </div>
                        <button
                            onClick={toggleRole}
                            className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-md hover:bg-primary/20 transition-colors"
                        >
                            Switch Role
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            toggleTheme();
                            setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 w-full p-3 rounded-lg text-sm font-medium text-muted-foreground bg-secondary/20 hover:bg-secondary transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </div>
            )}
        </header>
    );
};
