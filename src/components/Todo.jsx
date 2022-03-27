import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    setTimeout(() => {
      if (isMounted.current) {
        setTodo(response.data)
        setLoading(false)
      }
    }, 3000)

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return (
    <div>
      <h2>Todo</h2>
      {loading ? <h3>...Loading..</h3> : <p>{todo.title}</p>}
    </div>
  )
}

export default Todo
