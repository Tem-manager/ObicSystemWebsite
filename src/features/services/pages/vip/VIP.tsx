import React from "react";

type Props = {};

const VIP: React.FC<Props> = () => {
  return (
    <div className="bg-transparent py-10 h-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
          {/* Left column (Text content) */}
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Exclusive <span className="text-yellow-500">VIP</span> Service
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              Discover the ultimate VIP experience. Our VIP service is tailored
              to provide you with top-tier benefits, ensuring that your
              experience is nothing less than exceptional.
            </p>
            <ul className="list-none space-y-4 text-lg">
              <li className="flex items-center">
                <span className="border-2 border-yellow-500 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 shadow-lg shadow-yellow-500/50">
                  <span className="text-xl">✓</span>
                </span>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <span className="border-2 border-yellow-500 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 shadow-lg shadow-yellow-500/50">
                  <span className="text-xl">✓</span>
                </span>
                Exclusive discounts and offers
              </li>
              <li className="flex items-center">
                <span className="border-2 border-yellow-500 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 shadow-lg shadow-yellow-500/50">
                  <span className="text-xl">✓</span>
                </span>
                Priority access to major events
              </li>
              <li className="flex items-center">
                <span className="border-2 border-yellow-500 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 shadow-lg shadow-yellow-500/50">
                  <span className="text-xl">✓</span>
                </span>
                Personalized services and customization
              </li>
              <li className="flex items-center">
                <span className="border-2 border-yellow-500 text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 shadow-lg shadow-yellow-500/50">
                  <span className="text-xl">✓</span>
                </span>
                Luxurious VIP experience
              </li>
            </ul>
          </div>

          {/* Right column (Image) */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="/images/channels4_profile.png"
              alt="VIP Service"
              className="w-3/4 md:w-2/3 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIP;
