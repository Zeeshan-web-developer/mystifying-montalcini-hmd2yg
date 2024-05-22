import "./style.css";

export default function App() {
  const endPoint = "https://fakestoreapi.com/products";

  const handleClickToaddItemsInCart = () => {
    // only add unique items in cart , update only price in case duplicate items
  };

  // fetch items list here
  const fetchITemsList = async () => {};

  return (
    <div className="App">
      <div class="order-amount">
        <span> Total order amount is 100</span>
        <button>View Basket</button>
      </div>

      <input
        type="text"
        name="searchterm"
        placeholder="Enter item title"
        class="search-input"
      />

      <div class="items-list">
        <h2>Items List</h2>
        <div class="item">
          <strong class="item-title">Item Title</strong>
          <div class="item-price">Price is 20 AED</div>
          <button class="add-to-basket">Add to Basket</button>
        </div>
      </div>
    </div>
  );
}
