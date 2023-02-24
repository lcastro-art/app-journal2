import { Divider,Drawer,List,Toolbar,Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { SideBarItem } from './'

export const SideBar = ({ drawerWidth = 240 }) => {

    const { notes } = useSelector(store => store.journal);

    const { displayName } = useSelector(store => store.auth);
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth },flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box',width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
