import React from 'react';
import ToDoListItems from './ToDoListItems';

class ToDoList extends React.Component
{
    render()
    {

       var items = this.props.items.map((item, index) => 
       {
           return(
           <ToDoListItems key={index} item={item} index={index} removeItem={this.props.removeItem} markToDone={this.props.markToDone}/>
       );
   });
        return (
            <div>
                <ul> {items}
                 </ul>
            </div>
        )
    }
}

export default ToDoList;