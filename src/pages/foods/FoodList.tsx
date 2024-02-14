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
    <div className='foods'>
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
        <select title='food' className= 'filter' name="foodFilter" id="filter">
          <option value="select"></option>
          <option value="broccoli value">Brocolli score</option>
          <option value="Date">Date</option>
        </select>
      </div>
      <div className='listGroup'>
        {/* Conditinally render the food list based on whether there are search results */}
        {(searchResult.length > 0 ? searchResult : foods).map((food) => (
          <li key={food.id} className='foodList'>
            <img src={food.image} alt={food.name} className='foodImg'/>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Broccoli Score: {food.broccoliScore}</p>
            <p>CALORIES: {food.calories}</p>
            <p>FAT: {food.fat}G</p>
            <p>CARBS: {food.carbs}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default FoodList;