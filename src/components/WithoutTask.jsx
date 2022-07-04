import styles from './WithoutTask.module.css'
import { ClipboardText } from 'phosphor-react'

export function WithoutTask() {
    return (
        <div>
              <form action="" className={styles.withoutTaskList}>
                   <div><ClipboardText size={60} /></div> 
                    <article>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </article>
                </form>
        </div>
    )
}