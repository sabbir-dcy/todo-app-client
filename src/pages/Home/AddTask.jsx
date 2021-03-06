import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTask } from '../../hooks/useTask'

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { refetch } = useTask()

  const onSubmit = (data) => {
    axios
      .post(`https://sheltered-springs-35366.herokuapp.com/task`, data)
      .then((res) => {
        console.log(res)
        toast.success('task added')
        refetch()
      })
    console.log(data)
  }
  return (
    <div className='w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 mx-auto bg-base-100 shadow-xl p-4 rounded-xl mt-20'>
      <h2 className='title-center'>Add Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <label htmlFor='name'>Task Name</label>
          <input
            className='input-box'
            placeholder='enter task name'
            name='name'
            type='text'
            {...register('name', { required: 'specify task name' })}
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name'>Description</label>
          <textarea
            placeholder='enter task description'
            rows={3}
            className='input-box'
            name='description'
            type='text'
            {...register('description', {
              required: 'write description of the task',
            })}
          />
          {errors.description && (
            <p className='text-red-500'>{errors.description.message}</p>
          )}
        </div>
        <button type='submit' className='btn-primary mt-5'>
          add task
        </button>
      </form>
    </div>
  )
}

export default AddTask
