  // Function to fetch the list of foods from the server
async function fetchFoods() {
  try {
    const response = await fetch('http://localhost:3001/foods'); // send a request to fetch the list of foods from the server
    if (!response.ok) {
      throw new Error('Failed to fetch foods');
    } //Throw an error if the response is not successful
    const data = await response.json(); // Parse the response as JSON
    return data;
  } catch (error) {
    console.error('Error fetching data:', error); // Log an error message if an error occurs
    throw error;

  }
}

export default fetchFoods;