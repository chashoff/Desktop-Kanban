import React from 'react'
import { Drawer } from '@material-ui/core'
import { MdNotifications } from "react-icons/md";
import Switch from '@material-ui/core/Switch';

const SettingsDrawer = ({isOpen, onHide, isNotifications, onSwitchChange}) =>(
    <Drawer
        ModalProps={{ onClose : ()=>onHide() }}
        docked='false'
        anchor='right'
        open={isOpen}>
        <div style={styles.container}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2 style={styles.header}>Settings</h2>
                <button style={{backgroundColor: 'transparent', padding: '0 !important', color: 'lightgray', outline: 'none'}} onClick={onHide}>Close</button>
            </div>
            
            <div style={styles.navItem}>
                <MdNotifications style={styles.icon} />
                <p style={styles.navText}>Notifications</p>
                <Switch style={styles.switch}
                    checked={isNotifications}
                    onChange={onSwitchChange}
                    color="primary"
                />
            </div>
        </div>
    </Drawer>
)
export default SettingsDrawer

const styles = {
    switch: {
        marginLeft: 'auto'
    },
    icon: {
        fontSize: '1.8em',
        paddingRight: '.25em'
    },
    container: {
        backgroundColor: '#585858',
        width: '250px',
        height: '100%',
        padding: '.75em',
        color: 'lightgrey'
    },
    header: {
        fontSize: '1.4em',
        margin: 'auto 0',
    },
    navItem: {
        display: 'flex',
        width: '100%',
        fontSize: '1.2em',
        padding: '.75em 0'
    },
    navText: {
        fontSize: '1em',
        margin: 'auto 0'
    }
}