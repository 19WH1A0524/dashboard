// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function BasicMsg() {
    const [msg, setMsg] = useState('')
    useEffect(() => {
        // console.log("in useEffect")
        axios.get('http://localhost:1337/').then(response=>{
          if (response.data.success)
            setMsg(response.data.msg)
          else
          alert("Failed to get videos")
          })
    })
    return (
      <div>
        {msg}
      </div>        
    )
}

export default BasicMsg;