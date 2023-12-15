import * as clientApi from '../apis/eventsApi.ts'
import {
  useQuery,
  MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useEvents() {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: clientApi.getEventList,
  })
  return {
    ...query,
    add: useAddEvent(),
    delete: useDeleteEvent(),
    
  }
}


export function useEventsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
  return mutation
}

export function useAddEvent() {
  return useEventsMutation(clientApi.addEvent)
}

export function useDeleteEvent() {
  return useEventsMutation(clientApi.deleteEvent)
}

export function useEvent(id: number) {
  const query = useQuery({
    queryKey: ['event', id],
    queryFn: () => clientApi.getEventDetail(id),
  })
  return {
    ...query,
    edit: useEditEvent(id),
  }
}

export function useEventMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  id: number
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event', id] })
    },
  })
  return mutation
}

export function useEditEvent(id: number) {
  return useEventMutation(clientApi.editEvent, id)
}
