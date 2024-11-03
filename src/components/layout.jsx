import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Box } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

let Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const getHeaderContent = (pathname) => {
        const headers = {
            "/deletedproducts": {
                title: "Deleted Products",
                subtitle: "View and update deleted products",
            },
            "/dashboard": {
                title: "Welcome, Olivia!",
                subtitle: "Overview of Current Stock and Inventory Performance",
            },
        };
        
        return headers[pathname] || {
            title: "Welcome, Olivia!",
            subtitle: "Overview of Current Stock and Inventory Performance",
        };
    };

    const { title: headerTitle, subtitle: headerSubtitle } = getHeaderContent(location.pathname);

    return (
        <div className="app-container">
            <Sidebar />
            <main className="dashboard">
                <header className="dashboard-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>{headerTitle}</h1>
                        <p style={{ margin: 0, color: '#6b7280' }}>{headerSubtitle}</p>
                    </div>
                    <Button 
                        variant="contained"
                        onClick={() => navigate("/import")}
                        startIcon={<AddCircleOutlineIcon />}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            minWidth: '120px',
                            textTransform: 'none',
                            borderRadius: '12px',
                            padding: '6px 16px',
                            fontSize: '1rem',
                            background: 'linear-gradient(90deg, #4f93f6 0%, #3572e6 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #3572e6 0%, #4f93f6 100%)',
                            },
                        }}
                    >
                        Import
                    </Button>
                </header>
                {children}
            </main>
        </div>
    );
}

export default Layout;