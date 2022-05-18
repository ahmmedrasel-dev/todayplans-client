import React from 'react';
import TodoList from '../TodoList/TodoList';

const Home = () => {
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <div className="card w-full bg-sky-100 shadow-xl h-screen">
        <div className="card-body">
          <h2 className="text-center text-2xl">What's the Plan for Today!</h2>
          <div className="card-actions justify-center">
            <form className='w-full flex justify-center'>
              <div class="form-control w-full flex flex-row justify-center">
                <input type="text" placeholder="Task Name" class="input input-bordered w-40" />
                <input type="text" placeholder="Task Description" class="input input-bordered w-96 mx-2" />
                <button class="btn btn-active btn-primary">Add Task</button>
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