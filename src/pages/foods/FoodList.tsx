import React, { useState, useEffect} from 'react';
import fetchFoods from '../../functions/fetchFoods';
import './FoodList.css'

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
  // State to store the sort options
  const [sortOption, setSortOption] = useState<string>('');
  
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

  // Function to handle sorting based on selected option
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    if (selectedOption === 'broccoliScore') {
      sortBybroccoliScore();
    } else if (selectedOption === 'name') {
      sortByName();
    }
  };

  // Funtion to sort foods by Broccoli Score
  const sortBybroccoliScore = () => {
    
    const sortedFoods = [...foods].sort((a, b) => a.broccoliScore - b.broccoliScore);
    setSearchResult(sortedFoods);
  }

  // Function to sort foods by name
  const sortByName = () => {
    const sortedFoods = [...foods].sort((a, b) => a.name.localeCompare(b.name));
    setSearchResult(sortedFoods);
  }

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
            className='searchInput'
          />
          {/* Button for triggering search */}
          <button onClick={handleSearch} className='searchBtn'>Search</button>
        </div>
        {/* Sorting select */}
        <div className='sortSelect'>
          <select value={sortOption} onChange={handleSortChange} title='food' className= 'filter'>
            <option value=''>Sort by...</option>
            <option value="broccoliScore">Brocolli score</option>
            <option value="name">A to Z</option>
          </select>
        </div>
      </div>
      <div className='listGroup'>
        {/* Conditinally render the food list based on whether there are search results */}
        {(searchResult.length > 0 ? searchResult : foods).map((food) => (
          <li key={food.id} className='foodList'>
            <div className="line line-top">
              <span></span>
            </div>
            <div className="line line-right">
              <span></span>
            </div>
            <div className="line line-bottom">
              <span></span>
            </div>
            <div className="line line-left">
              <span></span>
            </div>
            <img src={food.image} alt={food.name} className='foodImg'/>
            <h3>{food.name}</h3>
            <p>Broccoli score: {food.broccoliScore}</p>
            <p>{food.description}</p>
            <hr></hr>
            <div className='nutrition'>
              <div>
                <p>CALORIES</p>
                <p>{food.calories}</p>
              </div>
              <div>
                <p>FAT</p>
                <p>{food.fat}G</p>
              </div>
              <div>
                <p>CARBS</p>
                <p>{food.carbs}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}

export default FoodList;