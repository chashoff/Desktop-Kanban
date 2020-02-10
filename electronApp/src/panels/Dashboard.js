import React, { useState, useRef } from 'react';
import TopNav from '../components/nav/TopNav';

function Dashboard() {
    const [categoryNames, setCategory] = useState([])
    const inputCat = useRef(null)

    const onSubmit = (e) =>{
        e.preventDefault()
        setCategory([...categoryNames, inputCat.current.value])
        console.log(categoryNames)
        e.target.reset()
    }

    return(
        <div>
            <TopNav />
            <div style={styles.mainContent}>
                <form onSubmit={onSubmit} style={styles.addGroup}>
                    <input type='text' ref={inputCat} placeholder='Category name...' />
                    <button type="submit">Add Category</button>
                </form>
                {console.log(Array.isArray(categoryNames))}
                {categoryNames.map((el=>{
                    return <p style={{ textAlign: 'center', color: 'white' }}>{el}</p>
                }))}
            </div>
        </div>
    )
}
export default Dashboard

const styles = {
    mainContent: {
        padding: '1em',
    },
    addGroup: {
        display: 'flex',
        alignItems: 'Center',
        height: '45px',
    },
    btnText: {
        backgroundcolor: 'lightgrey'
    }
}