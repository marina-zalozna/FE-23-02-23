import { useState } from "react";
import User from "../User";
import UserAdd from "../UserAdd";

function App() {
  const defaultUsers = [
    { id: 1, title: "Svetlana", gender: "women" },
    { id: 2, title: "Vladimir", gender: "man" },
    { id: 3, title: "Alexandr", gender: "man" },
    { id: 4, title: "Tatyana", gender: "women" },
  ];

  const [users, setUsers] = useState(defaultUsers);

  const createUser = (title, gender) => {
    const newUser = {
      id: Date.now(),
      title,
      gender
    }
    const newArr = [...users, newUser];
    setUsers(newArr)
  }
  return (
    <div>
      <UserAdd createUser ={createUser }/>
      <div>
        {
        users.map((user) => 
        <User 
        key={user.id} 
        {...user} />
      )}
      </div>
      
    </div>
  );
}

export default App;
