    import React, { useState } from 'react'
    import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

    const TodosForm = ({addNewTodo, toggleFilter, mode, active}) => {
        const [title,setTitle] = useState('')
        const [render, setRender] = useState(true)
        if (mode === 'edit' && render){
            setTitle(active.title)
            setRender(false)
        }
        const handleInputChange = (e) => {
            setTitle(e.target.value)
        }
        const handleNewInput = () => {
            if(!title.trim()) return
            addNewTodo(title)
            setTitle('')
            setRender(true)
        }

    return (
        <div className='todos-form'>
            <div className={`todos-form_icon ${mode === 'filter' ? 'active' : ''}`} onClick={toggleFilter}>
                <FeatherIcon icon = "circle"/>
            </div>
            <div className='todos-form_form'>
                <input type='text' placeholder='اضف مهمة جديدة ...' onChange={handleInputChange} value={title}/>
            </div>
            <div className='todos-form-submit' >
                <button className='btn' disabled = {!title.trim()}  onClick={handleNewInput}>{mode === 'edit' ? 'تعديل' : "اضافة"} </button>
            </div>
        </div>
    )
    }

    export default TodosForm