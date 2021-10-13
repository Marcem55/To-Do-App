import React from 'react'
import './App.css';
import { Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';


// En este componente deberia cargar las rutas.
export function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      <Route path='/add' component={AddTodo}/>
      <Route path='/edit/:id' component={TodoDetail}/>
    </div>
  );
}

export default App;