import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [range, setRange] = useState(0);

  const Api = "https://dummyjson.com/products/search?q=watch";

  useEffect(() => {
    axios
      .get(Api)
      .then((result) => {
        console.log(result.data.products);
        setProduct(result.data.products);
        setOriginalProduct(result.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleSort = (e) => {
    let value = e.target.value;
    setSortType(value);
    if (value === "default") {
      setProduct(originalProduct);
    } else {
      const sortedProduct = [...product];
      if (value === "highTolow") {
        sortedProduct.sort((a, b) => b.price - a.price);
      } else if (value === "lowToHigh") {
        sortedProduct.sort((a, b) => a.price - b.price);
      } else if (value === "ratingHigh") {
        sortedProduct.sort((a, b) => b.rating - a.rating);
      }
      setProduct(sortedProduct);
    }
  };
  const handleRange = (value) => {
    setRange(value);

    const filteredProducts = originalProduct.filter((e) => e.price <= value);
    setProduct(filteredProducts);
  };
const handleSearch = (value) => {
  const searchedProducts = originalProduct.filter((e)=> e.title.toLowerCase().includes(value.toLowerCase()));
  console.log(searchedProducts);
    setProduct(searchedProducts); 
  console.log(searchedProducts);
};


  return (
    <div className="page-container">
      <header className="header">
        <div className="header-top">
          <div>
            <h1 className="title">Products</h1>
            <p className="subtitle">
              Browse, search, filter and sort — UI only.
            </p>
          </div>

          <div className="controls">
            <div className="search-box">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
           
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products"
              />
            </div>

            <select>
              <option>All categories</option>
              <option>Mobile</option>
              <option>Laptop</option>
              <option>Accessories</option>
            </select>
            <label for="name">{range}</label>
            <input
              onChange={(e) => handleRange(e.target.value)}
              type="range"
              value={range}
              min="0"
              max="5000"
              step="10"
              placeholder="Min rating"
            />

            <select onChange={handleSort}>
              <option value="default">Sort: Default</option>
              <option value="highTolow">Price: High → Low</option>
              <option value="lowToHigh">Price: Low → High</option>
              <option value="ratingHigh">Rating: High → Low</option>
            </select>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="results-info">
          <div>
            Showing <strong>{product.length}</strong> results <br />
            Sorted by: <strong>{sortType}</strong>
          </div>
          <div className="view-switch">
            <button>List</button>
            <button>Grid</button>
          </div>
        </div>

        {/* Product Grid */}
        <section className="grid">
          {product.map((e, i) => (
            <article key={i} className="card">
              <div className="card-image">
                <img src={e.images[0]} alt={e.title} />
                <div className="caption">{e.category}</div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{e.title}</h3>
                <p className="card-desc">{e.description}</p>

                <div className="card-footer">
                  <div className="price-rating">
                    <div className="price">₹{e.price}</div>
                    <div className="rating">⭐ {e.rating} / 5</div>
                  </div>

                  <div className="actions">
                    <button className="add-btn">Add</button>
                    <button className="wishlist-btn">Wishlist</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Empty / No results placeholder */}
        <div className="empty">
          If no results match the filters, show a friendly message here.
        </div>

        {/* Pagination */}
        <nav className="pagination">
          <button>Prev</button>
          <button>1</button>
          <button>2</button>
          <button>Next</button>
        </nav>
      </main>

      <footer className="footer">
        UI-only demo • Add JS/logic to make it interactive
      </footer>
    </div>
  );
};

export default ProductList;
