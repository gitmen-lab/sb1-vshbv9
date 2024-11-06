import React, { useState } from 'react';
import { Leaf, Info, AlertCircle } from 'lucide-react';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Tips from './components/Tips';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold text-center">Cannabis Yield Calculator</h1>
          </div>
          <p className="text-center text-green-100 text-lg">Maximize Your Cannabis Harvest</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Calculator Section */}
        <Calculator />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Tips Section */}
        <Tips />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold">Cannabis Yield Calculator</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">For Educational Purposes Only</span>
            </div>
          </div>
          
          <div className="border-t border-green-700 pt-6">
            <p className="text-sm text-green-200 text-center mb-4">
              Cannabis Yield Calculator is designed to provide estimates only. Actual yields may vary based on numerous factors including genetics, environmental conditions, and cultivation practices.
            </p>
            <p className="text-sm text-center text-green-300">
              © {new Date().getFullYear()} Cannabis Yield Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;