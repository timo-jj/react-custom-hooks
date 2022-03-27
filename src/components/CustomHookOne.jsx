import React from 'react'
import useFetch from './hooks/useFetch'

function CustomHookOne() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
  return (
    !loading && (
      <div>
        <h1>CustomHook One</h1>
        <h3>{data?.title}</h3>
      </div>
    )
  )
}

export default CustomHookOne
