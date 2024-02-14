import { useState, useEffect} from 'react';
import fetchFoods from '../../functions/fetchFoods';
import './FoodList.css'

// MUI components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
          {/* Input for searching foods */}
          <input
            type='text'
            placeholder='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} 
          />
          {/* Button for triggering search */}
          <button onClick={handleSearch}>Search</button>
        </div>
        <select className= 'filter' name="foodFilter" id="filter">
          <option value="select"></option>
          <option value="broccoli value">Brocolli score</option>
          <option value="Date">Date</option>
        </select>
      </div>
      <div className='listGroup'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia className='pizza'
            sx={{ height: 140 }}
            title="Pizza"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza 🥦🥦🥦
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default FoodList;