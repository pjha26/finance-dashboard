import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Portfolio from './pages/Portfolio';
import Accounts from './pages/Accounts';
import Sidebar from './components/common/Sidebar';
import { Navbar } from './components/common/Navbar';
import { FinanceProvider } from './context/FinanceContext';
import { AppProvider } from './context/AppContext';

/* App-shell wrapper — wraps the dashboard and transactions pages */
const AppShell = ({ children }) => (
  <div className="flex h-screen overflow-hidden bg-background text-foreground antialiased">
    <Sidebar />
    <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <AppProvider>
      <FinanceProvider>
        <BrowserRouter>
          <Routes>
            {/* Landing page — no sidebar */}
            <Route path="/" element={<Landing />} />

            {/* App pages — with sidebar shell */}
            <Route path="/dashboard" element={
              <AppShell><Dashboard /></AppShell>
            } />
            <Route path="/transactions" element={
              <AppShell><Transactions /></AppShell>
            } />
            <Route path="/budgets" element={
              <AppShell><Budgets /></AppShell>
            } />
            <Route path="/portfolio" element={
              <AppShell><Portfolio /></AppShell>
            } />
            <Route path="/accounts" element={
              <AppShell><Accounts /></AppShell>
            } />
          </Routes>
        </BrowserRouter>
      </FinanceProvider>
    </AppProvider>
  );
}

export default App;
