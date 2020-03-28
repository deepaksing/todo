import 'tachyons';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import toDoItems from './toDoItems';


render(<App initItems={toDoItems}/>, document.getElementById('root'));

