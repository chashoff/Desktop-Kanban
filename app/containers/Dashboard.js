import React, { Component } from 'react';
import TopNav from '../components/nav/TopNav';
import Category from '../components/kanban/Category';
import AddTaskModal from '../components/modals/AddTaskModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import DashboardDrawer from '../components/drawers/DashboardDrawer';
import SettingsDrawer from '../components/drawers/SettingsDrawer';
import { uuid } from 'uuidv4';
import EditTask from '../components/modals/EditTask';
import { MdAddCircle } from 'react-icons/md'
import Tooltip from '@material-ui/core/Tooltip'

class Dashboard extends Component {
    state = {
        isSettingsOpen: false,
        isDashboardOpen: false,
        isNotifications: true,
        isAddCardModal: false,
        isEditModal: false,
        newCardCategoryId: "",
        addCategory: "",
        taskName: "",
        taskDescription: "",
        taskImportance: "",
        taskDueDate: "",
        taskTimeDue: "",
        categories: {},
        cards: {},
        catOrder: []
    }

    componentWillMount(){
        //load data from local storage
        const cards = localStorage.getItem('cards')
        const order = localStorage.getItem('catOrder')
        const categories = localStorage.getItem('categories')
        const notifications = localStorage.getItem('notifications')

        //if there is no data in local storage then set the default state to either object or array depending on case
        if(cards != null && order != null && categories != null){
            console.log("this works")
            cards ? this.setState({cards: JSON.parse(cards)}): this.setState({cards: {}})
            order ? this.setState({catOrder: JSON.parse(order)}): this.setState({catOrder: []})
            categories ? this.setState({categories: JSON.parse(categories)}): this.setState({categories: {}})
            this.setState({isNotifications: JSON.parse(notifications)})
        }else{
            let defaultCards = {"468d7581-74b8-4590-b1ed-2c0417bd1c61":{"id":"468d7581-74b8-4590-b1ed-2c0417bd1c61","header":"Create First Category","description":"Click on the add category text box, and create your very first category box!","importance":"#cddc39","dueDate":"2020-12-31","timeDue":"00:00"},"86d4e012-7ee3-4865-b978-2cba8c7228c9":{"id":"86d4e012-7ee3-4865-b978-2cba8c7228c9","header":"Create First Task","description":"Click on the \"Add Task\" button within your desired column, then chose the title, description, due date, color, and time due.","importance":"#ffeb3b","dueDate":"2020-12-31","timeDue":"00:00"},"18a52798-71a6-438b-a9b3-635f0362457c":{"id":"18a52798-71a6-438b-a9b3-635f0362457c","header":"Delete a Category","description":"Select a desired category to delete! Remember, if this category contains cards you will not be able to undo it!.","importance":"#ffc107","dueDate":"2020-12-31","timeDue":"00:00"},"aa70a23b-8b0c-4360-b76d-8d0049732b08":{"id":"aa70a23b-8b0c-4360-b76d-8d0049732b08","header":"Delete a Task","description":"Delete a desired task within a category. Remeber, you will not be able to get this data back once deleted!","importance":"#f44336","dueDate":"2020-12-31","timeDue":"00:00"},"1178c4f0-8744-440e-a260-dc80258eec2e":{"id":"1178c4f0-8744-440e-a260-dc80258eec2e","header":"Edit a Task","description":"Click \"Edit Task\" on the task you would like to edit. Change the inputs to your likings then click \"Update\"!","importance":"#9c27b0","dueDate":"2020-12-31","timeDue":"00:00"}}
            let defaultCategories = {"96107280-4c70-400e-9bb6-42d2c875303a":{"id":"96107280-4c70-400e-9bb6-42d2c875303a","title":"To Do","cardIds":["468d7581-74b8-4590-b1ed-2c0417bd1c61","86d4e012-7ee3-4865-b978-2cba8c7228c9","18a52798-71a6-438b-a9b3-635f0362457c","aa70a23b-8b0c-4360-b76d-8d0049732b08","1178c4f0-8744-440e-a260-dc80258eec2e"]},"25a315f8-09fc-4389-b82d-ba55827540de":{"id":"25a315f8-09fc-4389-b82d-ba55827540de","title":"Doing","cardIds":[]},"e2119815-a82a-46c2-8d1b-2be8e44e712f":{"id":"e2119815-a82a-46c2-8d1b-2be8e44e712f","title":"Done","cardIds":[]}}
            let defOrder = ["96107280-4c70-400e-9bb6-42d2c875303a","25a315f8-09fc-4389-b82d-ba55827540de","e2119815-a82a-46c2-8d1b-2be8e44e712f"]
            
            this.setState({catOrder: defOrder,categories: defaultCategories, cards: defaultCards})
        }
        

    }
    resetState = () =>{
        let defaultCards = {"468d7581-74b8-4590-b1ed-2c0417bd1c61":{"id":"468d7581-74b8-4590-b1ed-2c0417bd1c61","header":"Create First Category","description":"Click on the add category text box, and create your very first category box!","importance":"#cddc39","dueDate":"2020-12-31","timeDue":"00:00"},"86d4e012-7ee3-4865-b978-2cba8c7228c9":{"id":"86d4e012-7ee3-4865-b978-2cba8c7228c9","header":"Create First Task","description":"Click on the \"Add Task\" button within your desired column, then chose the title, description, due date, color, and time due.","importance":"#ffeb3b","dueDate":"2020-12-31","timeDue":"00:00"},"18a52798-71a6-438b-a9b3-635f0362457c":{"id":"18a52798-71a6-438b-a9b3-635f0362457c","header":"Delete a Category","description":"Select a desired category to delete! Remember, if this category contains cards you will not be able to undo it!.","importance":"#ffc107","dueDate":"2020-12-31","timeDue":"00:00"},"aa70a23b-8b0c-4360-b76d-8d0049732b08":{"id":"aa70a23b-8b0c-4360-b76d-8d0049732b08","header":"Delete a Task","description":"Delete a desired task within a category. Remeber, you will not be able to get this data back once deleted!","importance":"#f44336","dueDate":"2020-12-31","timeDue":"00:00"},"1178c4f0-8744-440e-a260-dc80258eec2e":{"id":"1178c4f0-8744-440e-a260-dc80258eec2e","header":"Edit a Task","description":"Click \"Edit Task\" on the task you would like to edit. Change the inputs to your likings then click \"Update\"!","importance":"#9c27b0","dueDate":"2020-12-31","timeDue":"00:00"}}
        let defaultCategories = {"96107280-4c70-400e-9bb6-42d2c875303a":{"id":"96107280-4c70-400e-9bb6-42d2c875303a","title":"To Do","cardIds":["468d7581-74b8-4590-b1ed-2c0417bd1c61","86d4e012-7ee3-4865-b978-2cba8c7228c9","18a52798-71a6-438b-a9b3-635f0362457c","aa70a23b-8b0c-4360-b76d-8d0049732b08","1178c4f0-8744-440e-a260-dc80258eec2e"]},"25a315f8-09fc-4389-b82d-ba55827540de":{"id":"25a315f8-09fc-4389-b82d-ba55827540de","title":"Doing","cardIds":[]},"e2119815-a82a-46c2-8d1b-2be8e44e712f":{"id":"e2119815-a82a-46c2-8d1b-2be8e44e712f","title":"Done","cardIds":[]}}
        let defOrder = ["96107280-4c70-400e-9bb6-42d2c875303a","25a315f8-09fc-4389-b82d-ba55827540de","e2119815-a82a-46c2-8d1b-2be8e44e712f"]
        
        this.setState({catOrder: defOrder,categories: defaultCategories, cards: defaultCards})
    }

    colorPicker = (color) => {
        this.setState({ taskImportance: color.hex });
    }

    onChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    modalToggle = () =>{
        console.log('running')
        this.setState({open: !this.state.open})
    }

    submitTasks = (e) =>{
        e.preventDefault()
        e.target.reset()
        this.setState({["open"]: false})
    }

    submitCategory = (e) =>{
        e.preventDefault()
        //validate to make sure input contains characters
        if(this.state.addCategory.length > 0){
            let currentCategories = this.state.categories
            let categoryCount = Object.keys(currentCategories).length
            //create new cat object, and set values
            let newCategory = {
                id: uuid(),
                title: (this.state.addCategory),
                cardIds: []
            }
            //save the new category key to the newcategory object

            //I need to combine these statements
            currentCategories[newCategory.id] = newCategory
            this.setState({categories: currentCategories})
            this.setState({catOrder: [...this.state.catOrder, newCategory.id]})
            this.setState({addCategory: ""})
            e.target.reset()
        }
    }
    componentDidUpdate(){
        //store items in local storage everytime the state updates
        localStorage.setItem('catOrder', JSON.stringify(this.state.catOrder))
        localStorage.setItem('categories', JSON.stringify(this.state.categories))
        localStorage.setItem('cards', JSON.stringify(this.state.cards))
        localStorage.setItem('notifications', this.state.isNotifications)
    }

    deleteCard = (id) =>{
        //delete card from category by passing in id, then mapping through state till it contains that id
        let categories = this.state.categories
        Object.keys(categories).map(category => {
            const newState = this.state.categories[category].cardIds.filter(
                cardId => id !== cardId
            )
            let categories = this.state.categories
            categories[category].cardIds = newState
            let cards = this.state.cards
            delete cards[id]
            this.setState({categories, cards})
        })
    }

    editCard = (id) =>{
        this.setState({isEditModal: true, tempId: id})
    }

    resaveCard = (e) =>{
        e.preventDefault()
        this.handleEditTaskToggle()
        let cards = this.state.cards
        let card = cards[this.state.tempId]
        card = {
            id: (this.state.tempId),
            header: (this.state.taskName),
            description: (this.state.taskDescription),
            importance: (this.state.taskImportance),
            dueDate: (this.state.taskDueDate),
            timeDue: (this.state.taskTimeDue)
        }
        cards[this.state.tempId] = card
        this.setState({cards: cards})
    }

    addCardModalToggle = (id) =>{
        //pass in modal id and reset the state to the opposite of what it currently is
        this.setState({newCardCategoryId: id})
        this.setState({isAddCardModal: !this.state.isAddCardModal})
    }
    handleEditTaskToggle = () =>{
        this.setState({isEditModal: !this.state.isEditModal})
    }

    addCard = (e) =>{
        e.preventDefault()
        let cards = this.state.cards
        let uniqueId = uuid()
        //create newcard object and set values
        let newCard = {
            id: uniqueId,
            header: (this.state.taskName),
            description: (this.state.taskDescription),
            importance: (this.state.taskImportance),
            dueDate: (this.state.taskDueDate),
            timeDue: (this.state.taskTimeDue)
        }
        cards[uniqueId] = newCard
        this.setState({cards: cards})
        //set the new state 
        let categories = this.state.categories
        categories[this.state.newCardCategoryId].cardIds.push(uniqueId)
        //reset the categories state, and close modal
        this.setState({categories: categories, isAddCardModal: !this.state.isAddCardModal})
    }

    onDragEnd = (result) =>{
        //destructure result, and check to see if there is destinations
        const {destination, source, draggableId, type} = result;
        if(!destination){
            return;
        }
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        }

        //validatetype and then splice from the current order, and append it to the new index
        if(type === 'category'){
            const newCategoryOrder = Array.from(this.state.catOrder)
            newCategoryOrder.splice(source.index,1)
            newCategoryOrder.splice(destination.index,0,draggableId)

            //reset the state to the new categories order
            this.setState({...this.state, catOrder: newCategoryOrder})
        }

        //set start and finish variables for droppablid
        const start = this.state.categories[source.droppableId]
        const finish = this.state.categories[destination.droppableId]

        if(start === finish){
            const newCardIds = Array.from(start.cardIds)
            newCardIds.splice(source.index, 1)
            newCardIds.splice(destination.index, 0, draggableId);

            const newCategory = {...start, cardIds: newCardIds}
            //rest the categories, and catorder to the state
            this.setState({...this.state, categories: {...this.state.categories, [newCategory.id]: newCategory}})
            return;
        }
        //allow for reorganizing the cards within each category, and dave to state
        const startCardIds = Array.from(start.cardIds)
        startCardIds.splice(source.index,1)
        const newStart = {...start, cardIds: startCardIds}

        const finishCardIds = Array.from(finish.cardIds)
        finishCardIds.splice(destination.index,0,draggableId)

        const newFinish = {...finish, cardIds: finishCardIds}

        this.setState({...this.state, categories: {...this.state.categories, [newStart.id]: newStart, [newFinish.id]: newFinish}})
    }

    dashboardToggle = () =>{
        this.setState({isDashboardOpen: true})
    
    }
    
    settingsToggle = () =>{
        this.setState({isSettingsOpen: !this.state.settingsDrawer})
    }

    handleDashboardHide = ()=>{
        this.setState({isDashboardOpen: !this.state.isDashboardOpen})
    }
    handleNotificationsChange = () =>{
        this.setState({isNotifications: !this.state.isNotifications})
        if(this.state.isNotifications === true){
            let myNotification = new Notification('TimeGuru', {
                body: 'Your notifications have been disabled!'
            })
        }else{
            let myNotification = new Notification('TimeGuru', {
                body: 'Your notifications have been enabled!'
            })
        }
        
    }

    handleSettingsHide = () =>{
        this.setState({isSettingsOpen: !this.state.isSettingsOpen})
    }
    handleRemoveCategoryModalToggle = () =>{
        this.setState({isConfirmModal: !this.state.isConfirmModal})
    }

    removeCategory = (id) =>{
        let cats = {...this.state.categories}
        
        let order = this.state.catOrder
        const index = order.indexOf(id)
        order.splice(index,1)

        delete cats[id]
        this.setState({categories: cats, catOrder: order, isConfirmModal: true})
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <DashboardDrawer isOpen={this.state.isDashboardOpen} onHide={this.handleDashboardHide} />
                <SettingsDrawer resetState={this.resetState} onSwitchChange={this.handleNotificationsChange} isNotifications={this.state.isNotifications} isOpen={this.state.isSettingsOpen} onHide={this.handleSettingsHide} />
                
                <TopNav dashboardToggle={this.dashboardToggle} settingsToggle={this.settingsToggle} />
                <div style={styles.mainContent}>
                    <form onSubmit={this.submitCategory} style={styles.addGroup}>
                        <input style={styles.inputBox} type='text' name='addCategory' maxLength='32' onChange={this.onChange} placeholder='Add category here...' />
                        <Tooltip title="Add Category" placement="top">
                            <button style={styles.addBtn} type="submit"><MdAddCircle style={{paddingTop: '3px',margin: 'auto 0', color: '#333333', fontSize: '1.5em', backgroundColor: 'transparent'}} /></button>
                        </Tooltip>
                    </form>
                    <div style={styles.board}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="all-categories" direction="horizontal" type="category">
                            {(provided) =>(
                                <div style={styles.board} {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.catOrder.map((catId, index)=>{
                                        const category = this.state.categories[catId]
                                        const cards = category.cardIds.map(cardId => this.state.cards[cardId])
                                        return <Category deleteCard={this.deleteCard} editCard={this.editCard} addCardModalToggle={this.addCardModalToggle} removeCategory={this.removeCategory} key={category.id} index={index} category={category} cards={cards} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    </div>
                    <AddTaskModal colorPicker={this.colorPicker} onChange={this.onChange} addCard={this.addCard} submitTasks={this.submitTasks} open={this.state.isAddCardModal} close={this.addCardModalToggle} />
                    <EditTask deleteCard={this.deleteCard} resaveCard={this.resaveCard} open={this.state.isEditModal} data={this.state.cards[this.state.tempId]} close={this.handleEditTaskToggle} onChange={this.onChange} colorPicker={this.colorPicker}/>
                </div>
            </div>
        )
    }
}
export default Dashboard

const styles = {
    mainContent: {
        padding: '5.5em 1em 0 1em',
        overFlow: 'hidden'
    },
    addGroup: {
        display: 'flex',
        alignItems: 'Center',
        height: '45px',
        position: 'relative',
        width: '350px'
    },
    btnText: {
        backgroundcolor: 'lightgrey'
    },
    board: {
        display: 'flex',
        flexDirection: 'row',
        overFlow: 'scroll',
        height: '100%',
        marginTop: '.25em'
    },
    addBtn: {
        backgroundColor: '#00FDDC',
        position: 'relative',
        padding: '.15em',
        borderRadius: '0 4px 4px 0',
        outline: 'none',
        height: '35px',
        width: '35px'
    },
    inputBox: {
        padding: '.5em .25em',
        borderRadius: '4px 0px 0px 4px',
        height: '35px',
        width: '350px',
        paddingLeft: '.5em'
    }
}