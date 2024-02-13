import { useState, useEffect} from 'react';

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

function T () {
  // State to store the list of foods fetched from the server
  const [foods, setFoods] = useState<Food[]>([]);
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState<string>('');
  // State to store the search result
  const [searchResult, setSearchResult] = useState<Food[]>([]);

  useEffect(() => {
    fetchFoods(); // Call the function to fetch the list of foods when the component mpunts
  }, [searchTerm]);

  // Function to fetch the list of foods from the server
  const fetchFoods = async () => {
    try {
      const response = await fetch('http://localhost:3001/foods'); // send a request to fetch the list of foods from the server
      if (!response.ok) {
        throw new Error('Failed to fetch foods'); //Throw an error if the response is not successful
      }
      const data = await response.json(); // Parse the response as JSON
      setFoods(data); // Save the fetched food data to the state
    } catch (error) {
      console.error('Error fetching data:', error); // Log an error message if an error occurs
    }
  };

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
  

  return (
    <div>
      {/* Input for searching foods */}
      <input
        type='text'
        placeholder='search'
        value={searchTerm}
        onChange={handleSearch} 
      />
      {/* Display food list */}
      <div className='food-list'>
        {foods.map((food) => (
          <li key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Broccoli Score: {food.broccoliScore}</p>
            <img src={food.image} alt={food.name} />
            <p>CALORIES: {food.calories}</p>
            <p>FAT: {food.fat}G</p>
            <p>CARBS: {food.carbs}</p>
          </li>
        ))}
      </div>
    </div>
  )
};

export default T