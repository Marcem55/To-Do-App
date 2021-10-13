import React from 'react'
import { connect } from 'react-redux';
import { removeTodo, toInProgress, toDone } from '../../actions';
import './TodoDetail.css';
import Swal from 'sweetalert2';

export function TodoDetail(props) {
    var id = props.match.params.id;

    return (
        <div>
            {props.state.map(todo => (
                todo.id === parseInt(id) &&
                <div className='detail-container'>
                    <div className='li-container'>
                        <li><span>Title</span> {todo.title}</li>
                        <li><span>Description</span> {todo.description}</li>
                        <div className='place-date'>
                            <li><span>Place</span> {todo.place}</li>
                            <li><span>Date</span> {todo.date}</li>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-detail' onClick={() => {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Your task has been deleted',
                                        showConfirmButton: false,
                                        timer: 1750
                                    })
                                    props.removeTodo(todo.id);         
                                }
                            });
                        }}>Remove</button>
                        <button className='btn-detail' onClick={() => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Task In Progress',
                                showConfirmButton: false,
                                timer: 1750
                            });
                            props.toInProgress(todo.id);
                        }}>InProgress</button>
                        <button className='btn-detail' onClick={() => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Task Done',
                                showConfirmButton: false,
                                timer: 1750
                            });
                            props.toDone(todo.id);
                        }}>Done</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: id => dispatch(removeTodo(id)),
        toInProgress: id => dispatch(toInProgress(id)),
        toDone: id => dispatch(toDone(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);