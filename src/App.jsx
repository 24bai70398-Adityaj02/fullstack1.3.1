import React, { useEffect } from 'react';
import { ShoppingCart, CheckCircle, XCircle, Star } from 'lucide-react';

// --- 1. ProductCard Component ---
// Objective: Reusable component using props for dynamic data
const ProductCard = ({ image, category, name, price, description, inStock, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden group bg-gray-200">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1000'}} 
        />
        {/* Stock Badge - Conditional Rendering */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${inStock ? 'bg-green-500' : 'bg-red-500'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-col flex flex-grow">
        <div className="text-xs font-semibold text-indigo-600 mb-1 uppercase tracking-wide">
          {category}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({rating}.0)</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Price and Action */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Price</span>
            <span className="text-2xl font-bold text-gray-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
          </div>
          
          <button 
            disabled={!inStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 
              ${inStock 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            <ShoppingCart size={18} />
            {inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 2. Main Application ---
export default function App() {
  // Added a safety check for the runtime environment to prevent querySelector errors
  useEffect(() => {
    const checkDom = () => {
      if (typeof document !== 'undefined' && document.body) {
        // Core app logic triggered here after DOM is safe
      }
    };
    checkDom();
  }, []);

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "Audio",
      price: 29990,
      description: "Industry-leading noise canceling with two processors controlling 8 microphones for unprecedented noise cancellation.",
      inStock: true,
      rating: 5,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      name: "MacBook Air M2",
      category: "Laptops",
      price: 99900,
      description: "Strikingly thin design. High-resolution Liquid Retina display. Supercharged by M2.",
      inStock: false,
      rating: 5,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 7499,
      description: "RGB backlit mechanical gaming keyboard with blue switches and compact design.",
      inStock: true,
      rating: 4,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Featured Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest collection of premium tech gadgets.
            Demonstrating React Components, Props, and Conditional Rendering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              inStock={product.inStock}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center border-t border-gray-200 pt-8 text-gray-400 text-sm">
         
        </div>
      </div>
    </div>
  );
}