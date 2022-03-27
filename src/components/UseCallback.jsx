import React, { useState, useCallback } from 'react'

function UseCallback() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prev) => ['hello', ...prev])
  }, [setTasks])

  return (
    <div className="m-4">
      <h1>UseCallback</h1>
      <Button addTask={addTask} />
      {tasks.map((item, i) => (
        <h6 key={i}>{item}</h6>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button Rerender')
  return (
    <button className="btn btn-primary" type="button" onClick={addTask}>
      Add Task
    </button>
  )
})

export default UseCallback
