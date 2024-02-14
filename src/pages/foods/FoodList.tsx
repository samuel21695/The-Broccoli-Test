import { useState, useEffect} from 'react';
import fetchFoods from '../../functions/fetchFoods';
import './FoodList.css'

// MUI components
import { Box, TextField } from '@mui/material';
import MediaCard from '../../components/Cards';

interface Food {
  id: number;
  name: string;
  broccoliScore: number;
  image: string;
  description: string;
  calories:number;
  fat:number;
  carbs:number;
}

function FoodList () {
    // State to store the list of foods fetched from the server
    const [foods, setFoods] = useState<Food[]>([]);
    // State to store the search term
    const [searchTerm, setSearchTerm] = useState<string>('');
    // State to store the search result
    const [searchResult, setSearchResult] = useState<Food[]>([]);
  
    useEffect(() => {
      fetchFoods().then((data) => setFoods(data)); // Call the function to fetch the list of foods when the component mpunts
    }, [searchTerm]);

    const handleSearch = async () => {
      try {
        // Fetch foods from the server based on the search term
        const response = await fetch(`http://localhost:3001/foods?search=${searchTerm}`)
        if(!response.ok) {
          throw new Error('Failed to search foods');
        }
        const data: Food[] = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.error('Error searching foods:', error);
      }
    };

    const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        // Trigger search when Enter key is pressed
        handleSearch();
      }
    };
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