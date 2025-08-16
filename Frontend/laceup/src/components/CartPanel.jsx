import React from "react";

function CartPanel({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="p-4">Cart is empty.</div>
    </div>
  );
}

export default CartPanel;
