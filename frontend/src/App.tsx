import type { Task } from './types/Task'

function App() {

  const mockTasks: Task[] = [
    {
      id: 1,
      title: "Learn Vite Setup",
      description: "Set up the project structure",
      completed: true,
      createdAt: new Date()
    },
    {
      id: 2,
      title: "Build task components",
      completed: false,
      createdAt: new Date()
    }
  ]

  return (
    <>
      <h1>Task Manager</h1>
      <p>Total tasks: {mockTasks.length}</p>
      <ul>
        {mockTasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
