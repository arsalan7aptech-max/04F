import React from 'react'
import Card from '../components/Card'
import { SaleCards } from '../components/SaleCards'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <h1>home</h1>
    <p>1531321</p>
    <Card title={"fridge"} price={"10000"}/>
    <Card title={"mobile"} price={"500"}/>
    <Card/>
    <Card/>
    <Card/> */}
    <h1>Home</h1>
    <Link to={'/contact'}>
    <Button>Contact</Button>
    </Link>
    <Link to={'/dashboard'}>
    <Button>Dashboard</Button>
    </Link>
   
    <SaleCards/>
    
    </>
    
  )
}

export default Home