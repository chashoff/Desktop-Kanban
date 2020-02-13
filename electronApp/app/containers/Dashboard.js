import React, { useState, useRef } from 'react';
import TopNav from '../components/nav/TopNav';
import Category from '../components/kanban/Category';

function Dashboard() {
    const [categoryNames, setCategory] = useState([])
    const inputCat = useRef(null)

    const onSubmit = (e) =>{
        e.preventDefault()
        setCategory([...categoryNames, inputCat.current.value])
        console.log(categoryNames)
        e.target.reset()
    }

    const deleteCategory = (i) =>{
        console.log(i)
        categoryNames.splice(i,1)
        setCategory([...categoryNames])
    }

    return(
        <div>
            <TopNav />
            <div style={styles.mainContent}>
                <form onSubmit={onSubmit} style={styles.addGroup}>
                    <input style={styles.inputBox} type='text' ref={inputCat} placeholder='Category name...' />
                    <button style={styles.addBtn} type="submit">Add Category</button>
                </form>
                <div style={styles.board}>
                    {categoryNames.map((el,i)=><Category index={i} onClick={()=>deleteCategory(i)} name={el} />)}
                </div>
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
        marginBottom: '1em'
    },
    btnText: {
        backgroundcolor: 'lightgrey'
    },
    board: {
        display: 'flex',
        flexDirection: 'row'
    },
    addBtn: {
        padding: '.5em .25em',
        backgroundColor: 'lightGreen',
        borderRadius: '0 4px 4px 0'
    },
    inputBox: {
        padding: '.5em .25em',
        borderRadius: '4px 0 0 4px'
    }
}