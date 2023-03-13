import React from 'react'

interface Iprops{
    title:string;
    description?:string;
}
export default function TestComp({title}:Iprops) {
  return (
    <div>TestComp {title}</div>
  )
}
