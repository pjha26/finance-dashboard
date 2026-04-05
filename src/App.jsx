import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Portfolio from './pages/Portfolio';
import Accounts from './pages/Accounts';
import Insights from './pages/Insights';
import Forecasts from './pages/Forecasts';
import Network from './pages/Network';
import Temporal from './pages/Temporal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './components/common/Sidebar';
import { Navbar } from './components/common/Navbar';
import { FinanceProvider } from './context/FinanceContext';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

/* App-shell wrapper — wraps the dashboard and transactions pages */
const AppShell = ({ children }) => (
  <div className="flex h-screen overflow-hidden bg-background text-foreground antialiased">
    <Sidebar />
    <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-8">
          <Toaster position="top-right" toastOptions={{ style: { background: '#1c1b1c', color: '#fffeff', border: '1px solid #4edea3' } }} />
          {children}
        </div>
      </div>
    </div>
  </div>
);

const ProtectedAppShell = ({ children }) => (
  <ProtectedRoute>
    <AppShell>{children}</AppShell>
  </ProtectedRoute>
);

function App() {
  return (
    <AppProvider>
      <FinanceProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected App Routes */}
              <Route path="/dashboard" element={
                <ProtectedAppShell><Dashboard /></ProtectedAppShell>
              } />
              <Route path="/transactions" element={
                <ProtectedAppShell><Transactions /></ProtectedAppShell>
              } />
              <Route path="/budgets" element={
                <ProtectedAppShell><Budgets /></ProtectedAppShell>
              } />
              <Route path="/portfolio" element={
                <ProtectedAppShell><Portfolio /></ProtectedAppShell>
              } />
              <Route path="/accounts" element={
                <ProtectedAppShell><Accounts /></ProtectedAppShell>
              } />
              <Route path="/insights" element={
                <ProtectedAppShell><Insights /></ProtectedAppShell>
              } />
              <Route path="/forecasts" element={
                <ProtectedAppShell><Forecasts /></ProtectedAppShell>
              } />
              <Route path="/network" element={
                <ProtectedAppShell><Network /></ProtectedAppShell>
              } />
              <Route path="/temporal" element={
                <ProtectedAppShell><Temporal /></ProtectedAppShell>
              } />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </FinanceProvider>
    </AppProvider>
  );
}

export default App;
