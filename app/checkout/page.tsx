"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function placeOrder() {
    alert("Order placed! (demo mode)");
    localStorage.removeItem("cart");
    setCart([]);
  }

  return (
    <main className="min-h-screen p-10 bg-[#F8F5EF]">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow max-w-xl">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}

          <div className="mt-4 text-right font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-[#4F6A52] text-white py-3 rounded-full"
          >
            Place Order
          </button>
        </div>
      )}
    </main>
  );
}