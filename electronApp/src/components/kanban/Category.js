import React from 'react'

const Category = (props) => (
    <div style={styles.container}>
        <div style={styles.headerContainer}>
            <h3>{props.name}</h3>
            <div>
                <button>Add</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <p>Task</p>
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
    },
    headerContainer: {
        backgroundColor: '#F8F7EC',
        borderRadius: '5px 5px 0 0',
        padding: '.25em',
        display: 'flex',
        flexDirection: 'row'
    }
}