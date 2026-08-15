import { useState } from 'react';

function Search({ onAddTodo }) {
  const [searchText, setSearchText] = useState('');

  const handleAdd = () => {
    onAddTodo(searchText);
    setSearchText('');
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        placeholder="Enter task"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleAdd}>AddTodo</button>
    </div>
  );
}

export default Search;