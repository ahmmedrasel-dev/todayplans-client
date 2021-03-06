import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import TodoList from '../TodoList/TodoList';

const Home = () => {
  const [user] = useAuthState(auth)
  const handleSubmit = e => {
    e.preventDefault();
    const todoTask = {
      name: e.target.task.value,
      description: e.target.description.value,
      complete: 'incomplete',
    }

    const url = `https://quiet-hollows-35043.herokuapp.com/add-task`;
    try {
      const postTask = async () => {
        const response = await axios.post(url, todoTask);
        e.target.reset()
      }
      postTask();

    }
    catch (error) {
      console.log(error.message)
    }
  }

  const signout = () => {
    signOut(auth)
  }
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <div className="card w-full bg-sky-100 shadow-xl h-screen">
        <div className='ml-auto'>
          {user ? <button onClick={signout} className="btn btn-ghost">Sign out</button> : <Link to='/login'>Login</Link>}
        </div>
        <div className="card-body">
          <h2 className="text-center text-2xl">What's the Plan for Today!</h2>
          <div className="card-actions justify-center">
            <form onSubmit={handleSubmit} className='w-full flex justify-center'>
              <div className="form-control w-full flex flex-row justify-center">
                <input type="text" name="task" placeholder="Task Name" className="input input-bordered w-40" />
                <input type="text" name="description" placeholder="Task Description" className="input input-bordered w-96 mx-2" />
                <button className="btn btn-active btn-primary">Add Task</button>
              </div>
            </form>
          </div>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
};

export default Home;