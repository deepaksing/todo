import React from 'react';
import './css/App.css';
import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import todoItems from './toDoItems';
import Navbar from './Navbar';

class App extends React.Component
{
  
constructor(props)
{
  super(props);
  this.state = {
    Items : todoItems
  };
}

addItem = (todoItem) => {
  todoItems.unshift({
    index: todoItems.length + 1,
    value: todoItem.newValue,
    done: false
  });
  this.setState({Items: todoItems})
}

removeItem = (itemIndex) => {
  todoItems.splice(itemIndex, 1);
  this.setState({todoItems: todoItems});
}

markToDone = (itemIndex) => {
var todo = todoItems[itemIndex];
todoItems.splice(itemIndex, 1);
todo.done = !todo.done;
todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
this.setState({todoItems: todoItems});
}




render() {
  return (
   
    <div className="main">
      
       <div className="content">
     <div className="heading"><ToDoHeader/></div>
    
    <div className="todo-form"><ToDoForm addItem={this.addItem}/></div>
  <div className="todo-list"><ToDoList items={this.props.initItems} removeItem={this.removeItem} markToDone={this.markToDone}/></div>
  
  </div>

    <div className="navigation"><Navbar/>  </div>
        
      
      </div>
     )
}
}
export default App;