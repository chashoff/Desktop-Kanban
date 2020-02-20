import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Styles from './Card.css';

const Card = (props) =>(
    <Draggable draggableId={props.card.id} index={props.index}>
        {provided=>(
            <div id={props.card.id} className={Styles.card} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className={Styles.cardHeaderBackground}>
                    <h3 className={Styles.cardHeader}>{props.card.header}</h3>
                </div>
                <div style={{ padding: '.5em .25em' }}>
                    <p style={{ paddingBottom: '.5em', borderBottom: '1px solid darkgrey', color: 'black'}}>{props.card.description}</p>
                    <p style={{ paddingTop: '.5em', fontSize: '.6em',color: 'lightgrey' }}>{props.card.dueDate}</p>
                </div>
            </div>
        )}
        
    </Draggable>

)   
export default Card

const styles = {
    container: {
        padding: '.5em',
        backgroundColor: '#F5F5F5',
        margin: '1em .5em',
        color: 'black',
        borderRadius: '5px 5px 5px 5px',
        boxShadow: '0px 3px 13px -2px rgba(0,0,0,0.75)',
    },
    cardHeader: {
        padding: '.5em .25em',
    },
    headerBackground: {
        backgroundColor: 'lightgrey',
        borderRadius: '5px 5px 0 0'
    },
    content: {
        padding: '.5em .25em'
    },
    description: {
        paddingBottom: '.5em',
        borderBottom: '1px solid darkgrey'
    },
    date: {
        paddingTop: '.5em',
        fontSize: '.6em',
        color: 'lightgrey'
    }

}