import React from 'react';
import { CloudRain, Bug, Users, Star, LogIn, UserPlus, Apple, Leaf } from 'lucide-react';
import Link from 'next/link';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
              <Leaf className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-600">Farmily</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Smart Farming Solutions with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empowering farmers with intelligent technology to maximize crop yields and make data-driven decisions.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Farmily is your AI-powered farming companion, designed to help farmers make better decisions, 
              increase productivity, and achieve sustainable agriculture through cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[75vw] mx-auto px-8 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link href={'/plant-info'} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md  border-2   transition-shadow">
            <Bug className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Disease Detection</h3>
              <p className="text-gray-600">
              Identify the crop and  diseases early with our AI-powered detection system.
              </p>
            </Link>
            <Link href={'/crop-recomend'} className="bg-white p-8 rounded-xl shadow-sm border-2  hover:shadow-md transition-shadow">
              <CloudRain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Crop Recommendations</h3>
              <p className="text-gray-600">
                Get personalized crop recommendations based on your field conditions and local climate.
              </p>
            </Link>
            {/* <Link href={'/plant-disease'} className="bg-white p-8 rounded-xl shadow-sm border-2  hover:shadow-md transition-shadow">
              <Bug className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Disease Detection</h3>
              <p className="text-gray-600">
                Identify crop diseases early with our AI-powered detection system.
              </p>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Farmers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Farmily has revolutionized how I manage my farm. The crop recommendations are spot-on!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1507103011901-41f2a8d20674' : i === 2 ? '1580489944761-15a19d654956' : '1559087867-ce4c91325525'}?auto=format&fit=crop&w=100&h=100`}
                    alt="Farmer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Organic Farmer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Farmily</h3>
              <p className="text-gray-400">
                Empowering farmers with AI technology for better farming decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href={'/plant-info'}>Disease Detection</a></li>
                <li><a href={'/crop-recomend'} >Crop Recommendations</a></li>
                <a></a>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Farmily. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;