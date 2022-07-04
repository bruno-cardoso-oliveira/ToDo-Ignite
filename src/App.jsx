import { Task } from './components/Task'


import toDoLogo from './assets/Logo.svg'
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={toDoLogo} alt="Logotipo ToDo" />
      </header>
      <Task />

   
      
    </div>
  )
}

