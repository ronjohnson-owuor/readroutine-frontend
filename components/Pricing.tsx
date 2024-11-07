import React, { useState } from 'react';

const PricingCard = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const features = [
    "Unlimited access",
    "online reading clubs",
    "Personalized reading analytics",
    "personalized user dashboard",
    "Reading progress tracking"
  ];

  return (
    <div className="max-w-md mx-auto bg-lightFg rounded-lg shadow-md p-8">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span 
          className={`cursor-pointer ${isMonthly ? 'font-bold' : 'text-gray-500'}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </span>
        
        {/* Custom Toggle */}
        <div 
          onClick={() => setIsMonthly(!isMonthly)}
          className="w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer"
        >
          <div 
            className={`w-6 h-6 bg-mainColor rounded-full transition-transform duration-300 ${
              isMonthly ? '' : 'translate-x-8'
            }`}
          />
        </div>
        
        <span 
          className={`cursor-pointer ${!isMonthly ? 'font-bold' : 'text-gray-500'}`}
          onClick={() => setIsMonthly(false)}
        >
          Lifetime
        </span>
      </div>

      {/* Price */}
      <div className="text-center border-b border-gray-200 pb-8 mb-8">
        <h3 className="text-4xl font-bold mb-2">
          {isMonthly ? "$5" : "$35"}
        </h3>
        <p className="text-gray-500">
          {isMonthly ? "Monthly" : "Lifetime"}
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">All Features Include:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-mainColor" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <p className="text-center text-gray-500 text-sm mb-8">
        No credit card required
      </p>

      {/* Button */}
      <button className="w-full bg-mainColor text-white font-medium py-3 px-4 rounded-md transition-colors duration-300">
        Start 7-Day Free Trial
      </button>
    </div>
  );
};

export default PricingCard;