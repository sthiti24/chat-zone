import React from 'react'
import githubLogo from "./images/github-logo.png"
import linkedinLogo from "./images/linkedin.png"
import emailLogo from "./images/email.png"

const Footer = () => {
  return (
    <div className='footer' 
    style={{position:"relative",display:"flex",flexDirection:"column",
    backgroundColor:"black",alignItems:"center",justifyContent:"center",
    border:"2px solid black", color:"white"}}>

        <h1 style={{marginBottom:"30px"}}>connect with me!</h1>

        <div className='links' style={{display:"flex",
         flexDirection:"row",alignItems:"center",
         position:"relative",width:"80%",justifyContent:"space-evenly",
         marginBottom:"10px"}} >

            <a href="https://github.com/sthiti24" rel="noreferrer" target='_blank'><img src={githubLogo} alt=""
             style={{height:"50px",backgroundColor:"white",boxShadow:"0px 0px 20px grey",
             borderRadius:"50%",border:"2px solid white"}}/></a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sthitipragyanpanda24@gmail.com"
            rel="noreferrer" target='_blank'><img src={emailLogo} alt=""
            style={{height:"50px",backgroundColor:"white",boxShadow:"0px 0px 20px grey",
            borderRadius:"50%",border:"2px solid white"}}/></a>

            <a href="https://www.linkedin.com/in/sthiti-pragyan-panda-67a349222/"
            rel="noreferrer" target='_blank'><img src={linkedinLogo} alt=""
            style={{height:"50px",backgroundColor:"white",boxShadow:"0px 0px 20px grey",
            borderRadius:"50%",border:"2px solid white"}}/></a>
            
        </div>
       <p> © sthiti pragyan 2023</p>
    </div>
  )
}

export default Footer;