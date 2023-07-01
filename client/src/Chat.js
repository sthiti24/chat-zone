import React, { useEffect, useState } from 'react'
import './Chat.css'
const Chat = ({socket,userName,roomID}) => {

    const [msg,setMsg] = useState("")
    const [msgList,setMsgList] = useState([])


    const sendMsg= async ()=>{
        if (msg !==""){
            const msgData = {
                room: roomID,
                author: userName,
                message: msg,
                time: new Date(Date.now()).getHours()
                + ":" +  new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message",msgData)
            setMsgList((list)=>[...list,msgData])
        }
    }

    useEffect(()=>{
         socket.on("recive_message",(data)=>{
           console.log(data)
           setMsgList((list)=>[...list,data])
         })
    },[socket])

  return (
    <div className="container" >
        <h1 className='title'>
           CHAT ZONE
        </h1>

       <div className="box" >
          
            {msgList.map((chat)=>{
              return (<div className='message' id={userName===chat.author?"right":"left"}>
                  
                   <div className='message-meta'><span className='author'>{chat.author}</span> 
                   <span className='time'> Today at {chat.time}</span></div>

                   <div className='message-content' >
                    {chat.message}</div>
              </div>)
            })}
          
       </div>

        <div className='input'>
           <input type="text" placeholder='Message' onChange={(event)=>{setMsg(event.target.value)}}/>
           <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat