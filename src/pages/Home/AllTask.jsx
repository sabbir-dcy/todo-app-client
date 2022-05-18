import React from 'react'
import { useTask } from '../../hooks/useTask'
import SingleTask from './SingleTask'

const AllTask = () => {
  const { tasks, refetch } = useTask()
  return (
    <div className='w-2/5 mx-auto mt-20'>
      <h2 className='title-center'>showing all the task</h2>
      <div className=''>
        {tasks?.map((task) => (
          <SingleTask key={task._id} task={task} refetch={refetch}></SingleTask>
        ))}
      </div>
    </div>
  )
}

export default AllTask
