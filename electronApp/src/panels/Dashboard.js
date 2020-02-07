import React, { Component } from 'react'
import TopNav from '../components/nav/TopNav'
import SVGAddButton from '../images/SVGAddButton'

class Dashboard extends Component {
    render() {
        return(
            <div>
                <TopNav />
                <div style={styles.mainContent}>
                    <div style={styles.btnGroup}>
                        <SVGAddButton height='45px' />
                        <p style={styles.btnText}>Add Category</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard

const styles = {
    mainContent: {
        padding: '1em',
    },
    btnGroup: {
        display: 'flex',
        alignItems: 'Center',
        height: '45px',
        backgroundcolor: 'lightgrey'
    },
    btnText: {
        backgroundcolor: 'lightgrey'
    }
}