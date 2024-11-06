import React from 'react';
import { Info } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Info className="w-6 h-6" />
        How It Works
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          Our calculator uses a sophisticated algorithm that takes into account multiple factors to estimate your potential cannabis yield:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <p className="text-gray-600">
                <strong className="text-gray-800">Number of Plants:</strong> Base calculation starts with the number of plants and average yield per plant
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <p className="text-gray-600">
                <strong className="text-gray-800">Growing Space:</strong> Optimal space per plant affects overall yield potential
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <p className="text-gray-600">
                <strong className="text-gray-800">Lighting:</strong> Type and wattage directly impact photosynthesis and growth
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <p className="text-gray-600">
                <strong className="text-gray-800">Experience Level:</strong> Grower expertise significantly influences plant health and yield
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <p className="text-gray-600">
                <strong className="text-gray-800">Environmental Factors:</strong> CO2 enrichment and automation systems optimize growing conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;