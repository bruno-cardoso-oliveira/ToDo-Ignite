import styles from './Task.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { CreatedTask } from './CreatedTask'
import { WithoutTask } from './WithoutTask'


export function Task( {countTaskChecked} ) {

    const [task, setTask] = useState([])

    const [newTask, setNewTask] = useState('')

    const [checkedTask, setCheckedTask] = useState(0)

    function handleCreateTask() {
        setNewTask(event.target.value)  
    }

    function handleCreateNewTask() {
        event.preventDefault();
        setTask([...task, newTask]);
        setNewTask('');
    }
   
    function deleteTask(taskToDelete) {
        const taskWithoutDeletedOne = task.filter(task => {
            return task != taskToDelete
        })
        setTask(taskWithoutDeletedOne)
    }

    const taskCount = task.length

    const withoutTask = taskCount == 0

    return (
        <div className={styles.task}>
            <form onSubmit={handleCreateNewTask}>
                <div className={styles.newTask}>
                    <textarea 
                        value={newTask}
                        onChange={handleCreateTask} 
                        placeholder="Adicione uma nova tarefa"
                        required
                    />
                    <button type="submit">
                        Criar <PlusCircle size={16} />
                    </button>
                </div>
            </form>
            <div className={styles.listTask}>
                <div>
                    <div className={styles.taskStatus}>
                        <h5>Tarefas criadas<span>{taskCount}</span></h5>
                        <h5>Concluídas<span>{checkedTask} de {taskCount}</span></h5>
                    </div>
                </div>
            </div>
            <div className={styles.taskList}> 
                {withoutTask 
                    ? <WithoutTask /> 
                    : task.map(task => {
                        return (
                            <CreatedTask key={task} content={task} onDeleteTask={deleteTask} setCheckedTask={setCheckedTask} />
                        )
                    })}
            </div>
        </div>
    )
}
