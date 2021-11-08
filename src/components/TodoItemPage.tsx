import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import {useParams} from 'react-router-dom'

interface TodoItemPageParams {
    id: string;
}

const TodoItemPage: FC = () => {

  const [todo, setTodo] = useState<IUser | null>(null)
  const params = useParams<TodoItemPageParams>()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/todos/' + params.id)
      setTodo(response.data)
    } catch (e) {
      alert(e)
    }
  }    
  return (
        <div>
          {todo?.address}
        </div>
  );
};

export default TodoItemPage