import React, { useState } from 'react';
import { CaseStudy } from '../types';

const CaseStudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
        expanded ? 'border-blue-400 shadow-lg ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300'
      }`}
    >
      <div className="p-5 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 mb-1">
             <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{data.domain}</span>
             <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{data.industry}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">{data.year}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-700">
          {data.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2">
          {data.problem}
        </p>
        
        {!expanded && (
           <div className="mt-4 flex flex-wrap gap-1">
             {data.stack.slice(0, 3).map(s => (
               <span key={s} className="text-[10px] px-1.5 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded">
                 {s}
               </span>
             ))}
             {data.stack.length > 3 && <span className="text-[10px] text-slate-400">+more</span>}
           </div>
        )}
      </div>

      {/* Expanded Content */}
      <div className={`px-5 pb-5 bg-slate-50/50 border-t border-slate-100 transition-all duration-500 ease-in-out ${expanded ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Approach</h4>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {data.approach.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Outcomes</h4>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {data.outcomes.map((item, i) => <li key={i} className="font-medium text-blue-800">{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Assets</h4>
            <div className="flex flex-wrap gap-2">
               {data.transferable_assets.map((asset, i) => (
                 <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">
                   {asset}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="px-5 py-2 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400 hover:text-blue-500 cursor-pointer transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '접기' : '자세히 보기'}
      </div>
    </div>
  );
};

export default CaseStudyCard;