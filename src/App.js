import { useState } from "react";
import { UserContext } from "./context/UserContext";
import Routes from "./Routes";

function App() {

  const [selectedUser,setSelectedUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        username: "",
        messages :[{
            id: "",
            text: "",
            sender :""
        }]
      })

  return (
    <div className="App">
      <UserContext.Provider value={{selectedUser,setSelectedUser}}>
        <Routes></Routes>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
