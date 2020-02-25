import React from 'react'
import { Drawer } from '@material-ui/core'
import { FaFlipboard, FaClipboardList, FaUserClock } from "react-icons/fa";


const DashboardDrawer = ({isOpen,onHide}) =>(
        <Drawer
            ModalProps={{ onClose : ()=>onHide() }}
            docked='false'
            open={isOpen}>
            <div style={styles.container}>
                <h2 style={styles.header}>Dashboard</h2>
                <div style={styles.navItem}>
                    <FaFlipboard style={styles.icon}/>
                    <p style={styles.navText}>Kanban</p>
                </div>
                <div style={styles.navItem}>
                    <FaClipboardList style={styles.icon} />
                    <p style={styles.navText}>Todo List</p>
                </div>
                <div style={styles.navItem}>
                    <FaUserClock style={styles.icon}/>
                    <p style={styles.navText}>Time Management</p>
                </div>
            </div>
        </Drawer>

)
export default DashboardDrawer

const styles = {
    icon: {
        fontSize: '1.8em',
        paddingRight: '.25em'
    },
    container: {
        backgroundColor: '#585858',
        width: '350px',
        height: '100%',
        padding: '.75em',
        color: 'lightgrey'
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