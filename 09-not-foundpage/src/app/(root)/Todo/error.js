'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error( "Error =>",error )
  }, [error])
 
  return (
    <div className=' w-full h-screen text-center  py-48 '>
      <h2>{error.message}</h2>
      <br />
      <button
      className='py-1 w-24 bg-blue-900 rounded'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}