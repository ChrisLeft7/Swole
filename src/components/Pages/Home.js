import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../SearchExercises'
import Exercises from '../Exercises'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    let [exercises, setExercises] = useState([]);

    console.log(bodyPart)

  return (
    <Box>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home