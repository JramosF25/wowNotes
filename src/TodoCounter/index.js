import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter() {

    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);
    return(
      <>
        <h1>
          Your tasks
        </h1>
        <h1 className='TodoCounterAct'>
            Completed <span>{completedTodos}</span> of <span>{totalTodos}</span>
        </h1>
      </>
    );
  }

export {TodoCounter};