import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ marginLeft: '150px' }}>
            <AppBar position="static">
                <Toolbar>
                    {/* Logo */}
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Your Logo
                    </Typography>

                    {/* Profile Button */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="profile"
                        onClick={handleMenuOpen}
                    >
                        <AccountCircle />
                    </IconButton>

                    {/* Profile Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>

                    {/* Settings Button */}
                    <IconButton color="inherit" aria-label="settings">
                        <SettingsIcon />
                    </IconButton>

                    {/* Status Button */}
                    <IconButton color="inherit" aria-label="status">
                        <InfoIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
