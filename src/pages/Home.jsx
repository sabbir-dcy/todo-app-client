import React from 'react'
import AddTask from './AddTask'
import AllTask from './AllTask'

const Home = () => {
  return (
    <div className='container '>
      <h2>hello from home</h2>
      <AddTask></AddTask>
      <AllTask></AllTask>
    </div>
  )
}

export default Home
