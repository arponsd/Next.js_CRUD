import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
import React from 'react'

const Tasks = () => {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Tasks