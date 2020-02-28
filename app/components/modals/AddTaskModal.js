import React from 'react'
import Modal from 'react-modal';
import { TextField } from '@material-ui/core';
import { CirclePicker } from 'react-color';

const addTaskModal = ({open,close,addCard, onChange, colorPicker}) =>(
    <Modal
        isOpen={open}
        style={styles}
        contentLabel="Add Task">
        <div style={styles.modalHeader}>
            <h4 style={styles.header}>Add Task</h4>
            <button style={styles.modalExit} onClick={close}>close</button>
        </div>
        <form onSubmit={addCard} style={styles.addTaskForm}>
            <TextField style={styles.input} onChange={onChange} required name="taskName" placeholder="Task Name" variant="outlined" inputProps={{ maxLength: 30}} />
            <TextField style={styles.input} onChange={onChange} required name="taskDescription" placeholder="Description" multiline rowsMax="6" variant="outlined" />
            <div style={styles.secondaryContent}>
                <div style={{}}>
                    <p style={{color: 'grey', fontSize: '12px',padding: '0 0 .5em .75em'}}>Importance</p>
                    <CirclePicker color="#ffff" onChangeComplete={colorPicker} />
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: '1em', width: '43.5%'}}>
                    <TextField style={{marginTop: '1em'}} required label="Due Date" name="taskDueDate" onChange={onChange} type="date" variant='outlined' InputLabelProps={{ shrink: true }} />
                    <TextField style={{marginTop: '1em'}} required label="Time Due" onChange={onChange} name="taskTimeDue" type="time" variant='outlined' InputLabelProps={{ shrink: true }}/>
                </div>
            </div>
            <button type="submit" style={styles.addBtn}>Submit</button>
        </form>
    </Modal>
)
export default addTaskModal

const styles = {
    addBtn: {
        backgroundColor: '#00FDDC',
        marginTop: '1em',
        padding: '.5em 0',
        color: 'white',
        borderRadius: '4px'
    },
    secondaryContent: {
        marginTop: '1em',
        display: 'flex'
    },
    radiobtns:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: '1em',
        justifyContent: 'center'
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    header: {
        fontWeight: '200',
        color: 'black',
        fontSize: '1.6em'
    },
    modalExit: {
        position: 'absolute',
        right: 20
    },
    input: {
        marginTop: '1em'
    },
    addTaskForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '450px'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}