import React from 'react'

const Category = ({onClick, name, index}) => (
    <div id={'cat-'+index} style={styles.container}>
        <div style={styles.headerContainer}>
            <h3>{name}</h3>
            <div style={styles.buttonGroup}>
                <button>Add</button>
                <button>Edit</button>
                <button onClick={onClick}>Delete</button>
            </div>
        </div>
    </div>
)
export default Category

const styles = {
    container: {
        backgroundColor: '#F9F9F9',
        width: '300px',
        boxShadow: '0px 3px 13px -2px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        marginRight: '1em'
    },
    headerContainer: {
        backgroundColor: '#F8F7EC',
        borderRadius: '5px 5px 0 0',
        padding: '.5em .25em',
        display: 'flex',
        flexDirection: 'row'
    },
    buttonGroup: {
        marginLeft: 'auto'
    }
}