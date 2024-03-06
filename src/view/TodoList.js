import React, { useState } from 'react'
import Todos from "../components/todo/Todos"
import TodosForm from '../components/todo/TodosForm'

    // const initialData = [
    // { id: 1, title: "شراء مستلزمات", done: false },
    // { id: 2, title: "شراء منتجات", done: true },
    // { id: 3, title: "مشاهدة الكورس", done: false },
    // { id: 4, title: "كتابة الكود", done: true },
    // ];
    const initialData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    const TodoList = () => {
        const [todos,setTodos] = useState(initialData)
        const [mode, setMode] = useState('')
        const [active, setActive] = useState(null)
        // const toggleTodo = (id) => {
        //     const newData = todos.map(td => {
        //         if(td.id === id){
        //             td.done = !td.done
        //         }
        //         return td
        //     })
        //     setTodos(newData)
        // }
        const setToLocal = () => {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        const toggleTodo = (id) => {
            const newData = todos.map(td => {
                if(td.id === id){
                    // td.done = !td.done
                    return {...td, done: td.done = !td.done}
                }
                return td
            })
            setTodos(newData)
        }

        const addNewTodo = (title) => {
            if (mode !== 'edit'){
                const newData = {
                    id: new Date().getTime(),
                    title,
                    done: false
                }
                setTodos((data) => {
                    return [newData, ...data]
                })
            } else if (mode === 'edit'){
                const newTodos = todos.map(t => {
                    if (t.id === active.id){
                        t.title = title
                    }
                    return t
                })
                setTodos(newTodos)
                setMode('')
            } 
        }


        const toggleFilter = () => {
            if (mode === 'edit') return
            if (mode === 'filter') {
                setMode('')
            } else {
                setMode('filter')
            }
        }
        let currentTodos = [...todos]
        if (mode === 'filter') {
            currentTodos = todos.filter(e => !e.done)
        }

        const editTodo = (todo) => {
            setMode('edit')
            setActive(todo)
        }
        if (mode === 'edit' && active) {
            currentTodos = [active]
        }




        const deletTodo = (id) => {
            setTodos(data => {
                const newData = data.filter(td => td.id !== id)
                return newData
            })
        }
        


        setToLocal()
        
        return (
        <main>
        <div className="container">
            <div className="todos">
            <TodosForm 
            addNewTodo = {addNewTodo} 
            toggleFilter = {toggleFilter} 
            mode = {mode} 
            active = {active}/>
            <Todos
            tod = {currentTodos}
            toggleTodo = {toggleTodo} 
            deletTodo = {deletTodo} 
            addNewTodo = {addNewTodo} 
            editTodo = {editTodo} 
            mode = {mode}/>
            </div>
        </div>
        </main>
    )
    }

export default TodoList