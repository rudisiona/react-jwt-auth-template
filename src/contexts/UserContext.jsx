// Allows us to create a global state for out app
import { createContext, useState } from 'react'

// this variable will store the state and provide to over function by importing and passing it to the useContext hook
const UserContext = createContext()

const getUserFromToken = () => {
  // get back token from local storage
  const token = localStorage.getItem("token")

  if(!token) return null

  return JSON.parse(atob(token.split('.')[1])).payload
}

// Allows any children components to access that global State
const UserProvider = ({children}) => {
    // We will eventually define our userstate here
    // that will be pass down to App and all app children
    const [user, setUser] = useState(getUserFromToken())

    // any child component of this useContext provider
    // can access user and setUser
    const value = {user, setUser}

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}
// When components need to use the value of the user context, they will need
// access to the UserContext object to know which context to access.
// Therefore, we export it here
export { UserProvider, UserContext }