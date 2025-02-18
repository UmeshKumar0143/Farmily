"use client"

import React, { useState } from 'react';
import { Leaf, Home, Upload, Info, Camera } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

interface PlantInfo {
  title: string;
  description: string;
  prevent: string;
  image_url: string;
  supplement: {
    name: string;
    image_url: string;
    buy_link: string;
  }
}

export default function PlantInfo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(); 

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/submit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSelectedImage(URL.createObjectURL(file));
      response.data.title == "Background Without Leaves"? setError(response.data.description): 
      setPlantInfo({
        title: response.data.title || "Unknown",
        description: response.data.description || "No description available",
        prevent: response.data.prevent || "No prevention steps available",
        image_url: response.data.image_url || "",
        supplement: {
          name: response.data.supplement?.name || "No supplement available",
          image_url: response.data.supplement?.image_url || "",
          buy_link: response.data.supplement?.buy_link || "#",
        },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <nav className="bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={'/'} className="flex items-center group">
              <Leaf className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
              <span className="ml-2 text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">Farmily</span>
            </Link>
            <Link href={'/'} className="flex items-center px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {!selectedImage ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Plant Analysis</h1>
                <p className="text-lg text-gray-600">Upload a clear image of your plant for detailed information and care instructions</p>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <Info className="h-5 w-5 text-emerald-600" />
                <p className="text-gray-600">For best results, ensure your image is clear and well-lit.</p>
              </div>
              <label className="flex flex-col items-center px-6 py-12 bg-emerald-50 text-emerald-600 rounded-xl border-2 border-emerald-200 border-dashed cursor-pointer hover:bg-emerald-100 transition-all group">
                <Camera className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium mb-2">Click to upload a plant image</span>
                <span className="text-sm text-gray-500">Supported formats: JPG, PNG</span>
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
          ) : (
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
              <div className=" h-[40vw]   rounded-2xl   overflow-hidden">
                <div className="relative  shadow-lg p-3">
                  <img
                    src={selectedImage}
                    alt="Uploaded plant"
                    className="w-full h-full object-cover"
                  />
                </div>
                {plantInfo?.supplement && (
                  <div className="bg-white rounded-2xl mt-4 h-[23vh]  shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommended Supplement</h2>
                    <div className="flex items-center space-x-6">
                      <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md">
                        <img
                          src={plantInfo.supplement.image_url}
                          alt={plantInfo.supplement.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">{plantInfo.supplement.name}</h3>
                        <button
                          onClick={() => window.open(plantInfo.supplement.buy_link, '_blank')}
                          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Plant Details</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Name</h3>
                      <p className="text-gray-600 capitalize">{plantInfo?.title}</p>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{plantInfo?.description}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention & Care</h2>
                  <p className="text-gray-600 leading-relaxed">{plantInfo?.prevent}</p>
                </div>

                
              </div>
            </div>
          )}
          {selectedImage && (
  <div className="w-full mt-8 flex justify-center items-center">
    <label
      htmlFor="fileInput"
      className="bg-green-500 text-xl font-bold text-white px-7 py-6 rounded-lg cursor-pointer"
    >
      Upload another Image
    </label>
    <input
      id="fileInput"
      type="file"
      className="hidden"
      onChange={handleImageUpload}
      accept="image/*"
    />
  </div>
)}
        </div>
      </main>
    </div>
  );
}