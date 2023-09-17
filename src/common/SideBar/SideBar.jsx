// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const Sidebar = () => {
    return (
        <Drawer variant="permanent">
            <List>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Contacts" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Deleted Contacts" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Last Update" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
