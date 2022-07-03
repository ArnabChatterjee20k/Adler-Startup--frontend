import React from 'react'

export const Field = (props) => {
  return (
    <div className='flex flex-col justify-start my-2'>
        <input {...props} className={`w-full my-2 outline-none border-2 p-2 rounded-md ${props.validity_check?"border-blue-600":"border-red-600"} `}  placeholder={`Enter your ${props.placeholder}`}/>
        <small className={`${props.validity_check?"text-blue-600":"text-red-600"}`}>{props.validity_check?"Looks good":props.invalid_message}</small>
    </div>
  )
}
