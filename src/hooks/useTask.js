import { useQuery } from "react-query"

export const useTask = () => {
  const {
    isLoading,
    error,
    data: tasks,
    refetch,
  } = useQuery('repoData', () =>
    fetch('http://localhost:5000/task').then((res) => res.json())
  )
  if (isLoading) return 'Loading...'

  return { tasks, refetch }
}
