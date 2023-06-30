import React, { useEffect, useState } from 'react'

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
    <div style={{display:"flex",flexDirection:"column",
    alignItems:"center",justifyContent:"center"}}>
        <div>
           <h1>Live Chat</h1>
        </div>

       <div style={{border:"2px solid black",height:"350px",width:"400px",overflowY:"auto"}}>
          
            {msgList.map((chat)=>{
              return (<div className='message'>
                   <div className='message-content' id={userName===chat.author?"right":"left"}>
                    {chat.message}</div>
                   <div className='message-meta'>{chat.author} {chat.time}</div>
              </div>)
              // <h5>{chat.message}</h5>
            })}
          
       </div>

        <div>
           <input type="text" placeholder='Message' onChange={(event)=>{setMsg(event.target.value)}}/>
           <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat