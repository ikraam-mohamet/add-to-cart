
import { useState } from "react";

function Shopping() {
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 49.99,
      image:
        "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    },
    {
      id: 3,
      name: "Smart Phone",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
  ];

  const [counts, setCounts] = useState(products.map(() => 0));
  const [cart, setCart] = useState([]);

  // increase quantity
  const increase = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  // decrease quantity
  const decrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) newCounts[index]--;
    setCounts(newCounts);
  };

  // add to cart
  const addToCart = (product, quantity) => {
    if (quantity === 0) {
      alert("Please select quantity first!");
      return;
    }

    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  // remove from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        Shopping Store
      </h1>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p className="text-green-600 font-semibold mt-2">
                ${product.price}
              </p>

              {/* COUNTER */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => decrease(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-xl">
                  {counts[index]}
                </span>

                <button
                  onClick={() => increase(index)}
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                >
                  +
                </button>
              </div>

              <p className="mt-3 font-bold">
                Total: $
                {(product.price * counts[index]).toFixed(2)}
              </p>

              {/* ADD TO CART */}
              <button
                onClick={() =>
                  addToCart(product, counts[index])
                }
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CART */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p>No items added.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {item.name} ({item.quantity} × ${item.price})
              </span>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shopping;

