import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../../hooks/useTask'


const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { refetch } = useTask()

  const onSubmit = (data) => {
    axios.post(`http://localhost:5000/task`, data).then((res) => {
      console.log(res)
      refetch()
    })
    console.log(data)
  }
  return (
    <div className='w-1/4 mx-auto '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <label htmlFor='name'>Task Name</label>
          <input
            className='input-box'
            name='name'
            type='text'
            {...register('name', { required: 'specify task name' })}
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name'>Description</label>
          <input
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
