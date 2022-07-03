import React from 'react'
import { Link } from 'react-scroll'
// for the working we have to provide id to the section or div inside the components
export const Links = ({name,extra_classes,event,active_class,scroll_to,link}) => {
  return (
    <>
        <li className={`list-none ${extra_classes}`} {...event}>
          {link?<Link  activeClass={active_class} to={scroll_to} spy smooth offset={-50}>{name}</Link>:name}
        </li>
    </>
  )
}
