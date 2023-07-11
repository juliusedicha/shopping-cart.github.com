import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Sony Wh-Ch510 Bluetooth Wireless',
    image: '1001.png',
    price: 150,
  },
  {
    id: 2,
    name: 'boAt Rockerz 450", "price',
    image: '1002.png',
    price: 60,
  },
  {
    id: 3,
    name: 'JBL Tune 760NC',
    image: '1003.png',
    price: 180,
  },
  {
    id: 4,
    name: 'Logitech H111 Wired',
    image: '1004.png',
    price: 25,
  },
  {
    id: 5,
    name: 'APPLE Airpods Max Bluetooth Headset',
    image: '1005.png',
    price: 30,
  },
  {
    id: 6,
    name: 'ZEBRONICS Zeb-Thunder Wired',
    image: '1006.png',
    price: 35,
  },
];



const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const isProductInCart = (productId) => { 
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <header>
        <img src="download.png" alt="Logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
          </ul>
          <div className="cart">
          <h1>Cart</h1> 
            <span>{cartItems.length}</span>
            
          </div>
        </nav>
      </header>

      <main>
        <section>
          <h2>Products</h2>
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h3>Price: ${product.price}</h3>   
                {isProductInCart(product.id) ? (
                  
                  <button onClick={() => removeFromCart(product.id)}><p>Remove from Cart</p></button>
                ) : (
                  <button onClick={() => addToCart(product)}><p>Add to Cart</p></button>
                )}
              
              </li>
            ))}
          </ul>
        </section>

        <section>
      <ul className="social-media">
  <li>
  <a href="https://twitter.com/JuliusEdicha">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </li>
  <li>
  <a href="https://www.linkedin.com/in/julius-edicha-41b895264">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </li>
  <li>
  <a href="https://github.com/juliusedicha">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </li>
  <li>
  <a href="https://wa.me/2349167594782">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  </li>
  

  <li>
  <a href="https://www.facebook.com/100072958796487">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  </li>
  </ul>

    

        </section>
      </main>

      <footer>
        <p>© 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
