import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { mockTransactions } from '../data/mockData';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTransactions(mockTransactions);
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const addTransaction = (transaction) => {
        setTransactions(prev => [{ ...transaction, id: Date.now() }, ...prev]);
    };

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

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
            summary,
            isLoading
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

export const useFinanceContext = () => useContext(FinanceContext);
