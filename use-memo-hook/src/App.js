import './App.css';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [products] = useState([
    { id: 1, name: 'Iphone', price: 70000.0 },
    { id: 2, name: 'Redmi', price: 20000.0 },
    { id: 3, name: 'Oppo', price: 30000.0 },
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="time-text">Time: {time}</div>

      <input
        className="search-input"
        type="text"
        placeholder="Search product"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
