import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Settings from './pages/Settings';

// Placeholder components for other routes
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-[500px] text-gray-400">
    <h2 className="text-2xl font-semibold">{title} Coming Soon</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privileges" element={<Placeholder title="My Privileges" />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
