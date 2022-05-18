import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SingleTask = ({ task, refetch }) => {
  const [pending, setPompleted] = useState(false)
  const { name, description, _id } = task
  const handleDelete = () => {
    axios
      .delete(`https://sheltered-springs-35366.herokuapp.com/task/${_id}`)
      .then((res) => {
        console.log(res)
        toast.success('task removed')
        refetch()
      })
  }

  const handleComplete = () => {
    setPompleted(!pending)
    if (!pending) toast.success('task compelted')
  }
  return (
    <div className='card-wide grid grid-cols-2 items-center'>
      <div>
        <h2 className={`${pending && 'line-through'} title-start`}>{name}</h2>
        <p className={`${pending && 'line-through'}`}>{description}</p>
      </div>
      <div className='justify-self-end space-x-1'>
        <button onClick={handleComplete} className='btn-accent'>
          complete
        </button>
        <button onClick={handleDelete} className='btn-delete'>
          delete
        </button>
      </div>
    </div>
  )
}

export default SingleTask
