import React from 'react'
import Modal from 'react-modal';
import { TextField } from '@material-ui/core';

const addTaskModal = ({open,close,submitTasks}) =>(
    <Modal
        isOpen={open}
        style={styles}
        contentLabel="Add Task">
        <div style={styles.modalHeader}>
            <h4 style={styles.header}>Add Task</h4>
            <button style={styles.modalExit} onClick={close}>close</button>
        </div>
        <form onSubmit={submitTasks} style={styles.addTaskForm}>
            <TextField style={styles.input} placeholder="Task Name" variant="outlined" />
            <TextField style={styles.input} placeholder="Description" multiline rowsMax="6" variant="outlined" />
            <button type="submit">Submit</button>
        </form>
    </Modal>
)
export default addTaskModal

const styles = {
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
        marginTop: '.75em'
    },
    addTaskForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}