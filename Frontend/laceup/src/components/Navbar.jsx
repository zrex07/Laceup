import React, { useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import CartPanel from "./CartPanel";
import LoginPanel from "./LoginPanel";
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {   //  accept onSearch from parent
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const closePanels = () => {
    setCartOpen(false);
    setLoginOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue); //  send search value to Home
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    //  If input is cleared, fetch all products again
    if (value.trim() === "") {
      onSearch("");
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/" >
            <h1 className="text-2xl font-bold">
              Lace<span className="text-blue-500">Up</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center w-1/2 max-w-lg">
            <input
              type="text"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search for products"
              className="h-10 w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-lg h-10 cursor-pointer hover:bg-gray-700"
            >
              <Search size={16} />
            </button>
          </form>

          {/* Icons */}
          <div className="flex gap-4">
            <button onClick={() => { setCartOpen(true); setLoginOpen(false); }} className="cursor-pointer">
              <ShoppingCart size={24} />
            </button>
            <button onClick={() => { setLoginOpen(true); setCartOpen(false); }} className="cursor-pointer">
              <User size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* {(cartOpen || loginOpen) && (
        <div onClick={closePanels}></div>
      )} */}

      <CartPanel isOpen={cartOpen} onClose={closePanels} />
      <LoginPanel isOpen={loginOpen} onClose={closePanels} />
    </>
  );
}

export default Navbar;
