import {useState} from "react";

export default function useLocalStorage(key){


  const [value, setValue] = useState(()=>{
    const storedValue = localStorage.getItem(key)
    return storedValue? JSON.parse(storedValue) : null
  })


  const setStoredValue = (newValue)=>{
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }


  return {value, setStoredValue}

}