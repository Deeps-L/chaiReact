import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userId} = useParams()

  return (
    <div className='m-5 text-center bg-slate-600 text-white text-2xl rounded p-5'>User : {userId}</div>
  )
}

export default User