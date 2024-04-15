import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUi (){

  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
        <>
    
          <TodoCounter/>
          <TodoSearch/>
         
          <TodoList>

                {loading && (
                <>
                  <TodosLoading/>
                  <TodosLoading/>
                  <TodosLoading/>
                </>)}

                {error && <TodosError/>}

                {(!loading && searchTodos.length == 0) && <EmptyTodos/>}

                {searchTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
          </TodoList>
    
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal>
            <TodoForm/>
          </Modal>
          )}

        </>
  );
}

export {AppUi};