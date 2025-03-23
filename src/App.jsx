import { useState } from 'react';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      title: "Lenovo 3i Chromebook",
      description: "A sleek and lightweight Chromebook designed for speed and efficiency. Perfect for everyday tasks, offering long battery life and a smooth user experience for students and casual users alike.",
      image: "https://i.imgur.com/cuWYyv2.jpg",
      price: 1000,
    },
    {
      id: 2,
      title: "Lenovo IdeaPad 3i 14",
      description: "This slim, 14-inch laptop combines powerful performance and a sharp display. Ideal for both work and entertainment, with a stylish design and reliable battery life for daily use and multitasking.",
      image: "https://i.imgur.com/Tmx1RF9.jpg",
      price: 1200,
    },
    {
      id: 3,
      title: "HP 2023 Pavilion Touchscreen Laptop",
      description: "A versatile 2-in-1 laptop with a full HD touchscreen, offering high performance for both productivity and entertainment. Perfect for work, creative tasks, and media consumption with modern design and features.",
      image: "https://i.imgur.com/AC1Lg0w.jpg",
      price: 1500,
    }
  ];

  // State for the selected product
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState([]);
  // State to toggle the cart visibility
  const [showCart, setShowCart] = useState(false);

  // Function to handle selecting an image/product
  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to add the selected product to the cart with a unique identifier
  const addToCart = () => {
    setCart([...cart, { ...selectedProduct, cartItemId: Date.now() }]);
  };

  // Function to remove an item from the cart based on its unique identifier
  const removeFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.cartItemId !== cartItemId));
  };

  // Function to toggle the cart display
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="container">
      {/* Cart Logo */}
      <div className="cart-logo" onClick={toggleCart}>
        <img 
          src="https://img.icons8.com/fluency-systems-filled/48/000000/shopping-cart.png" 
          alt="Cart Logo" 
          className="cart-logo-image" 
        />
      </div>

      {/* Product Container */}
      <div className="product-container">
        <img 
          className="big-image" 
          src={selectedProduct.image} 
          alt={selectedProduct.title} 
        />
        <div className="small-images">
          {products.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.title}
              onClick={() => handleImageClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3>{selectedProduct.title}</h3>
        <p>{selectedProduct.description}</p>
        <p><strong>Price: </strong>${selectedProduct.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      {/* Conditionally Render Cart Container */}
      {showCart && (
        <div className="cart-container">
          <h3>Shopping Cart ({cart.length})</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="cart-item">
                <p>{item.title} - ${item.price}</p>
                <button 
                  className="remove-button" 
                  onClick={() => removeFromCart(item.cartItemId)}
                >
                  x
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
