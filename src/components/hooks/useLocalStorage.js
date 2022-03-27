import React, { useState } from 'react'

function useLocalStorage(key, initialValue) {
  const getLocalStorageValue = (myKey, myInitialValue) => {
    const itemFromStorage = localStorage.getItem(myKey)
    return JSON.parse(itemFromStorage) || myInitialValue
  }

  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (val) => {
    // Check if func
    const valueToStore = val instanceof Function ? val(localStorageValue) : val
    // Set to val
    setLocalStorageValue(valueToStore)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

export default useLocalStorage
