import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { useFinanceContext } from '../context/FinanceContext';
import { useAppContext } from '../context/AppContext';
import { Search, Plus, Trash2, Filter } from 'lucide-react';

const Transactions = () => {
    const { transactions, deleteTransaction, addTransaction } = useFinanceContext();
    const { role } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const filteredTransactions = useMemo(() => {
        return transactions.filter(t => {
            const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = filterType === 'all' || t.type === filterType;
            return matchesSearch && matchesType;
        });
    }, [transactions, searchTerm, filterType]);

    const handleAddMockTransaction = () => {
        addTransaction({
            date: format(new Date(), 'yyyy-MM-dd'),
            amount: Math.floor(Math.random() * 500) + 10,
            category: 'Misc',
            type: Math.random() > 0.5 ? 'income' : 'expense',
            description: 'System Generated'
        });
    };

    return (
        <div className="h-full flex flex-col gap-6 animate-in fade-in duration-500 pb-16">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Transactions</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Manage and view your transaction history.</p>
                </div>

                {role === 'admin' && (
                    <button
                        onClick={handleAddMockTransaction}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-fit"
                    >
                        <Plus size={18} />
                        <span>Mock Transaction</span>
                    </button>
                )}
            </header>

            {/* Filters Area */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-1 shadow-sm">
                    <Filter size={18} className="text-muted-foreground" />
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="bg-transparent border-none text-foreground focus:outline-none text-sm cursor-pointer py-1.5 min-w-[120px]"
                    >
                        <option value="all">All Types</option>
                        <option value="income">Income Only</option>
                        <option value="expense">Expense Only</option>
                    </select>
                </div>
            </div>

            {/* Transactions Data Grid */}
            <div className="bg-card border border-border rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
                <div className="overflow-x-auto min-h-0 flex-1">
                    <table className="w-full text-sm text-left align-middle border-collapse">
                        <thead className="text-xs text-muted-foreground bg-secondary/30 border-b border-border sticky top-0 backdrop-blur-md z-10">
                            <tr>
                                <th className="px-6 py-4 font-medium whitespace-nowrap">Date</th>
                                <th className="px-6 py-4 font-medium">Description</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium text-right">Amount</th>
                                {role === 'admin' && <th className="px-6 py-4 font-medium text-right">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {filteredTransactions.length === 0 ? (
                                <tr>
                                    <td colSpan={role === 'admin' ? 5 : 4} className="px-6 py-12 text-center">
                                        <p className="text-muted-foreground font-medium">No transactions found.</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredTransactions.map(t => (
                                    <tr key={t.id} className="hover:bg-secondary/20 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap text-foreground/80">{format(new Date(t.date), 'MMM dd, yyyy')}</td>
                                        <td className="px-6 py-4 font-medium text-foreground">{t.description}</td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
                                                {t.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right whitespace-nowrap font-medium">
                                            <span className={t.type === 'income' ? 'text-emerald-500' : 'text-foreground'}>
                                                {t.type === 'income' ? '+' : '-'}${Number(t.amount).toFixed(2)}
                                            </span>
                                        </td>
                                        {role === 'admin' && (
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => deleteTransaction(t.id)}
                                                    className="text-muted-foreground hover:text-destructive p-2 rounded-md hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                                    aria-label="Delete transaction"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
