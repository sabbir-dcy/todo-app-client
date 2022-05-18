import axios from 'axios'
import React, { useState } from 'react'

const SingleTask = ({ task, refetch }) => {
  const [completed, setCompleted] = useState(false)
  const { name, description, _id } = task
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/task/${_id}`).then((res) => {
      console.log(res)
      refetch()
    })
  }
  return (
    <div className='card-wide grid grid-cols-2 items-center'>
      <div>
        <h2 className={`${completed && 'line-through'} title-start`}>{name}</h2>
        <p className={`${completed && 'line-through'}`}>{description}</p>
      </div>
      <div className='justify-self-center space-x-1'>
        <button
          onClick={() => setCompleted(!completed)}
          className='btn-accent justify-self-end'
        >
          complete
        </button>
        <button onClick={handleDelete} className='btn-delete justify-self-end'>
          delete
        </button>
      </div>
    </div>
  )
}

export default SingleTask
