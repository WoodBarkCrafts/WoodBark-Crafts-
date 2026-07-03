"use client";

import { useState, useEffect } from "react";
import { products } from "./data/products";

export default function Home() {
  const [cart, setCart] = useState([]);

  // Load cart on page load
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Add to cart (safe + synced)
  function addToCart(product: any) {
    const stored = localStorage.getItem("cart");
    const currentCart = stored ? JSON.parse(stored) : [];

    const updatedCart = [...currentCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#333]">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-[#4F6A52] text-white">
        <h1 className="text-5xl font-bold">WoodBark Crafts</h1>

        <p className="mt-4 text-xl italic">
          Handmade jewelry, gifts, and natural crafts
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-white text-[#4F6A52] px-6 py-3 rounded-full font-semibold">
            Shop Now
          </button>

          <a
            href="/cart"
            className="border border-white px-6 py-3 rounded-full"
          >
            View Cart
          </a>
        </div>

        <p className="mt-6 text-sm">
          Cart: {cart.length} items
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {product.category}
              </p>

              <p className="mt-4 font-bold">
                ${product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-[#4F6A52] text-white px-4 py-2 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Meet the Maker
        </h2>

        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Hi, I’m Kim. I create handmade jewelry, wedding pieces, natural
          body products, and thoughtful gifts for every occasion.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} WoodBark Crafts. All rights reserved.
      </footer>

    </main>
  );
}