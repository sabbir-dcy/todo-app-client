import React from 'react'
import Navbar from '../../components/Navbar'
import AddTask from './AddTask'
import AllTask from './AllTask'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='container mx-auto'>
        <AddTask></AddTask>
        <AllTask></AllTask>
      </div>
    </>
  )
}

export default Home
