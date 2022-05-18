import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const user = true
  const loading = false
  const location = useLocation()
  if (loading) return
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}
