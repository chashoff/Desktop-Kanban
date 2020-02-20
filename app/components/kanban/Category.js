import React from 'react'
import Card from '../kanban/Card'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { IoIosAdd } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import Styles from './Category.css'

const Category = (props) =>(
    <Draggable draggableId={props.category.id} index={props.index}>
        {(provided)=>(
            <div className="categoryContainer" {...provided.draggableProps} ref={provided.innerRef}>
                <div {...provided.dragHandleProps} style={styles.headerContainer}>
                    <h3 style={styles.categoryHeader}>{props.category.title}</h3>
                    <div style={styles.buttonGroup}>
                        <button style={styles.btn}><IoIosAdd style={styles.icon} /></button>
                        <button style={styles.btn}><MdEdit style={styles.icon} /></button>
                        <button style={styles.btn}><MdDelete style={styles.icon} /></button>
                    </div>
                </div>
                <Droppable droppableId={props.category.id} type="card">
                    {(provided) => (
                        <div style={styles.cardList} 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                            {props.cards.map((card, i) => <Card key={card.id} index={i} card={card} />)}
                            {provided.placeholder}
                        </div>
                    )}
                    
                </Droppable>
            </div>
        )}
    </Draggable>
)
export default Category

const styles = {
    headerContainer: {
        boxShadow: '0px 3px 13px -2px rgba(0,0,0,0.75)',
        width: '375px',
        backgroundColor: '#00FDDC',
        borderRadius: '5px 5px 5px 5px',
        padding: '.5em .25em',
        display: 'flex',
        flexDirection: 'row'
    },
    buttonGroup: {
        marginLeft: 'auto'
    },
    categoryHeader: {
        color: 'black',
        margin: 'auto 0'
    },
    btn: {
        backgroundColor: 'transparent',
    },
    icon: {
        fontSize: '1.4em'
    }
}