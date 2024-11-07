import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

const PromoHeader = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <GraduationCap className="w-5 h-5" />
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <span className="text-sm sm:text-base font-medium">
            Learn Cannabis Cultivation from Legend Jorge Cervantes!
          </span>
        </div>
        <a
          href="https://thcuniversity.org/ref/usmariano/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center gap-2"
        >
          Enroll Now
          <span className="text-yellow-500">→</span>
        </a>
      </div>
    </div>
  );
};

export default PromoHeader;
