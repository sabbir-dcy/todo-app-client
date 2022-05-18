import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { useFirebase } from '../../hooks/useFirebase'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })

  const { createUser } = useFirebase(auth)

  const location = useLocation()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('password does not match')
      return
    }
    createUser.handleCreateUser(data)
    reset()
  }

  return (
    <div className='w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/4 mx-auto bg-base-100 shadow-xl p-4 rounded-xl mt-40'>
      <h2 className='text-center text-2xl font-bold'>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {
          //! name ------------------------------
        }
        <div className='flex flex-col'>
          <label htmlFor='name' className='font-medium'>
            Name
          </label>
          <input
            id='name'
            className={`${
              errors.name && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400  focus:bg-blue-100 transition-colors`}
            placeholder='enter full name'
            {...register('name', {
              required: 'name is required',
            })}
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        {
          //! email ------------------------------
        }
        <div className='flex flex-col'>
          <label htmlFor='email' className='font-medium'>
            Email
          </label>
          <input
            id='email'
            className={`${
              errors.email && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400  focus:bg-blue-100 transition-colors`}
            placeholder='enter email address'
            {...register('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email',
              },
            })}
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        {
          //! password ------------------------------
        }
        <div className='flex flex-col'>
          <label htmlFor='password' className='font-medium'>
            password
          </label>
          <input
            id='password'
            className={`${
              errors.password && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400  focus:bg-blue-100 transition-colors`}
            type='password'
            placeholder='enter password'
            {...register('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'too short',
              },
            })}
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
        {
          //! confirm password ------------------------------
        }
        <div className='flex flex-col'>
          <label htmlFor='password' className='font-medium'>
            confirm password
          </label>
          <input
            id='confirmPassword'
            className={`${
              errors.password && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400  focus:bg-blue-100 transition-colors`}
            type='password'
            placeholder='re enter password'
            {...register('confirmPassword', {
              required: 'password is required',
            })}
          />
          {errors.confirmPassword && (
            <p className='text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type='submit' className={`btn btn-primary p-3 w-full`}>
          register
        </button>
      </form>
      <div className='mt-4 text-center'>
        <button
          onClick={() =>
            navigate('/login', {
              // replace: true,
              // state: location.state,
            })
          }
          className='underline font-medium'
        >
          I have an account
        </button>
      </div>
    </div>
  )
}

export default Register
