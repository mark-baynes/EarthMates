import * as clientApi from '../apis/joinsApi.ts'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useQuery,
  MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useJoin() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['join'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return clientApi.getJoins(token)
    },
    enabled: !!user,
  })
  return {
    ...query,
    add: useAddJoin(),
  }
}

export function useJoinMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['join'] })
    },
  })
  return mutation
}

export function useAddJoin() {
  return useJoinMutation(clientApi.joinEvent)
}
