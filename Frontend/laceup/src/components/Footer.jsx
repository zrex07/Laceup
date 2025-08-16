import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 fixed bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            LaceUp.pk is your go-to online shoe store for quality footwear at affordable prices.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@laceup.pk</p>
          <p className="text-sm text-gray-400">Phone: +92 300 1234567</p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p className="text-sm text-gray-400">FAQs</p>
          <p className="text-sm text-gray-400">Returns & Exchanges</p>
          <p className="text-sm text-gray-400">Shipping Policy</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} LaceUp.pk - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
