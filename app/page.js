"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-red-500">
      
      <h1 className="text-4xl font-extrabold mb-2 text-black text-center">To-do List</h1>
      
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"> {/* Container for the app */}
        <div className="w-full flex mb-4">
          <input
            type="text"
            placeholder="Make some and do some"
            value={task}
            className="border border-gray-300 rounded-l-md p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center ml-2 hover:bg-purple-700 transition duration-200" 
          >
            ADD
          </button>
        </div>

        <ul className="w-full space-y-3">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-sm border border-gray-300 transition duration-200 hover:shadow-md">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTaskCompletion(t.id)}
                  className="mr-3 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span
                  className={`text-lg ${
                    t.completed ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {t.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-600 hover:text-red-800 transition duration-200"
              >
                ✖️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}