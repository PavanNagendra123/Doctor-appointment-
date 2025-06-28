import React from 'react';
import { X, Filter } from 'lucide-react';
import { FilterOptions } from '../types';
import { specialties, locations } from '../data/mockData';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFiltersChange, 
  isOpen, 
  onToggle 
}) => {
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      specialty: '',
      location: '',
      availability: '',
      rating: 0,
      fees: { min: 0, max: 1000 }
    });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6
      `}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
            <button
              onClick={onToggle}
              className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            value={filters.specialty}
            onChange={(e) => updateFilter('specialty', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Availability
          </label>
          <select
            value={filters.availability}
            onChange={(e) => updateFilter('availability', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Any Time</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={(e) => updateFilter('rating', parseFloat(e.target.value))}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">{rating}+ Stars</span>
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={0}
                checked={filters.rating === 0}
                onChange={(e) => updateFilter('rating', parseFloat(e.target.value))}
                className="mr-2 text-blue-600"
              />
              <span className="text-sm text-gray-700">Any Rating</span>
            </label>
          </div>
        </div>

        {/* Fees Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Fees
          </label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Min: ${filters.fees.min}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                step="50"
                value={filters.fees.min}
                onChange={(e) => updateFilter('fees', { 
                  ...filters.fees, 
                  min: parseInt(e.target.value) 
                })}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Max: ${filters.fees.max}
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={filters.fees.max}
                onChange={(e) => updateFilter('fees', { 
                  ...filters.fees, 
                  max: parseInt(e.target.value) 
                })}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;