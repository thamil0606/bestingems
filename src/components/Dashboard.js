// src/components/Dashboard.js
import React from 'react';
import InventoryOverview from './InventoryOverview';
import StockOverview from './StockOverview';
import LowStockAlert from './LowStockAlert';
import ProductTable from './ProductTable';
import Button from './Button';
import '../styles/Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, Olivia!</h1>
        <p>Overview of Current Stock and Inventory Performance</p>
        <Button text="Import" />
      </header>
      <div className="dashboard-content">
        <InventoryOverview />
        <StockOverview />
        <LowStockAlert />
        <ProductTable />
      </div>
    </div>
  );
};

export default Dashboard;
