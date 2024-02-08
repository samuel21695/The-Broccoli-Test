import './FoodList.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FoodList () {
  return (
    <div className='foodLists'>
      <div className='searchGroup'>
        <Box
        component="form"
        sx={{
          '& .MuiFormControl-root': { marginTop: 5, width: '300px' },
        }}
        noValidate
        autoComplete="off"
        >
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