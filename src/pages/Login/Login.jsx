import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'

const Login = () => {
  const { loginUser } = useFirebase()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' })

  const navigate = useNavigate()
  const location = useLocation()

  const onSubmit = (data) => {
    loginUser.handleLoginUser(data)
    reset()
  }

  return (
    <div className='w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/4 mx-auto bg-base-100 shadow-xl p-4 rounded-xl mt-40'>
      <h2 className='text-center text-2xl font-bold'>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='email' className='font-medium'>
            Email
          </label>
          <input
            id='email'
            className={`${
              errors.email && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400 focus:bg-blue-100 transition-colors`}
            placeholder='enter email address'
            {...register('email', {
              required: {
                value: true,
                message: 'email is required',
              },
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
        <div className='flex flex-col'>
          <label htmlFor='password' className='font-medium'>
            password
          </label>
          <input
            id='password'
            className={`${
              errors.password && 'focus:outline-red-500 focus:bg-red-100'
            } p-3 bg-gray-100 mt-2 focus:outline-blue-400 focus:bg-blue-100 transition-colors`}
            type='password'
            placeholder='enter password'
            {...register('password', {
              required: {
                value: true,
                message: 'password is required',
              },
            })}
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <div>
          <Link
            to='/account/reset_pass'
            className='block text-center underline text-secondary font-medium'
          >
            forgot password
          </Link>
        </div>
        <button type='submit' className='btn-primary p-3 w-full'>
          login
        </button>
      </form>
      <button className='w-full btn-secondary p-3 mt-5'>
        Sign in with google
      </button>
      <div className='mt-4 text-center'>
        <button
          className='underline font-medium'
          onClick={() =>
            navigate('/register', {
              // replace: true,
              // state: location.state,
            })
          }
        >
          I dont have account
        </button>
      </div>
    </div>
  )
}

export default Login
