import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import './Todos.css';

export function Todos(props) {
  // console.table(props)
  return (
    <div>
      <span>{props.status}</span>
      {props.state.map((todo, id) =>{
        if(todo.status === props.status){
          return (
            <div key={id} className='todos-container'>
              <Link className='todo' to={`/edit/${todo.id}`}>
                <Todo title={todo.title}/>
              </Link>
            </div>
          )
        } return null;
      })}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, null)(Todos);