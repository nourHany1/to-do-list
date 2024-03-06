    import React from 'react'
    import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

    const Todo = ({tod , toggleTodo , deletTodo, editTodo, mode}) => {
    return (
        <div className ={`todos-todo ${tod.done ? 'done' : ''}`} >
            <div className='todos-todo_icon' onClick={() => toggleTodo(tod.id)}>
            <FeatherIcon icon={tod.done ? 'check-circle' : 'circle'}  />
            </div>
            <div className='todos-todo_text'>{tod.title}</div>
            {mode !== 'edit' && (<div className='todos-todo_cta'>
            <div className='todos-todo_cta-edit' onClick={() => editTodo(tod)}>
                <FeatherIcon icon="edit" size={20} />
            </div>
            <div className='todos-todo_cta-delete' onClick={() => deletTodo(tod.id)}>
            <FeatherIcon icon="trash-2" size={20} />
            </div>
            </div>)}
        </div>
    )
    }
    export default Todo