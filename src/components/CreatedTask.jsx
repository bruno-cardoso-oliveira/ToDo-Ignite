import styles from './CreatedTask.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function CreatedTask( { content, onDeleteTask, setCheckedTask } ) {

    function handleDeleteTask() {
        onDeleteTask(content)
    }

    const [check, setCheck] = useState(false) 

    const checkFunc = () => {
        setCheck(!check)
    }

    const [countTaskChecked, setCountTaskChecked] = useState(0)

    const [taskChecked, setTaskChecked] = useState(false)

    const handleTaskChecked = event => {
       
        if (event.target.checked) {
            setCheckedTask((state) => {
                return state + 1
            })
        } else {
            setCheckedTask((state) => {
                return state - 1
        })

        setTaskChecked(current => !current)
    }}
    
    return (
            <div className={styles.createdTask}>
                <div className={styles.iconAndContent}>
                    <input 
                        type="checkbox" 
                        value={taskChecked} 
                        onChange={handleTaskChecked} 
                        onClick={checkFunc}>    
                    </input>
                    <div className={check ? styles.statusTaskComplete : styles.statusTask}>
                        <p>{content}</p>
                    </div>
                   
                </div>
                <button onClick={handleDeleteTask} title="Deletar comentário">
                    <Trash size={26} />
                </button>
            </div>
    )
}