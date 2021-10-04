import React, {useContext,useState} from 'react'
import "../../App.css"
import { useHistory} from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import data from "../../mock-users.json"
import Messages from './Messages'
import img from "../Chat/indir.png"

import { GrLogout} from 'react-icons/gr';

 function Chat(){
  let user = {};

  const {setSelectedUser} = useContext(UserContext);
  //const [loading, setLoading] = useState(false);
  const [loadUser,setLoadUser] = useState(data.users);
  
  let users = data["users"];
  let history = useHistory();
  
 const showMessages = (e) => {
    let id = e.currentTarget.dataset.id;
    user = loadUser[id];
    
    
    setSelectedUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username : user.username,
      messages : user.messages,
      image : img,
    });
    
    //setLoading(true);  
  };

  const searchUser = (e) => {
    data.first_name = e.target.value;
    users.filter((item) => {
      if((e.target.value) === item.first_name.toLocaleLowerCase()){
        setLoadUser([item]);      
      }if(e.target.value === ""){
        setLoadUser(users);
      }
    });
  };

  const logOut = () => {
    user = null;
    setSelectedUser({});
    localStorage.removeItem("username");
    history.push({pathname : `/`});
  };
  const name = localStorage.getItem("username");

  if(name === "") history.push({pathname : `/`});

  return (
      <>
        <div className="container">
        <div className="left-side">
          <div className="left-side-item search-user"><input className="search" onChange={searchUser}></input></div>
                   
          <div className="left-side-item user-list">
            <ul >
                { 
                  loadUser.map((data,key) => {
                    return <div className="left-user"key={key}>
                      <img src={img} className="left-image"></img>
                      <span  data-id={key} key={key} onClick={showMessages}>{`${data.first_name} ${data.last_name}`}</span>
                      <br></br>
                      <label className="last-message">Last Message</label>
                    </div>
                  })
                }          
            </ul>
          </div>
          
          <div className="left-side-item settings">
            <GrLogout className="logout-button" onClick={logOut}></GrLogout>            
          </div>
        </div>         
        <div className="right-side">          
          
          <Messages></Messages>
          
        </div>            
    </div>
      </>
  )
}

export default Chat
