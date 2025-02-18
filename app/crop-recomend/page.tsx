"use client"

import { Home, Leaf } from "lucide-react"
import Link from "next/link"
import type React from "react"

import { useState } from "react"

export default function CropDetails() {
  const [formData, setFormData] = useState({
    nitrogen: "60.00",
    phosphorus: "30.00",
    potassium: "30.00",
    temperature: "22.00",
    humidity: "70.00",
    ph: "6.80",
    rainfall: "120.00",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Crop Recommendation</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-[#f8f9fa] p-6 rounded-lg border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Enter Crop Details</h2>

            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
                  <div className="flex items-center">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name={key}
                        value={value}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                      <div className="absolute right-0 top-0 h-full flex">
                        <button
                          className="px-3 h-full border-l border-gray-300 hover:bg-gray-100 transition-colors text-gray-600"
                          onClick={() => {
                            const newValue = Number.parseFloat(value) - 1
                            setFormData((prev) => ({ ...prev, [key]: newValue.toFixed(2) }))
                          }}
                        >
                          -
                        </button>
                        <button
                          className="px-3 h-full border-l border-gray-300 hover:bg-gray-100 transition-colors text-gray-600"
                          onClick={() => {
                            const newValue = Number.parseFloat(value) + 1
                            setFormData((prev) => ({ ...prev, [key]: newValue.toFixed(2) }))
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors shadow-md">
              Predict
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Smart Crop Recommendations</h2>
            <div className="p-4 bg-green-100 rounded-lg">
              <p className="text-lg font-medium text-green-800">The recommended crop is:</p>
              <p className="text-3xl font-bold text-green-600 mt-2">Rice (Oryza sativa)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

