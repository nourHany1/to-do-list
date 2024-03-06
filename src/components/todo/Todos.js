    import React from 'react'
import Todo from './Todo'

    const Todos = (props) => {
    return (
        <div className='todos-list'>
            {props.tod.map((e) => (
                <Todo tod = {e} key = {e.id} 
                toggleTodo = {props.toggleTodo} 
                deletTodo = {props.deletTodo} 
                editTodo = {props.editTodo} 
                mode = {props.mode}/>
            ))}
            {props.tod.length === 0 && (
                <h3 className='no-todos'>لا يوجد مهام حالية ...</h3>
            )}
        </div>
    )
    }

    export default Todos