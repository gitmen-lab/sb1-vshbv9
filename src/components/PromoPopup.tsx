import React, { useState, useEffect } from 'react';
import { GraduationCap, X, CheckCircle2 } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <GraduationCap className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Learn from Cannabis Legend Jorge Cervantes
          </h2>
          <p className="text-gray-600">
            Master the art of cannabis cultivation with expert guidance
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {[
            'Expert-led courses by Jorge Cervantes',
            'Professional certification program',
            'Comprehensive growing techniques',
            'Advanced cultivation strategies',
            'Industry-recognized credentials'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <a
            href="https://thcuniversity.org/ref/usmariano/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white text-center py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Start Your Cannabis Education Today
          </a>
          <p className="text-center text-sm text-gray-500">
            Join thousands of successful growers who learned from the best
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
