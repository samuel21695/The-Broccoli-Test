function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>, handleSearch: Function) {
  if (e.key === 'Enter') {
    // Trigger search when Enter key is pressed
    handleSearch();
  }
}

export default handleKeyPress;
