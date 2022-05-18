
import { auth } from '../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useFirebase() {
  const [
    createUserWithEmailAndPassword,
    cUser,
    cLoading,
    cError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    eUser,
    eLoading,
    eError,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (cError || eError) {
      let message = cError?.message || eError?.message
      message = message.split(' ')
      toast.error(message.at(-1).replace(/auth|[)-/(]/g, ' '))
    }
  }, [cError, eError])

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (eUser || cUser || gUser) {
      navigate(from, { replace: true })
      toast.success('logged in')
    }
  }, [eUser, cUser, gUser, from, navigate])

  const handleCreateUser = ({ email, password }) => {
    createUserWithEmailAndPassword(email, password)
  }

  const handleLoginUser = ({ email, password }) => {
    signInWithEmailAndPassword(email, password)
  }

  const handleGoogleSignin = () => {
    signInWithGoogle()
  }
  return {
    createUser: { handleCreateUser },
    loginUser: { handleLoginUser },
    googleUser: { handleGoogleSignin }
  }
}