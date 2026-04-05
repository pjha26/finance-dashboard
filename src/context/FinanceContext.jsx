import { createContext, useContext, useState, useMemo } from 'react';
import { mockTransactions } from '../data/mockData';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(mockTransactions);

    const addTransaction = (transaction) => {
        setTransactions(prev => [{ ...transaction, id: Date.now() }, ...prev]);
    };

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

    // Derived state
    const summary = useMemo(() => {
        let income = 0;
        let expenses = 0;
        transactions.forEach(t => {
            if (t.type === 'income') income += Number(t.amount);
            if (t.type === 'expense') expenses += Number(t.amount);
        });
        return { income, expenses, balance: income - expenses };
    }, [transactions]);

    return (
        <FinanceContext.Provider value={{
            transactions,
            addTransaction,
            deleteTransaction,
            summary
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

export const useFinanceContext = () => useContext(FinanceContext);
