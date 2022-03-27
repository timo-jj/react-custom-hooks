import React, { useState, useEffect, useRef, useMemo } from 'react'

function UseMemo() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  function getSqrt(n) {
    for (let i = 0; i <= 10000; i += 1) {
      console.log(i)
    }
    console.log('Expensive func called!')
    return Math.sqrt(n)
  }

  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current += 1
  })

  const onClick = () => {
    setInc((prev) => prev + 1)
  }

  return (
    <div className="m-4">
      <h1>UseMemo</h1>
      <h3>Renders: {renders.current}</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
      <h4 className="my-3">
        Sqrt of {number} is {sqrt}
      </h4>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
    </div>
  )
}

export default UseMemo
