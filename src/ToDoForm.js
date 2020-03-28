import React from 'react';
import './css/ToDoForm.css';

class ToDoForm extends React.Component {
 

    componentDidMount() {
        this.refs.itemName.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();
        var newValue = this.refs.itemName.value;

        if(newValue) {
            this.props.addItem({newValue});
            this.refs.form.reset();
        }
    }

    render()
    {
        return (
            <div className="main">
                <form className = "form-inline" ref="form" onSubmit={this.onSubmit}>
                    <div className="search-box">
                        
                    <input className = "form-outline" type="text" placeholder="add a new todo" ref="itemName"/>
                    <button className="search-btn" type="submit"> 
                    + </button>
               
                        </div> 
                         </form>
            </div>
        );
    }
}

export default ToDoForm;