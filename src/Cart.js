import "./style.css";

export default function App() {
  // fetch items list here
  const removeItemFromBasketById = async () => {};

  return (
    <div className="App">
      <hr />
      <div class="items-list">
        <h2>cart</h2>
        <div class="item">
          <strong class="item-title">Item Title</strong>
          <div class="item-price">Price is 20 AED</div>
          <button class="add-to-basket">Delete</button>
        </div>
      </div>
    </div>
  );
}
