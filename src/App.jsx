import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Sidebar from './components/common/Sidebar';
import { FinanceProvider } from './context/FinanceContext';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <FinanceProvider>
        <BrowserRouter>
          <div className="flex h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
              <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </FinanceProvider>
    </AppProvider>
  )
}

export default App;
