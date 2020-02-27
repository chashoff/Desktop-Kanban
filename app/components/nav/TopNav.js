import React from 'react';
import SVGLogo from '../../images/SVGLogo';
import { MdDashboard, MdSettings } from "react-icons/md";

const TopNav = ({settingsToggle, dashboardToggle}) =>(
    <div style={styles.container}>
        <button onClick={dashboardToggle} style={styles.btn}>
            <MdDashboard style={{ display: "none", fontSize: '3em', margin: 'auto 0', color: 'lightgray' }} />
        </button>
        <div style={styles.imageWrapper}>
            <SVGLogo style={styles.logo} height="60px" />
        </div>
        <button style={styles.btn}>
            <MdSettings onClick={settingsToggle} style={{ fontSize: '3em', margin: 'auto 0', color: 'lightgray'}}/>
        </button>
    </div>
)
export default TopNav

const styles = {
    container: {
        position: 'fixed',
        width: '100%',
        backgroundColor: '#393737',
        padding: '.5em',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 3px 13px -2px rgba(0,0,0,0.75)'
    },
    btn: {
        display: 'flex',
        backgroundColor: 'transparent',
        alignSelf: 'flex-end'
    }
}