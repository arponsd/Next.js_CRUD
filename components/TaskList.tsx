import prisma from '@/utils/db'
import Link from 'next/link';
import React from 'react'
import DeleteForm from './DeleteForm';
import { getAllTasks } from '@/utils/actions';


const TaskList = async() => {
  const tasks =await getAllTasks();
  if( tasks.length === 0 ) {
    return (
      <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>
    ) 
  } else {
    return (
      <div>
        <div className="">
          {tasks.map((task: any) => {
            return (
              <ul>
                <li key={task.id} className='flex justify-between items-center px-6 py-4 mb-4
                border border-base-300 rounded-lg shadow-lg'>
                  <h2>{task.content}</h2>
                  <div className="flex space-x-4">
                  <Link href={`/tasks/${task.id}`} 
                  className='btn btn-accent btn-xs'
                  >Edit</Link>
                  <DeleteForm id = {task.id} />
                  </div>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TaskList