
import { auth } from '../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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


  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (eUser || cError) {
      navigate(from, { replace: true })
    }
  }, [eUser, cError, from, navigate])

  const handleCreateUser = ({ email, password }) => {
    createUserWithEmailAndPassword(email, password)
  }

  const handleLoginUser = ({ email, password }) => {
    signInWithEmailAndPassword(email, password)
  }
  return {
    createUser: { handleCreateUser },
    loginUser: { handleLoginUser }
  }
}