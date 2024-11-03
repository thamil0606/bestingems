import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdjustIcon from '@mui/icons-material/Tune';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArchiveIcon from '@mui/icons-material/Inventory2';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Assessment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Collapse } from '@mui/material';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAllProductsOpen, setAllProductsOpen] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState('Gemstones');

  const toggleAllProducts = () => {
    setAllProductsOpen(!isAllProductsOpen);
  };

  const handleSubMenuClick = (category) => {
    setSelectedSubMenu(category);
    navigate(`/allproducts/${category.toLowerCase()}`);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header horizontal">
        <Avatar
          alt="Honeycomb Logo"
          src="https://ibb.co/x2kTSLY"
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#4f46e5',
            marginRight: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          }}
        />
        <Box>
          <h2 className="sidebar-title" onClick={() => navigate('/')}>
            honeycomb
          </h2>
          <p className="sidebar-subtitle">Inventory management</p>
        </Box>
        <ExpandMoreIcon sx={{ marginLeft: 'auto', color: '#6b7280', cursor: 'pointer' }} />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <DashboardIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
            Dashboard
          </li>
          <li className="expandable" onClick={toggleAllProducts}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
              All Products
              {isAllProductsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          </li>
          <Collapse in={isAllProductsOpen} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li
                className={selectedSubMenu === 'Gemstones' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Gemstones')}
              >
                Gemstones
              </li>
              <li
                className={selectedSubMenu === 'Jewelry' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Jewelry')}
              >
                Jewelry
              </li>
              <li
                className={selectedSubMenu === 'Drops & Beads' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Drops & Beads')}
              >
                Drops & Beads
              </li>
              <li
                className={selectedSubMenu === 'Semi-Mounts' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Semi-Mounts')}
              >
                Semi-Mounts
              </li>
              <li
                className={selectedSubMenu === 'Findings' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Findings')}
              >
                Findings
              </li>
            </ul>
          </Collapse>
          <li>
            <AdjustIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
            Stock Adjustments
          </li>
          <li>
            <AssignmentIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
            Product Requests
          </li>
          <li>
            <ArchiveIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
            Sold-Out Products
          </li>
          <li className={location.pathname === '/deletedproducts' ? 'active' : ''} onClick={() => navigate('/deletedproducts')}>
            <DeleteIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
            Deleted Products
          </li>
          <li className="expandable" onClick={toggleAllProducts}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ReportIcon sx={{ marginRight: '8px', fontSize: '20px' }} />
              Reports
              {isAllProductsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          </li>
          <Collapse in={isAllProductsOpen} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li
                className={selectedSubMenu === 'Replenishment' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Replenishment')}
              >
                Replenishment
              </li>
              <li
                className={selectedSubMenu === 'Top 20 to Replenish' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Top 20 to Replenish')}
              >
                Top 20 to Replenish
              </li>
              <li
                className={selectedSubMenu === 'Overstock' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('Overstock')}
              >
                Overstock
              </li>
              <li
                className={selectedSubMenu === 'ABC Analysis' ? 'submenu-item active' : 'submenu-item'}
                onClick={() => handleSubMenuClick('ABC Analysis')}
              >
                ABC Analysis
              </li>
            </ul>
          </Collapse>
        </ul>
      </nav>
      <div className="sidebar-footer horizontal">
        <Avatar
          alt="Olivia Rhye"
          src="https://ibb.co/x2kTSLY"
          sx={{ width: 32, height: 32, marginRight: '10px' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <p className="footer-name">Olivia Rhye</p>
          <p className="footer-email">olivia@untitledui.com</p>
        </Box>
        <LogoutIcon sx={{ color: '#6b7280', cursor: 'pointer' }} />
      </div>
    </aside>
  );
};

export default Sidebar;