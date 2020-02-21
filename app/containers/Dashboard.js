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
        categories: {
            'category-1': {
                id: 'category-1',
                title: 'To do',
                cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9']
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
        },
        catOrder: ['category-1', 'category-2', 'category-3']
    }

    addTaskChange = (e) => setTasks({
        ...tasks, [e.target.name]: [e.target.value]  
    })

    onChange = (e) => {
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

    submitCategory = (e) =>{
        e.preventDefault()
        console.log(uuid())
        const catId = uuid()
        this.setState({categories: [...this.state.categories, {[catId]:{"id": catId, "title": this.state.tempCategory, "cardIds": []}}]})
        // this.setState({categories: [...this.state.categories, {title: this.state.tempCategory}]})
        e.target.reset()
        console.log(this.state)
        // localStorage.setItem('categories',JSON.stringify(this.state.categories))
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

    // componentDidMount = () =>{
    //     if(localStorage.getItem('categories')){
    //         let categories = JSON.parse(localStorage.getItem('categories'))
    //         this.setState({ categories})
    //     }
    // }

    // componentWillUnmount = () =>{
    //     localStorage.setItem('categories', JSON.stringify(this.state.categories))
    // }
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

    testonClick = () =>{
        let ct = this.state.categories
        let catNum = Object.keys(ct).length
        let newObject = {
            id: "category-"+(catNum+1),
            title: 'This works',
            cardIds: []
        }
        ct[newObject.id] = newObject
        this.setState({categories: ct})
        this.setState({catOrder: [...this.state.catOrder, newObject.id]})
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
                        <input style={styles.inputBox} type='text' name='tempCategory' onChange={this.onChange} placeholder='Category name...' />
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
                                        console.log(cards.length)
                                        return <Category key={category.id} index={index} category={category} cards={cards} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                        
                    </div>
                    <AddTaskModal submitTasks={this.submitTasks} open={this.state.open} close={this.modalToggle} />
                </div>
            </div>
        )
    }
}
export default Dashboard

const styles = {
    mainContent: {
        padding: '5.5em 1em 0 1em',
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
        overFlowX: 'scroll',
        marginTop: '2em'
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