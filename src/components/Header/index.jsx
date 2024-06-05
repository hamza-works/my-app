import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { UserContext } from '../../context/UserContext';

const Header = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <>
            {user && (
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="inherit" component={Link} to="/dashboard">
                                Dashboard
                            </Button>
                            <Button color="inherit" component={Link} to="/services">
                                Services
                            </Button>
                        </Box>
                        <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
};

export default Header;
