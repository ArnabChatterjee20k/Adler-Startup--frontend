import React from 'react'

export const Links = ({name,extra_classes,event}) => {
  return (
    <>
        <li className={`list-none ${extra_classes}`} {...event}>{name}</li>
    </>
  )
}
