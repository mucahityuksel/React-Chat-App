import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function useLogin() {

    const {user,users,selectedUser} = useContext(UserContext)

  return {user,users,selectedUser};
    
  
}


