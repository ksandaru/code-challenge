import React, { useState, useEffect } from "react";
import axios from "axios";

const getUsersUrl = process.env.API_URL + "/users";

const UserList = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("Guest");

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:5001/users");
      setData(res.data);
      console.log(res.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <div>
        <h3>Welcome! {option}</h3>
        <div>
          <select
            onChange={(e) => setOption(e.target.value)}
            defaultValue={option}
            onClick={()=> console.log(option)}
          >
            {data.map((user) => (
              <option key={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default UserList;
