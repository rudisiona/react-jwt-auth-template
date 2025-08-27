import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { index } from "../../services/userService";

const Dashboard = () => {
  const { user } = useContext(UserContext);
    const [users, setUsers] = useState([])

  useEffect(()=> {
    const fetchUsers = async () => {
        const fetchedData = await index()
        setUsers(fetchedData)
    }
    
    if(user) fetchUsers()
  }, []) // empty array here so this only calls on the components first mount


  return (
    <main>
      <h1>Welcome back, {user.username}</h1>
      <p>This is the dashboard page where you can see a list of all users</p>
      <h2>Users:</h2>
      {!users ? (<p>No users in the database</p>) : (<ul>
        {users.map(u => {
            return <li key={u._id}>{u.username} </li>
        })}
      </ul>)}
    </main>
  );
};

export default Dashboard;