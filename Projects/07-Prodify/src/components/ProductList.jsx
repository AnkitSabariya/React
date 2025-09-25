import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const ProductList = () => {
  const [originalProduct, setOriginalProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [view, setView] = useState("grid");
  const [loading, setLoading] = useState(false);

  // Fetch products on category change
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          category === "All"
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products/category/${category}`;
        const result = await axios.get(url);
        const products = result.data.products;

        setOriginalProduct(products);
        setProduct(products);

        if (products.length > 0) {
          const prices = products.map(p => p.price);
          setMinPrice(Math.min(...prices));
          setMaxPrice(Math.max(...prices));
          setRange(Math.max(...prices)); // initial slider = max price
        } else {
          setMinPrice(0);
          setMaxPrice(5000);
          setRange(0);
        }
      } catch (err) {
        console.error(err);
        setOriginalProduct([]);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  // Apply combined filters
  useEffect(() => {
    let filtered = [...originalProduct];

    // Price filter
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= range);

    // Search filter
    if (searchText) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Sorting
    if (sortType === "highTolow") filtered.sort((a,b)=>b.price-a.price);
    else if (sortType === "lowToHigh") filtered.sort((a,b)=>a.price-b.price);
    else if (sortType === "ratingHigh") filtered.sort((a,b)=>b.rating-b.rating);

    setProduct(filtered);
  }, [originalProduct, searchText, range, sortType,minPrice]);

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
            {/* Search */}
            <input
              placeholder="Search products"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            {/* Category */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All categories</option>
              <option value="fragrances">fragrances</option>
              <option value="smartphones">smartphones</option>
              <option value="tablets">tablets</option>
              <option value="furniture">furniture</option>
              <option value="groceries">groceries</option>
              <option value="home-decoration">home-decoration</option>
              <option value="kitchen-accessories">kitchen-accessories</option>
              <option value="laptops">laptops</option>
              <option value="mens-shirts">mens-shirts</option>
              <option value="mens-shoes">mens-shoes</option>
              <option value="mobile-accessories">mobile-accessories</option>
              <option value="motorcycle">motorcycle</option>
              <option value="vehicle">vehicle</option>
              <option value="skin-care">skin-care</option>
              <option value="sports-accessories">sports-accessories</option>
              <option value="sunglasses">sunglasses</option>
              <option value="tops">tops</option>
              <option value="womens-bags">womens-bags</option>
              <option value="womens-dresses">womens-dresses</option>
              <option value="womens-jewellery">womens-jewellery</option>
              <option value="womens-shoes">womens-shoes</option>
              <option value="womens-watches">womens-watches</option>
            </select>

            {/* Price Range */}
            <label htmlFor="range">Price: ₹{minPrice} – ₹{range}</label>
            <input
              id="range"
              type="range"
              min={minPrice}
              max={maxPrice}
              step="10"
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
            />

            {/* Sort */}
            <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
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
          {loading ? (
            <div>Loading products...</div>
          ) : (
            <div>
              Showing <strong>{product.length}</strong> results <br />
              Sorted by: <strong>{sortType}</strong>
            </div>
          )}
          <div className="view-switch">
            <button onClick={() => setView("list")}>List</button>
            <button onClick={() => setView("grid")}>Grid</button>
          </div>
        </div>

        {/* Product Grid */}
        <section className={view === "grid" ? "grid-view" : "list-view"}>
          {!loading && product.length === 0 && (
            <div className="empty">No results match the filters 😢</div>
          )}

          {!loading &&
            product.map((p) => (
              <article key={p.id} className="card">
                <div className="card-image">
                  <img src={p.images[0]} alt={p.title} />
                  <div className="caption">{p.category}</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-footer">
                    <div className="price-rating">
                      <div className="price">₹{p.price}</div>
                      <div className="rating">⭐ {p.rating} / 5</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
};

export default ProductList;
