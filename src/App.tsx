import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
       <Route path="/users" exact component={UsersPage} />
       <Route path="/todos" exact component={TodosPage} />
       <Route path="/users/:id" component={UserItemPage} />
       <Route path="/todos/:id" component={TodoItemPage} />
      </div>
    </BrowserRouter>
  );
};

export default App