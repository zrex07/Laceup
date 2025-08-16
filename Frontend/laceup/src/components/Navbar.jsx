import React, { useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import CartPanel from "./CartPanel";
import LoginPanel from "./LoginPanel";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const closePanels = () => {
    setCartOpen(false);
    setLoginOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link to="/" >
          <h1 className="text-2xl font-bold">Lace<span className="text-blue-500">Up</span></h1>
          </Link>
          {/* Search Bar */}
          <div className="flex items-center w-1/2 max-w-lg">
          <input
            type="text"
            placeholder="Search for products"
            className="h-10 w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg h-10">
            <Search size={16} />
          </button>
        </div>
         


          {/* Icons */}
          <div className="flex gap-4 ">
            <button className="cursor-pointer" onClick={() => { setCartOpen(true); setLoginOpen(false); }}>
              <ShoppingCart size={24} />
            </button>
            <button className="cursor-pointer" onClick={() => { setLoginOpen(true); setCartOpen(false); }}>
              <User size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Dark backdrop */}
      {(cartOpen || loginOpen) && (
        <div
          // className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closePanels}
        ></div>
      )}

      {/* Cart panel */}
      <CartPanel isOpen={cartOpen} onClose={closePanels} />

      {/* Login panel */}
      <LoginPanel isOpen={loginOpen} onClose={closePanels} />
    </>
  );
}

export default Navbar;
