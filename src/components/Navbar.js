import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <Stack
        direction='row'
        justifyContent='space-around'
        sx={{ gap: {sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}}
        px='20px'
    >
        
        <Stack
            direction='row'
            gap='40px'
            fontSize='24px'
            alignItems='flex-end'
        >
           <Link to='/' className='swole' style={{textDecoration: 'none'}}>Swole</Link> 
           
        </Stack>
    </Stack>
  )
}

export default Navbar