import React from 'react'

const ListItem = ({className,ItemName}) => {
  return (
    <li className={className}>{ItemName}</li>
  )
}

export default ListItem