import { useQuery } from "react-query"

export const useTask = () => {
  const {
    isLoading,
    error,
    data: tasks,
    refetch,
  } = useQuery('repoData', () =>
    fetch('https://sheltered-springs-35366.herokuapp.com/task').then((res) => res.json())
  )
  if (isLoading) return 'Loading...'

  return { tasks, refetch }
}
