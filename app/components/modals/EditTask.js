import React from 'react'
import Modal from 'react-modal'
import { TextField } from '@material-ui/core';
import { CirclePicker } from 'react-color';

const EditTask = ({open, deleteCard, resaveCard, data, onChange, colorPicker, close}) =>(
    <Modal
        isOpen={open}
        style={styles}
        contentLabel="Edit Task">
        <div style={styles.modalHeader}>
            <h4 style={styles.header}>Edit Task</h4>
            <button style={styles.modalExit} onClick={close}>close</button>
        </div>
        {data ? console.log(data) :null}
        <form onSubmit={resaveCard} style={styles.addTaskForm}>
            <TextField style={styles.input} onChange={onChange} required label="Title" name="taskName" placeholder="Task Name" defaultValue={data ? data.header :null} variant="outlined" inputProps={{ maxLength: 20}} />
            <TextField style={styles.input} onChange={onChange} required label="Description" name="taskDescription" placeholder="Description" defaultValue={data ? data.description :null} multiline rowsMax="6" variant="outlined" />
            <div style={styles.secondaryContent}>
                <div style={{}}>
                    <p style={{color: 'grey', fontSize: '12px',padding: '0 0 .5em .75em'}}>Importance</p>
                    <CirclePicker color={data ? data.importance :null} onChangeComplete={colorPicker} />
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: '1em', width: '43.5%'}}>
                    <TextField style={{marginTop: '1em'}} required label="Due Date" name="taskDueDate" onChange={onChange} type="date" defaultValue={data ? data.dueDate :null} variant='outlined' InputLabelProps={{ shrink: true }} />
                    <TextField style={{marginTop: '1em'}} required label="Time Due" onChange={onChange} name="taskTimeDue" type="time" defaultValue={data ? data.timeDue :null} variant='outlined' InputLabelProps={{ shrink: true }}/>
                </div>
            </div>
            <button type="submit" style={styles.addBtn}>Submit</button>
        </form>
    </Modal>
)
export default EditTask

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