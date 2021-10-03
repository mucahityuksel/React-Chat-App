import React, {useState} from 'react'
import { useHistory} from "react-router-dom";
import Button from "../../components/Button"
import UserDeatil from '../UserDetail';
import useLogin from '../../hooks/useLogin';
import {BiDotsHorizontalRounded} from "react-icons/all"
import img from "../Chat/indir.png"

function Messages() {

    

    
    const {selectedUser} = useLogin();
    const [message1, setMessage1] = useState([{
        id:"",
        sender:"1",
        text:""
    }])
  
    let history = useHistory()
    const [click,setClick] = useState(false)

    const userInfo = () => {
        setClick(true)
        history.push({pathname : `chat/${selectedUser.id}`})
    }

    
    const sendMessage = (e) => {      
        setMessage1({
            id : "1",
            text : e.target.value,
            sender : "1"
        })  
        selectedUser.messages = [...selectedUser.messages,message1]
        
    }


    const getMessage = (e) => {
        e.preventDefault();  
        setMessage1({
            id : "1",
            text : e.target.value,
            sender : "1"
        })
        
    }

    
  return (
    <div className="right-side">
        {click === false ? <div className="right-side " >

        <div  className="right-side-item header">
            <img src={img} className="left-image"></img>
            <label>{`${selectedUser.first_name } ${selectedUser.last_name }`}</label>
            <BiDotsHorizontalRounded className="info-button" onClick={userInfo}></BiDotsHorizontalRounded>      
        </div>
                <div className="right-side message-list">
                    <div>
                        {  
                            selectedUser.messages.map((message,key) =>{
                                if(message.sender === selectedUser.id){
                                    return <div className = "message-l" key={key}>{message.text}</div>
                                }else{                                   
                                    return <div className = "message-r" key={key}>{message.text}</div>
                                }
                                
                            })
                            
                        }
                    </div>
                </div>              
                <div className ="right-side-item message-form">
                    <input className="message-input" onChange = {getMessage}></input>
                    <Button type="send" onclick={sendMessage}></Button>
                </div> 
        </div>:
        <UserDeatil></UserDeatil>
        }

    </div>
  )
}

export default Messages
