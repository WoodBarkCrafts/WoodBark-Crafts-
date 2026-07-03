"use client";

import { useState, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <main className="min-h-screen p-10 bg-[#F8F5EF]">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow flex justify-between"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>

                <p className="font-bold">${item.price}</p>
              </div>
            ))}
          </div>

          <a
            href="/checkout"
            className="mt-6 inline-block bg-[#4F6A52] text-white px-6 py-3 rounded-full"
          >
            Go to Checkout
          </a>
        </>
      )}
    </main>
  );
}