import React from 'react';
import { FilterState } from '../types';

interface FilterBarProps {
  domains: string[];
  industries: string[];
  yearBounds: [number, number];
  filterState: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ domains, industries, yearBounds, filterState, onFilterChange }) => {
  const [minBound, maxBound] = yearBounds;
  const [startYear, endYear] = filterState.yearRange;

  const handleYearChange = (type: 'start' | 'end', value: string) => {
    const val = parseInt(value, 10);
    if (type === 'start') {
      // Ensure start doesn't exceed end
      const newStart = Math.min(val, endYear);
      onFilterChange('yearRange', [newStart, endYear]);
    } else {
      // Ensure end doesn't go below start
      const newEnd = Math.max(val, startYear);
      onFilterChange('yearRange', [startYear, newEnd]);
    }
  };

  const years = Array.from({ length: maxBound - minBound + 1 }, (_, i) => minBound + i);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 sticky top-0 z-20 backdrop-blur-md bg-opacity-90">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        
        <div className="flex flex-col gap-3 w-full md:w-auto">
          {/* Domain Filter */}
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <span className="text-sm font-semibold text-slate-500 mr-2 whitespace-nowrap min-w-[60px]">Domain:</span>
            <div className="flex flex-wrap gap-2">
              {domains.map((d) => (
                <button
                  key={d}
                  onClick={() => onFilterChange('domain', d === '전체' ? null : d)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all whitespace-nowrap ${
                    (filterState.domain === d) || (filterState.domain === null && d === '전체')
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <span className="text-sm font-semibold text-slate-500 mr-2 whitespace-nowrap min-w-[60px]">Industry:</span>
            <div className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <button
                  key={i}
                  onClick={() => onFilterChange('industry', i === '전체' ? null : i)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all whitespace-nowrap ${
                    (filterState.industry === i) || (filterState.industry === null && i === '전체')
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Year Range Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto bg-slate-50 p-2 rounded-lg border border-slate-100 self-start md:self-start">
          <span className="text-sm font-semibold text-slate-500 mr-1 whitespace-nowrap">Period:</span>
          <select 
            value={startYear}
            onChange={(e) => handleYearChange('start', e.target.value)}
            className="text-sm bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            {years.map(y => (
              <option key={`start-${y}`} value={y} disabled={y > endYear}>{y}</option>
            ))}
          </select>
          <span className="text-slate-400 text-sm">~</span>
          <select 
            value={endYear}
            onChange={(e) => handleYearChange('end', e.target.value)}
            className="text-sm bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            {years.map(y => (
              <option key={`end-${y}`} value={y} disabled={y < startYear}>{y}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;