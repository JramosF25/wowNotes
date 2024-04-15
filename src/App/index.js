import { AppUi } from './AppUi';
import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';


// localStorage.removeItem('WOWNOTES_V1');

// const defaultTodos = [
//   {text:'Cocinar', completed: false},
//   {text:'Hacer ejercicio', completed: false},
//   {text:'Sacar al perro', completed: false},
//   {text:'Estudiar', completed: true},
// ];

// localStorage.setItem('WOWNOTES_V1', JSON.stringify(defaultTodos));

function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );

}

export default App;
