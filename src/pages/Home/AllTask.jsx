import React from 'react'
import { useTask } from '../../hooks/useTask'
import SingleTask from './SingleTask'

const AllTask = () => {
  const { tasks, refetch } = useTask()
  return (
    <div className='w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 mx-auto bg-base-100 shadow-xl p-4 rounded-xl mt-20'>
      <h2 className='title-center'>List of Tasks</h2>
      <div className=''>
        {tasks?.map((task) => (
          <SingleTask key={task._id} task={task} refetch={refetch}></SingleTask>
        ))}
      </div>
    </div>
  )
}

export default AllTask
