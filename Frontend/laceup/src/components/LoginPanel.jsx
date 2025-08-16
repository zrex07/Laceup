import React from "react";

function LoginPanel({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Login</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="p-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2 rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPanel;
