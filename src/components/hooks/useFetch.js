import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${url}`).catch((err) => {
        setError(err.toJSON().message)
      })

      setData(response.data)
      setLoading(false)
    }

    getData()
  }, [])

  return {
    loading,
    data,
    error,
  }
}

export default useFetch
