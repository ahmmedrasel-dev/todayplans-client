import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/task`;
    const getTask = async () => {
      const { data } = await axios.get(url);
      setTasks(data);
    }
    getTask();
  }, [tasks])
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full">
        <tbody>
          {
            tasks.map((task, index) => <tr key={task._id} style={{ marginBottom: '20px' }}>
              <th>{index + 1}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td className='w-20'><button className="btn bg-green-500 m-1">Complete</button>
                <button className="btn bg-red-500 m-1">Delete</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;