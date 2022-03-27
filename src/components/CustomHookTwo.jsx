import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function CustomHookTwo() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      complete: false,
      date: new Date().toLocaleDateString(),
    }
    setTasks((prev) => [taskObj, ...prev])
    setTask('')
  }

  return (
    <div>
      <h1>CustomHookTwo LocalStorage</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Label
          </label>
          <input
            className="form-control"
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CustomHookTwo
