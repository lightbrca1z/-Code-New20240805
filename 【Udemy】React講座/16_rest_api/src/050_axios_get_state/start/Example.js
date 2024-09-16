import {useEffect, useState} from "react";
import axios from "axios";

const Example = () => {
  
  const [ users, setUsers ] = useState()

  useEffect(()=>{
    const getUser = async () => {
    const res = axios.get('http://localhost:3003/user')
      console.log(res.data);
    }
    getUser();
    },[])

return (
  <div>
    {users?.map(user => {
      return (
       <div key={user.id}>
        <h3>{user.username}</h3>
        <p>age:{user.age}</p>
        <p>hobby:{user.hobbies.join(',')}</p>
      </div>
      )
    })}
  </div>
)
};
export default Example;
