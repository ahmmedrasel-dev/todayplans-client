import axios from 'axios';
import React from 'react';
import TodoList from '../TodoList/TodoList';

const Home = () => {

  const handleSubmit = e => {
    e.preventDefault();
    const todoTask = {
      name: e.target.task.value,
      description: e.target.description.value,
      complete: 'incomplete',
    }
    const url = `http://localhost:5000/add-task`;
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
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <div className="card w-full bg-sky-100 shadow-xl h-screen">
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