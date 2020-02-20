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
            <h2 style={styles.header}>Settings</h2>
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
        backgroundColor: 'lightgray',
        width: '250px',
        height: '100%',
        padding: '.75em'
    },
    header: {
        fontSize: '1.4em',
        marginBottom: '1em'
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