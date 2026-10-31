import React from 'react'
import hero from "../assets/hero.png"
import { LayoutGrid } from 'lucide-react'
import { Button } from './ui/button'
const Card = (props) => {
  return (
    <>
    <h1 className='bg-red-800 text-blue-300'>Title: {props.title}</h1>
    <p>Price {props.price}</p>
    <Button>Button</Button>
    </>
  )
}

export default Card