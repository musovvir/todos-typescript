import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import {useParams, useHistory} from 'react-router-dom'

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const hisrory = useHistory()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }    
  console.log(params.id)
  return (
        <div>
            <button onClick={() => hisrory.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
  );
};

export default UserItemPage