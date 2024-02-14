async function handleSearch(searchTerm: string) {
  try {
    // Fetch foods from the server based on the search term    
    const response = await fetch(`http://localhost:3001/foods?search=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Failed to search foods');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching foods:', error);
    throw error;
  }
}

export default handleSearch;
