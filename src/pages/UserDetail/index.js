import React,{useState} from 'react'
import {useHistory } from 'react-router'
import Messages from '../Chat/Messages'
import {BsCameraVideoFill,IoCall,RiMessage3Line,AiOutlineClose} from 'react-icons/all'
import img from "../Chat/indir.png"
import useLogin from '../../hooks/useLogin'

function UserDeatil() {
    const {selectedUser} = useLogin()
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
    const goChat = () => {
        setLoading(true)
        history.push({
            pathname : "/chat"
        })
    }
  return (
       <div className="right-side">
        {
        loading === false ? 
        <>
            <div className="header">
                <div className="close"> 
                    <AiOutlineClose onClick={goChat}></AiOutlineClose>
                    
                </div>
            </div>
            <div className="body">      
                <img src={img} className="detail-image"></img>        
                <br></br>        
                {`${selectedUser.first_name} ${selectedUser.last_name}`}
                <br></br>
                <h6>offline</h6>
                <br></br>
           
            </div>
            <div className="contact">
                    <div className="d"><BsCameraVideoFill className="icon"></BsCameraVideoFill>Video</div>       
                    <div className="d"><IoCall className="icon"></IoCall><label>Call</label></div>
                    <div className="d"><RiMessage3Line className="icon"></RiMessage3Line><label>Message</label></div>
            </div>
        </>
        :<Messages></Messages>
        }
    </div>
   
       
  )
}

export default UserDeatil
