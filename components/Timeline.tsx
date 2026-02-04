import React from 'react';
import { TimelineItem } from '../types';

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 py-4">
      {items.map((item, idx) => (
        <div key={idx} className="mb-8 ml-6 relative group">
          <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-300 group-hover:bg-blue-500 transition-colors shadow-sm"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
             <h3 className="text-base font-bold text-slate-800">{item.org_or_client}</h3>
             <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">{item.period_years}</span>
          </div>
          <h4 className="text-sm font-semibold text-blue-600 mb-2">{item.role}</h4>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600">
            {item.what_did.map((did, i) => (
              <li key={i}>{did}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;