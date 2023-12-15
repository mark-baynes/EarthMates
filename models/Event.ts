export interface NewEvent {
  name: string
  location: string
  date: string
  description: string
  added_by_user: string
  photo: string
}

export interface Event extends NewEvent {
  id: number
}

export interface PublicDisplayEvent {
  id: number
  eventName: string
  location: string
  date: string
  description: string
  added_by_user: string
  photo: string
}

export interface DisplayEvent extends PublicDisplayEvent {
  email: string
  auth0Id: string
  is_creator: boolean
}

export interface NewJoinEvent {
  event_id: number
  is_creator: boolean
}

export interface NewUser {
  auth0Id: string
  name: string
  email: string
}

//type for add event
export type AddEventParams = {
  newEvent: NewEvent
  token: string
}

//type for edit event
export type EditEventParams = {
  updatedEvent: Event
  token: string
}

//type for delete event
export type DeleteEventParams = {
  numId: number
  token: string
}

// type for join
export type JoinEventParams = {
  newJoin: NewJoinEvent
  token: string
}

export interface FetchStatus {
  events: {
    context: undefined
    data: DisplayEvent[]
    error: null
    failureCount: number
    failureReason: null
    dataUpdatedAt: number
    delete: OperationStatus
    errorUpdateCount: number
    errorUpdatedAt: number
    fetchStatus: 'fetching' | 'error' | 'success'
    isError: boolean
    isFetched: boolean
    isFetchedAfterMount: boolean
    isFetching: boolean
    isInitialLoading: boolean
    isLoading: boolean
    isLoadingError: boolean
    isPaused: boolean
    isPlaceholderData: boolean
    isPreviousData: boolean
    isRefetchError: boolean
    isRefetching: boolean
    isStale: boolean
    isSuccess: boolean
    refetch: () => void
    remove: () => void
    status: 'success'
  }
}

export interface OperationStatus {
  context: undefined
  data: undefined
  error: null
  failureCount: number
  failureReason: null
  fetchStatus: 'fetching' | 'error' | 'success'
  isError: boolean
  isFetched: boolean
  isFetchedAfterMount: boolean
  isFetching: boolean
  isInitialLoading: boolean
  isLoading: boolean
  isLoadingError: boolean
  isPaused: boolean
  isPlaceholderData: boolean
  isPreviousData: boolean
  isRefetchError: boolean
  isRefetching: boolean
  isStale: boolean
  isSuccess: boolean
  refetch: () => void
  remove: () => void
  status: 'success'
}
