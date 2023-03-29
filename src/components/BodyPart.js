import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/my2.png'
import { padding } from '@mui/system'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={
            bodyPart === item ? {
                borderTop: '4px solid blue',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            } : {
                background: 'white',
                borderRadius: '50%',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }
        }
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 820, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon} alt='dumbbell' className='categories' style={{ width: '100px', height: '100px'}} />
        <Typography
            fontSize='24px'
            fontWeight='bold'
            color='red'
            textTransform='capitalize'
        >{item}</Typography>
    </Stack>
  )
}

export default BodyPart