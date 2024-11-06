import React from 'react';
import { Lightbulb } from 'lucide-react';

const Tips = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Lightbulb className="w-6 h-6" />
        Tips for Maximizing Yield
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <h3 className="text-lg font-semibold text-green-700 mb-3">Optimize Light Distance</h3>
          <p className="text-gray-600">
            Maintain proper distance between lights and canopy to maximize light intensity without burning plants.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <h3 className="text-lg font-semibold text-green-700 mb-3">Perfect Environment</h3>
          <p className="text-gray-600">
            Keep temperature between 70-85°F and humidity at 40-60% during flowering for optimal growth.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <h3 className="text-lg font-semibold text-green-700 mb-3">Training Techniques</h3>
          <p className="text-gray-600">
            Implement LST (Low-Stress Training) or SCROG methods to increase light exposure to bud sites.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <h3 className="text-lg font-semibold text-green-700 mb-3">Nutrient Timing</h3>
          <p className="text-gray-600">
            Follow a precise feeding schedule and adjust nutrients based on growth stage and plant signals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;