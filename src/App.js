import React from 'react';
import './styles/main.css';
import './styles/Sidebar.css';
import './styles/Dashboard.css';
import Layout from './components/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dash from './pages/dash';
import AllProducts from './pages/allproducts';
import ImportModule from './pages/import';
import DeletedProducts from './pages/deletedproducts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dash' element={<Dash />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/deletedproducts' element={<DeletedProducts />} />
          <Route path='/import' element={<ImportModule />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
