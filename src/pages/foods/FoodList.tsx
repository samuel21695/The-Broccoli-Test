import './FoodList.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FoodList () {
  return (
    <div className='foodLists'>
      <div className='searchGroup'>
        <Box>
          <TextField id="outlined-basic" label="search" color="success" variant="outlined"></TextField>
        </Box>
        {/* <label htmlFor="search">
          <input type="text" id='search' />
        </label> */}
      </div>
      <div className='listGroup'>

      </div>
    </div>
  )
}

export default FoodList;