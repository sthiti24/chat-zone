import React,{useState} from 'react';
import './App.css';
import io from 'socket.io-client'
import Chat from './Chat'
import Footer from './Footer';

const socket = io.connect("http://localhost:3001")

function App() {

  const [username,setUsername] = useState("")
  const [roomID,setRoomID] = useState(0)
  const [showChat,setShowChat] = useState(true)

  const joinRoom = ()=>{
    if(username!==""){
      socket.emit("join_room",roomID)
      setShowChat(false)
    }
  }

  return (
    <div className="App">
      {showChat?
        (<div className='page1'>
        <h1 className='title'>CHAT ZONE</h1>
        <div className='join'>
        <input className='join--input'
         type="text" placeholder='Enter username' onChange={(event)=>{setUsername(event.target.value)}}/>
       
        <input className='join--input'
         type="number" placeholder='Enter roomID' onChange={(event)=>{setRoomID(event.target.value)}}/>
       
        <button className='join--button' onClick={joinRoom}>JOIN ROOM</button>
        </div>
        </div>)
         :    
        (<Chat socket={socket} userName = {username} roomID={roomID}/>)
      
      }
      <footer style={{marginTop:"30px"}}>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
