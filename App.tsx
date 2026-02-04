import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_DATA } from './constants';
import { FilterState } from './types';
import FilterBar from './components/FilterBar';
import CaseStudyCard from './components/CaseStudyCard';
import Timeline from './components/Timeline';

// Icons using SVG components for better performance
const Icons = {
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  badge: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  lightbulb: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548 5.478a1 1 0 01-.996.909H8.244a1 1 0 01-.996-.909L6.703 16.34z" />
    </svg>
  ),
  trending: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
};

const App: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>({
    domain: null,
    industry: null,
    yearRange: INITIAL_DATA.filters.years,
    goal: null
  });

  const [activeTab, setActiveTab] = useState<'cases' | 'timeline' | 'credentials'>('cases');

  // Filter Logic
  const filteredCases = useMemo(() => {
    return INITIAL_DATA.case_studies.filter(item => {
      // Domain Filter
      if (filter.domain && item.domain !== filter.domain) return false;
      // Industry Filter
      if (filter.industry && item.industry !== filter.industry) return false;

      // Year Range Filter
      const [filterStart, filterEnd] = filter.yearRange;
      const itemYears = item.year.match(/\d{4}/g)?.map(Number);
      
      if (!itemYears || itemYears.length === 0) return true; // Keep if no year found

      const itemStart = itemYears[0];
      const itemEnd = itemYears.length > 1 ? itemYears[1] : itemStart;

      // Check overlap: (StartA <= EndB) and (EndA >= StartB)
      return (itemStart <= filterEnd) && (itemEnd >= filterStart);
    });
  }, [filter]);

  const filteredTimeline = useMemo(() => {
    return INITIAL_DATA.timeline.filter(item => {
        // Domain Filter
        if (filter.domain && item.domain !== filter.domain) return false;
        
        // Industry Filter
        if (filter.industry && item.industry && item.industry !== filter.industry) return false;

        // Year Range Filter
        const [filterStart, filterEnd] = filter.yearRange;
        
        let itemStart = item.year_sort;
        let itemEnd = itemStart;

        // Try to parse range from period string (e.g., "2018 ~ 2021")
        const matches = item.period_years.match(/\d{4}/g)?.map(Number);
        if (matches && matches.length > 0) {
            itemStart = matches[0];
            itemEnd = matches.length > 1 ? matches[1] : itemStart;
        }
        
        // Handle "Present" or "현재"
        if (item.period_years.includes('현재') || item.period_years.toLowerCase().includes('present')) {
            itemEnd = new Date().getFullYear();
        }

        return (itemStart <= filterEnd) && (itemEnd >= filterStart);
    });
  }, [filter]);

  const handleQuickAction = (payload: Partial<FilterState>) => {
    setFilter(prev => ({ ...prev, ...payload }));
    // Auto-scroll to content
    const element = document.getElementById('main-content');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Hero Section */}
      <header className="bg-slate-900 text-white pt-16 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-block bg-blue-600/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-blue-500/30">
              AI & Manufacturing Innovation Portfolio
            </div>
            
            {/* Marquee Headline Wrapper */}
            <div className="w-full overflow-hidden mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight whitespace-nowrap animate-marquee">
                {INITIAL_DATA.hero.headline}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {INITIAL_DATA.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {INITIAL_DATA.hero.tags.map(tag => (
                <span key={tag} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-700/50 bg-slate-800 shadow-2xl">
              <img 
                src="https://i.namu.wiki/i/DqwcX-BoY3vU14bzZCrwMIgb17ZpMyFh6NMlZ8yolr-9EncLH_p1-_vkqMNql7phrfzQpARzGJi38Sxy0GuDLVCj38gunSs6sX7few975eJZq0xtjT2u1rCBFLn6XgxYIi2qNifznODvJ4COORD0nA6kGcUtb8UePwJvesfH8aQ.webp"
                alt="Lee Chun-ho" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "https://placehold.co/600x800/1e293b/cbd5e1?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INITIAL_DATA.highlights.map((h, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between hover:border-blue-200 transition-colors">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                   {i === 0 && Icons.briefcase}
                   {i === 1 && Icons.badge}
                   {i === 2 && Icons.lightbulb}
                   {i === 3 && Icons.trending}
                 </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{h.metric_or_fact}</h3>
                <p className="text-xs font-bold uppercase text-slate-400 mb-2">{h.title}</p>
                <p className="text-sm text-slate-600 leading-snug">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions (Assistant Recommendations) */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
            🤖 AI Assistant Recommendations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INITIAL_DATA.quick_actions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleQuickAction(action.filterPayload)}
                className="bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left p-3 rounded-lg transition-all group shadow-sm"
              >
                <div className="text-sm font-bold text-slate-700 group-hover:text-blue-700 mb-1">
                  {action.label}
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {action.description}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div id="main-content">
          <FilterBar 
            domains={INITIAL_DATA.filters.domains}
            industries={INITIAL_DATA.filters.industries}
            yearBounds={INITIAL_DATA.filters.years}
            filterState={filter}
            onFilterChange={(k, v) => setFilter(prev => ({ ...prev, [k]: v }))}
          />

          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-6 space-x-6">
            <button 
              onClick={() => setActiveTab('cases')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'cases' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Case Studies ({filteredCases.length})
            </button>
            <button 
              onClick={() => setActiveTab('timeline')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'timeline' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Timeline
            </button>
            <button 
              onClick={() => setActiveTab('credentials')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'credentials' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Credentials & Patents
            </button>
          </div>

          {/* View Content */}
          <div className="min-h-[400px]">
            {activeTab === 'cases' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCases.map(cs => (
                  <CaseStudyCard key={cs.id} data={cs} />
                ))}
                {filteredCases.length === 0 && (
                  <div className="col-span-2 text-center py-20 text-slate-400">
                    선택한 조건에 맞는 사례가 없습니다. 필터를 조정해보세요.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'timeline' && (
               <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                 <Timeline items={filteredTimeline} />
                 {filteredTimeline.length === 0 && (
                   <div className="text-center py-10 text-slate-400">
                     선택한 기간에 해당하는 이력이 없습니다.
                   </div>
                 )}
               </div>
            )}

            {activeTab === 'credentials' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Certifications & Awards */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-blue-500 rounded mr-2"></span>
                    Certifications & Awards
                  </h3>
                  <div className="space-y-4">
                    {INITIAL_DATA.credentials.filter(c => ['cert', 'award'].includes(c.type)).map((item, i) => (
                      <div key={i} className="flex justify-between items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                        <div>
                          <div className="font-semibold text-slate-700">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.note}</div>
                        </div>
                        <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patents & Publications */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-emerald-500 rounded mr-2"></span>
                    Patents & Publications
                  </h3>
                  <div className="space-y-4">
                    {INITIAL_DATA.credentials.filter(c => ['patent', 'publication'].includes(c.type)).map((item, i) => (
                      <div key={i} className="flex justify-between items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${item.type === 'patent' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                              {item.type}
                            </span>
                          </div>
                          <div className="font-semibold text-slate-700 leading-tight">{item.name}</div>
                          <div className="text-xs text-slate-400 mt-1">{item.note}</div>
                        </div>
                        <span className="text-xs font-mono text-slate-500">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        <p className="max-w-2xl mx-auto px-4">{INITIAL_DATA.disclaimer}</p>
        <p className="mt-2">© {new Date().getFullYear()} Generated by SSMI Portfolio Assistant</p>
      </footer>
    </div>
  );
};

export default App;