import React, { useState } from 'react'
import Todo from './Todo'

function UseRefExampleThree() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div className="m-4">
      <h1>UseRef 3</h1>
      {showTodo && <Todo />}

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default UseRefExampleThree
