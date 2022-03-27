import React, { useState, useEffect, useRef } from 'react'

function useRefExampleTwo() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current += 1
    prevName.current = name
  }, [name])

  return (
    <article className="m-4">
      <h1>UseRef 2</h1>
      <h2>Renders: {renders.current}</h2>
      <h3>Prev name state: {prevName.current}</h3>
      <input
        type="text"
        value={name}
        className="form-control mb-3"
        onChange={(e) => setName(e.target.value)}
      />
    </article>
  )
}

export default useRefExampleTwo
