export function logError(err: Error) {
  console.log(err)
  if (err.message === 'No Valid Id') {
    throw new Error('No event')
  } else {
    console.error('Error at the API', err.message)
    throw err
  }
}
