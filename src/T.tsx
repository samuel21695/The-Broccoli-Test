function T () {
  // Function to fetch the list of foods from the server
  const fetchFoods = async () => {
    try {
      const response = await fetch('/foods'); // send a request to fetch the list of foods from the server
      if (!response.ok) {
        throw new Error('Failed to fetch foods'); //Throw an error if the response is not successful
      }
      const data = await response.json(); // Parse the response as JSON
      setFoods(data); // Save the fetched food data to the state
    } catch (error) {
      console.error('Erro fetching data:', error); // Log an error message if an error occurs
    }
  }

  return (
    <>test</>
  )
}

export default T