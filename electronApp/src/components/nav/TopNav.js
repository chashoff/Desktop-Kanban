import React from 'react'
import SVGLogo from '../../images/SVGLogo'

const TopNav = () =>(
    <div style={styles.container}>
        <div style={styles.imageWrapper}>
            <SVGLogo style={styles.logo} height="60px" />
        </div>
    </div>
)
export default TopNav

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#393737',
        padding: '.5em',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 3px 13px -2px rgba(0,0,0,0.75)'
    },
}