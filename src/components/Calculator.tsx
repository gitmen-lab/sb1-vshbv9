import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

interface CalculatorInputs {
  plants: number;
  length: number;
  width: number;
  wattage: number;
  lightType: string;
  experience: string;
  co2: boolean;
  automation: boolean;
}

const Calculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    plants: 1,
    length: 4,
    width: 4,
    wattage: 600,
    lightType: 'LED',
    experience: 'Beginner',
    co2: false,
    automation: false,
  });

  const [yield_, setYield] = useState<{ grams: number; ounces: number } | null>(null);

  const calculateYield = () => {
    // Basic yield calculation formula (simplified for example)
    const baseYield = inputs.plants * 50; // Base yield per plant
    const spaceMultiplier = Math.min((inputs.length * inputs.width) / (inputs.plants * 2), 1.5);
    const experienceMultiplier = {
      Beginner: 0.7,
      Intermediate: 1,
      Advanced: 1.3,
      Expert: 1.5,
    }[inputs.experience];
    const lightingMultiplier = (inputs.wattage / 600) * (inputs.lightType === 'LED' ? 1.2 : 1);
    const co2Multiplier = inputs.co2 ? 1.2 : 1;
    const automationMultiplier = inputs.automation ? 1.1 : 1;

    const totalGrams = baseYield * spaceMultiplier * experienceMultiplier * lightingMultiplier * co2Multiplier * automationMultiplier;
    
    setYield({
      grams: Math.round(totalGrams),
      ounces: Math.round(totalGrams / 28.35 * 100) / 100,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12 transform transition-all hover:shadow-xl">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <CalcIcon className="w-6 h-6" />
        Calculate Your Yield
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Plants
            </label>
            <input
              type="number"
              min="1"
              value={inputs.plants}
              onChange={(e) => setInputs({ ...inputs, plants: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Length (ft)
              </label>
              <input
                type="number"
                min="1"
                value={inputs.length}
                onChange={(e) => setInputs({ ...inputs, length: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Width (ft)
              </label>
              <input
                type="number"
                min="1"
                value={inputs.width}
                onChange={(e) => setInputs({ ...inputs, width: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Light Type
            </label>
            <select
              value={inputs.lightType}
              onChange={(e) => setInputs({ ...inputs, lightType: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="LED">LED</option>
              <option value="HPS">HPS</option>
              <option value="CMH">CMH</option>
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Light Wattage
            </label>
            <input
              type="number"
              min="100"
              step="100"
              value={inputs.wattage}
              onChange={(e) => setInputs({ ...inputs, wattage: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              value={inputs.experience}
              onChange={(e) => setInputs({ ...inputs, experience: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="co2"
                checked={inputs.co2}
                onChange={(e) => setInputs({ ...inputs, co2: e.target.checked })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="co2" className="ml-2 block text-sm text-gray-700">
                CO2 Enrichment
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="automation"
                checked={inputs.automation}
                onChange={(e) => setInputs({ ...inputs, automation: e.target.checked })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="automation" className="ml-2 block text-sm text-gray-700">
                Automation Systems
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={calculateYield}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <CalcIcon className="w-5 h-5" />
          Calculate Yield
        </button>
      </div>

      {yield_ && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Estimated Yield:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow">
              <p className="text-sm text-gray-600">Grams</p>
              <p className="text-2xl font-bold text-green-600">{yield_.grams}g</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow">
              <p className="text-sm text-gray-600">Ounces</p>
              <p className="text-2xl font-bold text-green-600">{yield_.ounces}oz</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
