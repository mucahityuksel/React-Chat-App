import React from "react"

export const UserContext = React.createContext({
    users :[{
        first_name: "",
        last_name: "",
        username : "",
        id : 1,
    }],

    user : null,
 
    selectedUser : {
        id: "",
        first_name: "",
        last_name: "",
        username: "",
        image : "",
        messages :[{
            id: "",
            text: "",
            sender :""
        }]  
    },   
})