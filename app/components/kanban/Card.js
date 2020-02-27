import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Styles from './Card.css';
import { MdDelete } from "react-icons/md";

const Card = (props) =>(
    <Draggable draggableId={props.card.id} index={props.index}>
        {provided=>(
            <div id={props.card.id} className={Styles.card} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div style={{ display: 'flex' }} className={Styles.cardHeaderBackground}>
                    <h3 className={Styles.cardHeader}>{props.card.header}</h3>
                    <div style={{display: 'flex', marginLeft: 'auto'}}>
                        <div style={{backgroundColor: props.card.importance, height: '20px', width: '20px', borderRadius: '50%', margin: 'auto 0'}}></div>
                        <button onClick={()=>props.deleteCard(props.card.id)} style={{ backgroundColor: 'transparent', marginLeft: 'auto', fontSize: '1em' }} className={Styles.transparentButton}><MdDelete style={{ color: 'black', padding: '3px 0 0 10px', fontSize: '20px' }}/></button>
                    </div>
                </div>
                {console.log(props.card)}
                <div style={{ padding: '.5em .25em', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ paddingBottom: '.5em', color: 'black'}}>{props.card.description}</p>
                    <p style={{ fontSize: '.6em',color: 'darkgrey', alignSelf: 'flex-end' }}>Due by {props.card.dueDate} at {props.card.timeDue}</p>
                </div>
            </div>
        )}
    </Draggable>
)   
export default Card

const styles = {
    container: {
        width: 'auto',
        wordWrap: 'break-word',
        padding: '.5em',
        backgroundColor: '#393737',
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
    },
    date: {
        paddingTop: '.5em',
        fontSize: '.6em',
        color: 'darkgrey'
    }

}