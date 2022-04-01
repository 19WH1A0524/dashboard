import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import axios from 'axios';
// import {useState, useEffect} from 'react';
import BasicMsg from './pages/basicMsg';
import Info from './pages/info'
function App() {
    // const [msg, setMsg] = useState("")
    // useEffect(() => {
    //     // console.log("in useEffect")
    //     axios.get('http://localhost:1337/').then(response=>{
    //       if (response.data.success)
    //         setMsg(response.data.msg)
    //       else
    //       alert("Failed to get videos")
    //       })
    // })
    
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<BasicMsg/>}/>
            <Route path = "/info" element = {<Info/>}/>
          </Routes>
        </BrowserRouter>
      </div>        
    )
}

export default App;