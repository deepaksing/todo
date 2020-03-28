import React from 'react';
import './css/ToDoListItem.css'
class ToDoListItems extends React.Component
{
    onClickClose = () => {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onClickDone = () => {
        var index = parseInt(this.props.index);
        this.props.markToDone(index);
        
    } 

    render()
    {
        var todoClass = this.props.item.done ? "done" : "undone";
        return (
<div className="items">
                
    <li className={todoClass}>
        <div className="text">
            
        {this.props.item.value}    
            <button className="cancel" type="button" onClick={this.onClickClose}>&times;</button>
            <button classNamae="complete" type="button" onClick={this.onClickDone}>--</button>
    
        </div>
        </li>       
</div> 

            )
    }
}

export default ToDoListItems;