import './FoodList.css'

// MUI components
import { Box, TextField } from '@mui/material';
import MediaCard from '../../components/Cards';

function FoodList () {
  return (
    <div className='foodLists'>
      <div className='foodSearch'>
        <div className='searchGroup'>
          <Box
          component='form'
          sx={{
            '& .MuiFormControl-root': { width: '300px' },
          }}
          noValidate
          autoComplete='off'
          >
            <TextField id='outlined-basic' label='search' color="success" variant="outlined"></TextField>
          </Box>
          <button className='searchButton'>test</button>
        </div>
        <select className= 'filter' name="foodFilter" id="filter">
          <option value="select"></option>
          <option value="broccoli value">Brocolli score</option>
          <option value="Date">Date</option>
        </select>
      </div>
      <div className='listGroup'>
        <MediaCard></MediaCard>
      </div>
    </div>
  )
}

export default FoodList;