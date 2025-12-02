import React from 'react'

type DisplayProps = {
    data: number
}

export default function Display({data}:DisplayProps) {
  return (
    <div>{data}</div>
  )
}
