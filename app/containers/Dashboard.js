import React, { Component } from 'react';
import TopNav from '../components/nav/TopNav';
import Category from '../components/kanban/Category';
import AddTaskModal from '../components/modals/AddTaskModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import DashboardDrawer from '../components/drawers/DashboardDrawer';
import SettingsDrawer from '../components/drawers/SettingsDrawer';
import { uuid } from 'uuidv4';

class Dashboard extends Component {
    state = {
        isSettingsOpen: false,
        isDashboardOpen: false,
        isNotifications: false,
        isAddCardModal: false,
        newCardCategoryId: "",
        addCategory: "",
        taskName: "",
        taskDescription: "",
        categories: {
            'category-1': {
                id: 'category-1',
                title: 'To do',
                cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9', 'card-10', 'card-11', 'card-12']
            },
            'category-2': {
                id: 'category-2',
                title: 'Doing',
                cardIds: []
            },
            'category-3': {
                id: 'category-3',
                title: 'Done',
                cardIds: []
            }
        },
        cards: {
            'card-1': { id: 'card-1', header: 'This is the title', description: 'This is some content that is more indepth about the card.', dueDate: '10/12/2020' },
            'card-2': { id: 'card-2', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-3': { id: 'card-3', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-4': { id: 'card-4', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-5': { id: 'card-5', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-6': { id: 'card-6', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-7': { id: 'card-7', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-8': { id: 'card-8', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-9': { id: 'card-9', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-10': { id: 'card-10', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-11': { id: 'card-11', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
            'card-12': { id: 'card-12', header: 'Work on react', description: 'Finish up stuff for Seans class', dueDate: '10/12/2020' },
        },
        catOrder: ['category-1', 'category-2', 'category-3']
    }

    addTaskChange = (e) => setTasks({
        ...tasks, [e.target.name]: [e.target.value]  
    })

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
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

    // testonClick = () =>{
    //     let ct = this.state.categories
    //     let catNum = Object.keys(ct).length
    //     let newObject = {
    //         id: "category-"+(catNum+1),
    //         title: 'This works',
    //         cardIds: []
    //     }
    //     ct[newObject.id] = newObject
    //     this.setState({categories: ct})
    //     this.setState({catOrder: [...this.state.catOrder, newObject.id]})
    // }

    submitCategory = (e) =>{
        e.preventDefault()
        if(this.state.addCategory.length > 0){
            let currentCategories = this.state.categories
            let categoryCount = Object.keys(currentCategories).length
            let newCategory = {
                id: uuid(),
                title: (this.state.addCategory),
                cardIds: []
            }
            currentCategories[newCategory.id] = newCategory
            this.setState({categories: currentCategories})
            this.setState({catOrder: [...this.state.catOrder, newCategory.id]})
            this.setState({addCategory: ""})
            e.target.reset()
        }else{
            alert("You cant leave this field empty...")
        }
        console.log(this.state)   
    }
    
    deleteCategory = (i) =>{
        this.state.categories.splice(i,1)
        this.setState({categories: [...this.state.categories]})
        // localStorage.setItem('categories', JSON.stringify(this.state.categories))
    }

    onDragEnd = (result) =>{
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

        if(type === 'category'){
            const newCategoryOrder = Array.from(this.state.catOrder)
            newCategoryOrder.splice(source.index,1)
            newCategoryOrder.splice(destination.index,0,draggableId)

            const newState = {
                ...this.state,
                catOrder: newCategoryOrder,
            }
            this.setState(newState)
        }

        const start = this.state.categories[source.droppableId]
        const finish = this.state.categories[destination.droppableId]

        if(start === finish){
            const newCardIds = Array.from(this.state.category.cardIds)
            newCardIds.splice(source.index, 1)
            newCardIds.splice(destination.index, 0, draggableId);

            const newCategory = {
                ...category,
                cardIds: newCardIds,
            }

            const newState = {
                ...this.state,
                categories: {
                    ...this.state.categories,
                    [newCategory.id]: newCategory,
                }
            }
            this.setState(newState)
            return;
        }
        const startCardIds = Array.from(start.cardIds)
        startCardIds.splice(source.index,1)
        const newStart = {
            ...start,
            cardIds: startCardIds,
        }

        const finishCardIds = Array.from(finish.cardIds)
        finishCardIds.splice(destination.index,0,draggableId)

        const newFinish = {
            ...finish,
            cardIds: finishCardIds,
        }

        const newState = {
            ...this.state,
            categories: {
                ...this.state.categories,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }
        this.setState(newState)
        
    }

    dashboardToggle = () =>{
        console.log('dashboardToggle')
        // this.setState({isDashboardOpen: !this.state.isDashboardOpen})
        this.setState({isDashboardOpen: true})
    
    }
    
    settingsToggle = () =>{
        this.setState({isSettingsOpen: !this.state.settingsDrawer})
    }

    handleDashboardHide = ()=>{
        console.log('hiding drawer');
        this.setState({isDashboardOpen: !this.state.isDashboardOpen})
    }
    handleNotificationsChange = () =>{
        this.setState({isNotifications: !this.state.isNotifications})
    }

    handleSettingsHide = () =>{
        this.setState({isSettingsOpen: !this.state.isSettingsOpen})
    }

    removeCategory = (id) =>{
        console.log("The delete works!")

        let cats = {...this.state.categories}
        let order = this.state.catOrder
        const index = order.indexOf(id)
        order.splice(index,1)
        delete cats[id]

        console.log(cats)
        this.setState({categories: cats, catOrder: order})
        console.log(this.state)
    }
    
    addCardModalToggle = (e) =>{
        e.preventDefault()
        this.setState({isAddCardModal: !this.state.isAddCardModal})
    }

    addCard = (e) =>{
        e.preventDefault()
        console.log(this.state.taskName, this.state.taskDescription)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <DashboardDrawer isOpen={this.state.isDashboardOpen} onHide={this.handleDashboardHide} />
                <SettingsDrawer onSwitchChange={this.handleNotificationsChange} isNotifications={this.state.isSettingsOpen} isOpen={this.state.isSettingsOpen} onHide={this.handleSettingsHide} />
                
                <TopNav dashboardToggle={this.dashboardToggle} settingsToggle={this.settingsToggle} />
                <div style={styles.mainContent}>
                    <form onSubmit={this.submitCategory} style={styles.addGroup}>
                        <input style={styles.inputBox} type='text' name='addCategory' onChange={this.onChange} placeholder='Category name...' />
                        <button style={styles.addBtn} type="submit">Add Category</button>
                        
                    </form>
                    <div style={styles.board}>
                    {/* <button onClick={this.testonClick}>Add</button> */}
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="all-categories" direction="horizontal" type="category">
                            {(provided) =>(
                                <div style={styles.board} {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.catOrder.map((catId, index)=>{
                                        const category = this.state.categories[catId]
                                        const cards = category.cardIds.map(cardId => this.state.cards[cardId])
                                        return <Category addCard={this.addCardModalToggle} removeCategory={this.removeCategory} key={category.id} index={index} category={category} cards={cards} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    </div>
                    <AddTaskModal onChange={this.onChange} addCard={this.addCard} submitTasks={this.submitTasks} open={this.state.isAddCardModal} close={this.addCardModalToggle} />
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
        marginBottom: '1em',
        position: 'fixed'
    },
    btnText: {
        backgroundcolor: 'lightgrey'
    },
    board: {
        display: 'flex',
        flexDirection: 'row',
        overFlow: 'scroll',
        height: '100%',
        marginTop: '2em',
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