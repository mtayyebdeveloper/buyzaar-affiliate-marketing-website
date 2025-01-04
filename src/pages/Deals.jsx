import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Here, you'd fetch the deals data (could be from an API, or static data for now)
    setDeals([
      { id: 1, title: "Laptop Deal", originalPrice: 1000, discount: 25, discountedPrice: 750, link: "#", category: "Electronics", rating: 4.5, image: "laptop.jpg" },
      { id: 2, title: "Smartphone Deal", originalPrice: 800, discount: 15, discountedPrice: 680, link: "#", category: "Electronics", rating: 4.2, image: "smartphone.jpg" },
      { id: 3, title: "Washing Machine Deal", originalPrice: 600, discount: 30, discountedPrice: 420, link: "#", category: "Home & Kitchen", rating: 4.8, image: "washing_machine.jpg" },
    ]);
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Best Deals & Discounts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((deal) => (
          <div key={deal.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={deal.image} alt={deal.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{deal.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{deal.category}</p>
              <div className="flex items-center mt-2">
                <span className="text-lg font-bold text-orange-500">${deal.discountedPrice}</span>
                <span className="line-through text-gray-500 ml-2">${deal.originalPrice}</span>
                <span className="text-green-500 ml-2">({deal.discount}% Off)</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-yellow-500">{'★'.repeat(Math.round(deal.rating))}</span>
                <span className="text-sm text-gray-400 ml-2">({deal.rating})</span>
              </div>
              <Link to={deal.link} className="block mt-4 bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600">
                Grab This Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
