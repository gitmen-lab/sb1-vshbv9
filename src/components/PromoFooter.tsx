import React from 'react';
import { GraduationCap, Star, ArrowRight } from 'lucide-react';

const PromoFooter = () => {
  return (
    <div className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-16 h-16" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl font-bold">Learn from Jorge Cervantes</h2>
            <p className="text-xl text-green-100">
              Master cannabis cultivation with industry-leading expertise and certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              'Expert-Led Training',
              'Professional Certification',
              'Lifetime Access'
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-semibold text-lg">{feature}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <a
              href="https://thcuniversity.org/ref/usmariano/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors duration-200"
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-green-100">
              Join thousands of successful growers worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoFooter;
