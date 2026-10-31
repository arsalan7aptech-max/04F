import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <><h1>Contact</h1>
    <Link to={"/"}>
    <Button>Home</Button>
    </Link>
  
    </>
  )
}

export default Contact