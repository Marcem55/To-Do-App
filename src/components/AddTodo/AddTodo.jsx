import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';
import Swal from 'sweetalert2';


export function AddTodo({addTodo}) {
  const [todo, setTodo] = React.useState({
    title: '',
    description: '',
    place: '',
    date: '',
  });
  const [error, setError] = React.useState('');
  
  function handleOnChange(e) {
    const { value, name } = e.target;
    if(name === 'title') {
      value.length < 4 ? setError('The title must be longer than 3 characters') : setError('');
    } else if(name === 'description') {
      value.length < 20 ? setError('The description must be more than 20 characters') : setError('');
    } else if(name === 'place') {
      value.length < 4 ? setError('The place must be longer than 3 characters') : setError('');
    } else if(name === 'date') {
      value.length < 1 ? setError('This field is required') : setError('');
    }
      setTodo({
        ...todo,
        [name]: value,
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(todo.title === '' || todo.description === '' || todo.place === '' || todo.date === '') {
      setError('Please complete all fields');
      return;
    } else if(todo.title.length < 4 || todo.description.length < 20 || todo.place.length < 4){
      setError('Please check the fields');
      return;
    } else {
      setError('');
    }
    addTodo(todo);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Task added succesfuly',
      showConfirmButton: false,
      timer: 1750
    })
    e.target.reset();
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
        type='text'
        onChange={handleOnChange}
        name='title'
        placeholder= 'To Do Title'>
        </input>

        <label>Description</label>
        <textarea 
        className='description'
        onChange={handleOnChange}
        name='description'
        placeholder='Description'
        >
        </textarea>

        <div className='place-date'>
          <div className='place'>
            <label>Place</label>
            <input 
            type='text'
            onChange={handleOnChange}
            name='place'
            placeholder='Place'>
            </input>
          </div>
          <div className='date'>
            <label>Date</label>
            <input 
            type='date'
            onChange={handleOnChange}
            name='date'>
            </input>

          </div>
        </div>
          {!error ? null : <span className='danger'>{error}</span>}
        {!error ? <button
        type='submit'>
        Add
        </button>
        : <button
        type='submit'
        className='btnDisabled'
        disabled>
        Add
        </button>}
        
        

      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);