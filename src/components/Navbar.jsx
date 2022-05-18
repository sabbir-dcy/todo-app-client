import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='bg-blue-500'>
      <div className='container mx-auto h-20  flex items-center justify-between'>
        <h2 className='title-center text-white '>Todo App</h2>
        {!user ? (
          <Link to='/login' className='text-white text-xl'>
            Login
          </Link>
        ) : (
          <button
            className='bg-blue-700 px-3 py-2 rounded-lg text-white text-xl font-medium hover:bg-blue-800'
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
