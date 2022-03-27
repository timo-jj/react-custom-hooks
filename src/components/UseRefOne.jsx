import React, { useRef } from 'react'

function useRefExampleOne() {
  const inputRef = useRef()
  const pRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = 'hello'
    inputRef.current.style.backgroundColor = 'red'
    pRef.current.innerText = 'Goodbye'
  }

  return (
    <article className="m-4">
      <h1>UseRef 1</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="form-control mb-2"
          id="name"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => inputRef.current.focus()}
        >
          Click
        </button>
        <p ref={pRef}>hello</p>
      </form>
    </article>
  )
}

export default useRefExampleOne
