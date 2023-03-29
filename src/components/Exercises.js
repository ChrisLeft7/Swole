import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart}) => {
    console.log(exercises)

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9
    
    const indexOfLastExercise = currentPage * exercisesPerPage;

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 820, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExerciseData = async () => {
            let exerciseData = [];
            if(bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exerciseData);
        }
        fetchExerciseData();
    }, [bodyPart]);
  return (
    <Box id='exercises'
        sx={{mt: {lg: '110px'}}}
        mt='50px'
        p='20px'
        >
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
            ))}
        </Stack>
        <Stack mt='100px' alignItems='center' className='pag'>
            {exercises.length > 9 && (
                <Pagination
                    color='standard'
                    shape='rounded'
                    count={Math.ceil(exercises.length)}
                    page={currentPage}
                    onChange={paginate}
                    size='large'
                >

                </Pagination>
            )}
        </Stack>
    </Box>
  )
}

export default Exercises