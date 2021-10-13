import React from 'react';
import Todos from '../Todos/Todos';
import './Home.css';

export function Home() {
  return (
    <div className='home-container'>
      <div className='status-containers'>
      <Todos status='To Do'/>
      </div>
      <div className='status-containers'>
      <Todos status='In Progress'/>
      </div>
      <div className='status-containers'>
      <Todos status='Done'/>
      </div>
    </div>
  )
};

export default Home;